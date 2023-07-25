"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const apiMethods_1 = require("./api/apiMethods");
const getAllFileNamesOfDirectory = (dir) => {
    return new Promise((resolve, reject) => {
        (0, fs_1.readdir)(dir, (err, files) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(files);
            }
        });
    });
};
const readFromFile = (file) => {
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)(file, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const main = async () => {
    let files = await getAllFileNamesOfDirectory("INPUT/JSON");
    for (let file of files) {
        let fileContent = await readFromFile(`INPUT/JSON/${file}`);
        let json = JSON.parse(fileContent);
        let result = await (0, apiMethods_1.addASection)(file.split(".").slice(0, -1).join("."));
        console.log(result);
        json.map(async (elem) => {
            let test = await (0, apiMethods_1.addACase)(result.id, elem.name, JSON.stringify(elem));
            console.log(test);
        });
    }
};
main();
const test = async () => {
    let sections = await (0, apiMethods_1.getAllSections)();
    console.log(sections);
};
//test();
//# sourceMappingURL=app.js.map