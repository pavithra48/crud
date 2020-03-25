
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

var crudList=[];
console.log("crudList",crudList);
function createCrudList(){
    event.preventDefault();
    var inputValue =document.getElementById("fullName").value;
    console.log("inputValue",inputValue);
    var listName =document.createTextNode(inputValue);
    console.log("listName",listName);
     var listId = crudList.length + 1;
    var crudObject = { 
         id:listId,
        name:inputValue
    };

    console.log("crudObject",crudObject);
    crudList.push(crudObject)
    console.log("crudList inside the function",crudList);
     var listRow = document.createElement("tr");
     console.log("listRow",listRow);
     listRow.id = "listRowId" + listId;
     
     var listNameElement = document.createElement("td");
     console.log("listNameElement",listNameElement);
     listNameElement.id ="listNameElement" + listId;

     var listDeleteElement = document.createElement("td");
     console.log("listDeleteElement",listDeleteElement);

     var DeleteBtn = document.createElement("button");
     console.log("DeleteBtn",DeleteBtn);
     DeleteBtn.appendChild(document.createTextNode("Delete"));
     DeleteBtn.onclick=function(){
     deleteList(listId);
     }
    
     
     listNameElement.appendChild(listName);
     console.log("listNameElement.appendChild(listName)",listNameElement.appendChild(listName));
     listDeleteElement.appendChild(DeleteBtn);
     console.log("listDeleteElement.appendChild(DeleteBtn)",listDeleteElement.appendChild(DeleteBtn));

     listRow.appendChild(listNameElement);
     console.log("listRow.appendChild(listNameElement)",listRow.appendChild(listNameElement));
     listRow.appendChild(listDeleteElement);
     console.log(" listRow.appendChild(listDeleteElement)",listRow.appendChild(listDeleteElement));



     document.getElementById("tbodyList").appendChild(listRow);
     console.log("listRow",document.getElementById("tbodyList").appendChild(listRow));



     document.getElementById("fullName").value="";

}

function deleteList(listId){
    console.log("listId",listId);
    var deleteListName = document.getElementById("listRowId" + listId);
    deleteListName.parentNode.removeChild(deleteListName);

    crudList.splice(listId-1 ,1);

}
