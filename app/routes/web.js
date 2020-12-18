const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");
const controller = require("../controllers/file.controller");
const { authJwt } = require("../middleware");

let routes = (app) => {
    router.get("/", homeController.getHome);

    router.post("/uploaded", upload, uploadController.uploadFiles);

    router.post("/upload", controller.upload);
    router.get("/files", [authJwt.verifyToken], controller.getListFiles);
    router.get("/files/:name", [authJwt.verifyToken], controller.download);

    return app.use("/", router);
};

module.exports = routes;