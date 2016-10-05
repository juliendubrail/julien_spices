var projectsJSON = require('../projects.json');
var fs = require('fs');
// Project-single route
exports.project_single = function(req, res) {
    var projectname = req.params.projectname;

    var project = projectsJSON[projectname.toLowerCase()];

    res.render('project_single', project);

};

// Projects route

exports.projects = function(req, res) {
    var projects;
    fs.readdir( '../projects', function(err,data){
        console.log(data);
        projects = data.slice(1);
        res.render('projects', {
            projects: projects
        });
    });
};
