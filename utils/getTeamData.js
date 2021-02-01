import fs from "fs";
import path from "path";

// const fs = require("fs");
// const path = require("path");

const teamDataDirectory = path.join(process.cwd(), "Data", "teams");

export function getAllTeamPaths() {
  const fileNames = fs.readdirSync(teamDataDirectory); // [ '2018-2019.json', '2019-2020.json', '2020-2021.json' ]

  return fileNames.map((fileName) => {
    return {
      params: {
        year: fileName.replace(".json", ""),
      },
    };
  });
}

export function getAllTeamYear() {
  const fileNames = fs.readdirSync(teamDataDirectory); // [ '2018-2019.json', '2019-2020.json', '2020-2021.json' ]

  return fileNames.map((fileName) => {
    return {
      year: fileName.replace(".json", ""),
    };
  });
}

export async function getTeamData(id) {
  const file = fs.readFileSync(
    path.join(teamDataDirectory, id + ".json"),
    "utf-8"
  );
  const jsonData = await JSON.parse(file);

  return {
    data: jsonData,
  };
}
