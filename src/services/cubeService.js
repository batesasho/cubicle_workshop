let cubes = require('../db.json');
const fs = require("fs/promises");
const path = require("path");

exports.cubeById = (id) => cubes[id];

exports.getAll = (search = "", fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;
    return cubes
        .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);
};

exports.save = (cube) => {
    cubes.push(cube);
    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, "", 4), {encoding: "utf-8"})
};
