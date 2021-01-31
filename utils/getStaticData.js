import fs from "fs";
import path from "path";

// const fs = require("fs");
// const path = require("path");

const teamDataDirectory = path.join(
  process.cwd(),
  "Data",
  "teams",
  "PreviousTeam"
);

export function getAllTeamPaths() {
  const fileNames = fs.readdirSync(teamDataDirectory); // [ '2018.json', '2019.json' ]

  return fileNames.map((fileName) => {
    return {
      params: {
        year: fileName.replace(/\.json$/, ""),
      },
    };
  });
  //   [
  //     {
  //       params: {
  //         year: "2018",
  //       },
  //     },
  //     {
  //       params: {
  //         year: "2019",
  //       },
  //     }
  //   ];
}
