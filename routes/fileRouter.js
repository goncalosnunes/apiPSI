const controller = require("../controllers/fileController.js");

// router
const router = require('express').Router()

router.get("/files", controller.getListFiles);
router.get("/files/:name", controller.download);

module.exports = router;