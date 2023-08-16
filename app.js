let call = document.querySelector("#button");

let input = document.getElementById("input");

let todoList = document.getElementById("todolist");

let arr=[];

call.onclick = function(){
    arr.push(input.value);
    // console.log(input.value,arr);
    input.value="";
    appendList()
};

function appendList(){
    todoList.innerHTML = null;
    for(let i=0;i<arr.length;i++){
        // let newList = document.createElement("li");
        // newList.innerText=arr[i];
        // todoList.append(newList);
        todoList.innerHTML+=`<li> ${arr[i]}<a onclick=editList(${i}) >Edit</a> <a onclick=deleteList(${i})>x</a> </li>`
    }
}




function editList(index){
    let editValue = prompt("Enter New Title")
    if(editValue!=null && editValue!=""){
    arr[index] = editValue
    appendList()
    }
}

function deleteList(index){
    let pop = confirm("I am deleting this!")
    if (pop){
        arr.splice(index,1)
        appendList()
    }
}