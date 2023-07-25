import { readFile, readdir, writeFile } from "fs";
import { addACase, addASection, getAllSections } from "./api/apiMethods";

const getAllFileNamesOfDirectory = (dir: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    readdir(dir, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
  })
};

const readFromFile = (file: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    readFile(file, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
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
    let json: any[] = JSON.parse(fileContent);

    let result = await addASection(file.split(".").slice(0, -1).join("."));
    console.log(result);

    json.map(async elem => {
      let test = await addACase(result.id, elem.name, JSON.stringify(elem));
      console.log(test);
    });
  }
  
};

main();


const test = async () => {
  let sections = await getAllSections();
  console.log(sections);
}

//test();