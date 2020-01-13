const fs = require("fs");
const path = require("path");

pathName = path.join(__dirname, "Files");
file = path.join(pathName, "nas.json");
const writeToJSON = (choice, singleData) => {
  if (choice == 0) {
    fileDB.STUDENTS.push(singleData);

    let updatedObjstr = JSON.stringify(fileDB);
    fs.writeFile(file, updatedObjstr, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log("Student Write to LOCAL");
    });
  }
  if (choice == 1) {
    fileDB.TEACHERS.push(singleData);

    let updatedObjstr = JSON.stringify(fileDB);
    fs.writeFile(file, updatedObjstr, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log("Teacher Write to Local");
    });
  }
};
