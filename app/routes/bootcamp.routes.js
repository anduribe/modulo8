const express = require("express");
const router = express.Router();
const bootcampController = require("../controllers/bootcamp.controller");
const { verifyToken } = require("../middleware/auth");

router.post("/bootcamp", verifyToken, (req, res) => {
  bootcampController
    .createBootcamp(req.body)
    .then((bootcamp) => res.send(bootcamp))
    .catch((err) => res.status(500).send(err));
});

router.post("/bootcamp/adduser", verifyToken, (req, res) => {
  const { bootcampId, userId } = req.body;
  bootcampController
    .addUser(bootcampId, userId)
    .then((bootcamp) => res.send(bootcamp))
    .catch((err) => res.status(500).send(err));
});

router.get("/bootcamp/:id", verifyToken, (req, res) => {
  const bootcampId = req.params.id; 
    .findById(bootcampId)
    .then((bootcamp) => res.send(bootcamp))
    .catch((err) => res.status(500).send(err));
});
router.get("/bootcamp", bootcampController.findAll);

module.exports = router;
