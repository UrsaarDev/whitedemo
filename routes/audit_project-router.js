const express = require("express");

const projectController = require("../controllers/audit_project-controller");

const router = express.Router();

router.post("/project", projectController.createProject);
router.get("/projects", projectController.getProjects);
router.put("/project", projectController.updateProject);
router.get("/projects_latest", projectController.getLatestProjects);
router.get("/project_find", projectController.getProjectsByField);
router.delete("/project/:id", projectController.deleteProject);

module.exports = router;
