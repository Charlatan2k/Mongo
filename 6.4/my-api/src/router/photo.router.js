const { Router } = require("express");
const router = Router();
const phtCtrl = require("../controller/photo.controller");

router.get("/photos/:username", phtCtrl.getPhotos);
router.post("/photos", phtCtrl.createPhoto);
router.put("/photos", phtCtrl.updatePhoto);
router.delete("/photos", phtCtrl.deletePhoto);
router.delete("/photos/:username", phtCtrl.deletePhotos);

module.exports = router;
