const redirectRouter = require("express").Router();
// const jwt = require("jsonwebtoken");
// const { SECRET } = require("../utlis/config");
// const User = require("../Model/usersModel");
const Url = require("../Model/urlModel");

//getting full data
redirectRouter.get("/redirect/:id", async (req, res) => {
  const id = req.params.id;
  const urlData = await Url.findById(id);
  res.redirect(urlData.longurl);
});

module.exports = redirectRouter;
