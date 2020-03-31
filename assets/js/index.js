// function onFormSubmit(){
// var formData = readFormData();
// insertNewRecord(formData);

// }
// function readFormData() {
//     var formData = {};
//     formData["fullName"] = document.getElementById("fullName").Value;
//     return formData;
// }
// function insertNewRecord(data) {
//     var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell = newRow.insertCell(0);
//     cell.innerHTML = data.fullName;
// }
function validateForm() {
  var x = document.getElementById("fullName").value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }else if(x != "") {
    createCrudList();
  }
}


var crudList = [];
function createCrudList() {
  event.preventDefault();
  var inputValue = document.getElementById("fullName").value;
  var listName = document.createTextNode(inputValue);
  var listId = crudList.length + 1;
  var crudObject = {
    id: listId,
    name: inputValue
  };

  console.log("crudObject", crudObject);
  crudList.push(crudObject);
  var listRow = document.createElement("tr");
  listRow.id = "listRowId" + listId;

  var listNameElement = document.createElement("td");
  listNameElement.id = "listNameElement" + listId;

  var listDeleteElement = document.createElement("td");

  var listEditElement = document.createElement("td");

  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.onclick = function() {
    deleteList(listId);
  };

  var editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  editBtn.onclick = function() {
    editList(listId);
  };

  listNameElement.appendChild(listName);
  listDeleteElement.appendChild(deleteBtn);
  listEditElement.appendChild(editBtn);

  listRow.appendChild(listNameElement);
  listRow.appendChild(listDeleteElement);
  listRow.appendChild(listEditElement);

  document.getElementById("tbodyList").appendChild(listRow);

  document.getElementById("fullName").value = "";
}

function editList(listId) {
  var editListName = document.getElementById("listNameElement" + listId)
    .innerHTML;
  document.getElementById("fullName").value = editListName;
  document.getElementById("listName").value = listId;
  document.getElementById("add").className += "hide";
  document.getElementById("update").classList.remove("hide");
}

function updateCrudList() {
  event.preventDefault();

  var listId = document.getElementById("listName").value;

  console.log("listId", listId);
  var newListName = document.getElementById("fullName").value;
  console.log("newListName", newListName);
  var newListNameElement = document.getElementById("listNameElement" + listId);
  newListNameElement.innerHTML = newListName;

  crudList.map(function(crudObject) {
    console.log(crudObject["id"]);
    if (crudObject["id"] == listId) {
      crudObject["name"] = newListName;
    }
  });
  document.getElementById("fullName").value = "";
  document.getElementById("listName").value = "";
  document.getElementById("update").className += "hide";
  document.getElementById("add").classList.remove("hide");
}

function deleteList(listId) {
  var deleteListName = document.getElementById("listRowId" + listId);
  deleteListName.parentNode.removeChild(deleteListName);
  crudList.splice(listId - 1, 1);
}