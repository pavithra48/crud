
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

     var listEditElement = document.createElement("td");
     console.log("listEditElement",listEditElement);

     var DeleteBtn = document.createElement("button");
     console.log("DeleteBtn",DeleteBtn);
     DeleteBtn.appendChild(document.createTextNode("Delete"));
     DeleteBtn.onclick=function(){
     deleteList(listId);
     }

    
     var EditBtn = document.createElement("button");
     console.log("EditBtn",EditBtn);
     EditBtn.appendChild(document.createTextNode("Edit"));
     EditBtn.onclick=function(){
    editList(listId);

     }
     
     listNameElement.appendChild(listName);
     console.log("listNameElement.appendChild(listName)",listNameElement.appendChild(listName));
     listDeleteElement.appendChild(DeleteBtn);
     console.log("listDeleteElement.appendChild(DeleteBtn)",listDeleteElement.appendChild(DeleteBtn));

     listEditElement.appendChild(EditBtn);
     console.log("listEditElement.appendChild(EditBtn)",listEditElement.appendChild(EditBtn));
     
     listRow.appendChild(listNameElement);
     console.log("listRow.appendChild(listNameElement)",listRow.appendChild(listNameElement));
     listRow.appendChild(listDeleteElement);
     console.log(" listRow.appendChild(listDeleteElement)",listRow.appendChild(listDeleteElement));
     listRow.appendChild(listEditElement);
     console.log("listRow.appendChild(listEditElement)",listRow.appendChild(listEditElement));



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
function editList(listId){
    console.log("listId",listId);
    document.getElementById("fullName").className += "hide";
    document.getElementById("listName").classList.remove("hide");
    document.getElementById("add").className += "hide";
    document.getElementById("update").classList.remove("hide");
   
    var editListName = document.getElementById("listNameElement" + listId).innerHTML;
    console.log("editListName",editListName);
    document.getElementById("listName").value= editListName;



}
function updateCrudList(){
    var listId = document.getElementById("listName").value;
    console.log("listId");
    var newListName= document.getElementById("fullName").value;
    console.log("newListName",newListName);
    var newListNameElement= document.getElementById("listNameElement" + listId);
    console.log("newListNameElement",newListNameElement);
}