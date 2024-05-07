const { Router } = require('express');

const { Project, User } = require("../models");

const homeRoutes = new Router();

homeRoutes.get('/', async (req, res) => {
    const myProjects = await Project.findAll({});

    const plainProjects = [];
    for (const project of myProjects) {
        const plainProject = project.get({ plain: true });
        plainProjects.push(plainProject);
    }

    res.render("home", {
        projects: plainProjects,
        logged_in: req.session.logged_in,
    });
});

homeRoutes.get('/projects/:id', async (req, res) => {
    const { id } = req.params;

    const project = await Project.findByPk(id, {
        include: [User],
    });

    console.log(project.get({ plain: true }));

    res.render("project", {
        project: project.get({ plain: true }),
        logged_in: req.session.logged_in,
    });
});

homeRoutes.get("/login", async (req, res) => {
    res.render("login");
});

module.exports = homeRoutes;