import { Router } from "express";
import fetch from "node-fetch";
import Users from "../model/user.js";

const usersRouter = Router();

// -----Get data------
const appendData = async () => {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();
  let allResults = data.results;
  //   console.log(allResult);
  let i = 0;
  while (i < allResults.length) {
    const user = new Users({
      picture: allResults[i].picture.large,
      first: allResults[i].name.first,
      last: allResults[i].name.last,
      gender: allResults[i].gender,
      email: allResults[i].email,
      location: allResults[i].location.street.name,
      pin: allResults[i].location.street.number,
    });
    user.save();
    i++;
  }
};

usersRouter.post("/", (req, res) => {
  let getAllData = appendData();
  try {
    if (getAllData) {
      return res.status(201).send({ sucess: true, getAllData });
    }
  } catch (error) {
    return res.send({ sucess: false, error });
  }
});

// -----Delete-----
usersRouter.delete("/delete", async (req, res) => {
  const deleteAlldata = await Users.deleteMany({});
  try {
    if (deleteAlldata) {
      return res.status(201).send({ sucess: true, message: "Delete Data" });
    }
  } catch (error) {
    return res.send({ sucess: false, error });
  }
});

// -----Filter-----
usersRouter.get("/filter/:key", async (req, res) => {
  let filter = await Users.find({
    $or: [
      {
        gender: req.params.key,
      },
    ],
  });
  try {
    if (filter) {
      return res
        .status(201)
        .send({ sucess: true, message: "Filter data", filter });
    }
  } catch (error) {
    return res.send({ sucess: false, error });
  }
});

// -----Pagenation-----
usersRouter.get("/page", async (req, res) => {
  let pageSize = 10;
  let page = parseInt(req.query.page || 0);
  let totalPage = await Users.countDocuments();
  let pageFind = await Users.find()
    .limit(pageSize)
    .skip(pageSize * page);
  try {
    return res.status(201).send({
      sucess: true,
      allPages: Math.ceil(totalPage / pageSize),
      pageFind: pageFind,
    });
  } catch (error) {
    return res.status(500).send({ sucess: false, error });
  }
});

export default usersRouter;
