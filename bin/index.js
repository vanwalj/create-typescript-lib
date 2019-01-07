#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const Mustache = require("mustache");

const getTemplateFilePath = filePath =>
  `${path.join(__dirname, "..", "templates", ...filePath)}.tpl`;
const getOutputFilePath = filePath =>
  `${path.join(process.cwd(), ...filePath)}`;
const copyTemplateFile = (filePath, vars) => {
  const templateFile = fs.readFileSync(getTemplateFilePath(filePath), "utf8");

  fs.writeFileSync(
    getOutputFilePath(filePath),
    Mustache.render(templateFile, vars),
  );
};

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Package name",
    },
    {
      type: "input",
      name: "author",
      message: "Author full name",
    },
    {
      type: "input",
      name: "authorEmail",
      message: "Author email",
    },
  ])
  .then(responses => {
    fs.mkdirSync(path.join(process.cwd(), "src"));

    [
      [".gitignore"],
      [".npmignore"],
      [".prettierrc.json"],
      ["jest.config.js"],
      ["LICENSE"],
      ["package.json"],
      ["tsconfig.json"],
      ["tslint.json"],
      ["src/index.ts"],
    ].map(filePath => copyTemplateFile(filePath, responses));
  });
