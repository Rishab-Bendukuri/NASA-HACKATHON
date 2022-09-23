const exp = require("express");
const nocApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

nocApp.use(exp.json());
nocApp.get(
  "/number",
  expressAsyncHandler(async (request, response) => {
    let nocCollectionObject = request.app.get("nocCollectionObject");
    let nocs = await nocCollectionObject.find().toArray();
    response.send({ message: "nocs list", payload: nocs });
  })
);

module.exports = nocApp;