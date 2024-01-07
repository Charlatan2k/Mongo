const { Router } = require("express");
const router = Router();
const phtCtrl = require("../controller/profesional.controller");

router.get("/profesionales", phtCtrl.getProfesional);

router.post("/profesionales", phtCtrl.addProfesional);

router.put("/profesionales", phtCtrl.updateProfesional);

router.delete("/profesionales", phtCtrl.deleteProfesional);

router.get("/", phtCtrl.hello);

module.exports = router;
