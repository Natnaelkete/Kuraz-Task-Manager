const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  markAsComplete,
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);

router.route("/:id").put(updateTask).delete(deleteTask);

router.patch("/:id/complete", markAsComplete);

module.exports = router;
