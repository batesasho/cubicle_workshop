let cubes = require('../db.json');
const fs = require("fs/promises");
const path = require("path");

exports.cubeById = (id) => cubes[id];

exports.save = (cube) => {
    cubes.push(cube);
    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, "", 4), {encoding: "utf-8"})
}
