var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  writeToJSON(0, formData);
  if (selectedRow == null) {
    insertNewRecord(formData);
    console.log(fileDB);
    writeItToFile(fileDB);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["studentUUID"] = document.getElementById("empCode").value;

  formData["sscMarks"] = document.getElementById("sscMarks").value;
  formData["hscMarks"] = document.getElementById("hscMarks").value;
  formData["gender"] = document.getElementById("gender").value;

  formData["city"] = document.getElementById("city").value;
  //console.log(formData);
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.studentUUID;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.sscMarks;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.hscMarks;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = data.gender;
  cell4 = newRow.insertCell(5);
  cell4.innerHTML = data.city;
  cell4 = newRow.insertCell(6);
  cell4.innerHTML = `<a onClick="onEdit(this)"><button class="btn btn-warning">Edit</button></a>
                       <a onClick="onDelete(this)"><button class="btn btn-danger">Delete</button></a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("sscMarks").value = "";
  document.getElementById("hscMarks").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("sscMarks").value = selectedRow.cells[2].innerHTML;
  document.getElementById("hscMarks").value = selectedRow.cells[3].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
  document.getElementById("city").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.studentUUID;
  selectedRow.cells[2].innerHTML = formData.sscMarks;
  selectedRow.cells[3].innerHTML = formData.hscMarks;
  selectedRow.cells[4].innerHTML = formData.gender;
  selectedRow.cells[5].innerHTML = formData.city;
}

function onDelete(td) {
  if (
    confirm("Are you sure to delete this record ?", "Confirm Delete Warning")
  ) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);

    resetForm();
  }
}

/*
function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}
*/

window.onload = () => {
  downloadData();

  setTimeout(() => {
    getD();
  }, 150);
};
