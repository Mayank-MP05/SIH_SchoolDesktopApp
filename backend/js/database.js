let fileDB = {
  STUDENTS: [],
  TEACHERS: []
};

const downloadData = () => {
  let file = path.join(path.join(__dirname, "Files"), "nas.json");
  fs.readFile(file, function(err, data) {
    if (err) {
      return console.log(err);
    }
    // console.log(data);
    fileDB = JSON.parse(data);
    console.log(fileDB);
    //return fileDB;
  });
};

const writeItToFile = () => {};

const getD = () => {
  var tableRow = document
    .getElementById("employeeList")
    .getElementsByTagName("tr");
  if (tableRow.length <= fileDB.STUDENTS.length)
    fileDB.STUDENTS.map(entry => {
      insertNewRecord(entry);
    });
};
const getDTeacher = () => {
  var tableRow = document
    .getElementById("employeeList")
    .getElementsByTagName("tr");
  if (tableRow.length <= fileDB.TEACHERS.length)
    fileDB.TEACHERS.map(entry => {
      insertNewRecord(entry);
    });
};
