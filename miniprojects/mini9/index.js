const inquirer = require("inquirer");
const fs = require("fs");

const filename = process.argv[2];

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your quest?',
        name: 'quest',
    },
    {
        type: 'list',
        choices: ['Green', "Blue"],
        message: 'What is your favorite color?',
        name: 'color',
    },
    {
        type: 'list',
        choices: ['European', "African", "I don't know that!"],
        message: 'What is the air speed velocity of an unladen swallow?',
        name: 'swallow',
    },
    {
        type: 'input',
        message: 'What is your math question?',
        name: 'math',
    },
]).then((data) => {
    console.log(data);

    // example 1
    let template = fs.readFileSync("index.html", "utf8");

    template = template.replace("{{name}}", data.username);
    template = template.replace("{{quest}}", data.quest);
    template = template.replace("{{color}}", data.color);
    template = template.replace("{{bird}}", data.swallow);
    template = template.replace("{{math}}", data.math);

    fs.writeFileSync(filename, template);

    // example 2
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Git Fork Pasta</title>
        <style>
            section {
                display: flex;
                justify-content: center;
                padding-bottom: 10px;
                font-size: 36px;
            }
        </style>
    </head>
    <body>
        <main>
            <section>
                Your name is: ${data.username}
            </section>
            <section>
                Your quest is: ${data.quest}
            </section>
            <section>
                Your favorite color is: ${data.color}
            </section>
            <section>
                Your bird thing: ${data.swallow}
            </section>
            <section>
                Your math thing: ${data.math}
            </section>
        </main>
    </body>
    </html>`;

    //console.log(html);

    fs.writeFileSync("quest_starter_silly_walking_swallow.html", html);
});