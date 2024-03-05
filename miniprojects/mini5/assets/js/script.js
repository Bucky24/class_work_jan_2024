setInterval(function () {
    $("#time_holder").text(dayjs().format("MMM DD, YYYY [at] h:mm:ss A"));
}, 1000);

$("#show_modal_btn").on("click", function() {
    $(".modal").modal('show');
});

var projects = [];

var projectsString = localStorage.getItem("projects");
if (projectsString) {
    projects = JSON.parse(projectsString);
}

for (var i=0;i<projects.length;i++) {
    var project = projects[i];
    printProject(project, i);
}

$("#btn_save").on("click", function(event) {
    event.preventDefault();

    var projectName = $("#project_name").val();
    var projectType = $("#project_type").val();
    var projectDueDate = $("#project_due").val();

    var project = {
        name: projectName,
        type: projectType,
        due: projectDueDate,
    };

    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));

    printProject(project, projects.length-1);

    $(".modal").modal('hide');

    $("#project_name").val("");
    $("#project_type").val(null);
    $("#project_due").val("");
});

function printProject(project, index) {
    var projectName = project.name;
    var projectType = project.type;
    var projectDueDate = project.due;

    var newRow = $("<tr><td>" + projectName + "</td><td>" +projectType + "</td><td>" + projectDueDate + "</td></tr>");

    // find today
    var today = dayjs();
    // find due date
    var dueDateDay = dayjs(projectDueDate);
    // get days between them
    var daysBetween = dueDateDay.diff(today, "day");
    // check those days to see if it's overdue

    var button = $("<button class='btn btn-primary'>Delete</button>");
    var buttonTd = $("<td>");
    buttonTd.append(button);
    newRow.append(buttonTd);

    button.on("click", function() {
        newRow.remove();
        projects.splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(projects));
    });

    if (daysBetween <= 0) {
        newRow.addClass("bg-danger");
    }

    $("#project_table tbody").append(newRow);
}