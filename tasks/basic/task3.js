
  class todoset {
    constructor(){
        this.map = new Map();
    }
    set(id,name,isComplete){

        if(typeof id != "number" || typeof name != "string" || typeof isComplete != "boolean"){
            throw new console.error("Wrong Value Type");
        }
        this.map.set(id,{
            name : name,
            isComplete : isComplete
        });
    }
    updatetask(id, newName,isComplete) {
        let task = this.map.get(id);

        if (task) {
            task.name = newName;
            task.isComplete = isComplete;
        }
    }

    get(id){
        return this.map.get(id);
    }
    deleteset(id){
        this.map.delete(id);
    }
}
  let totaltodo = 0;
    let clearall = document.getElementById("clearBtn");
    let total = document.getElementById("total");
    total.innerText = 0;
    let my_todo = new todoset();
    let taskadd = document.getElementById("addBtn"); 

function newtask(){
    let task = document.getElementById("taskInput").value;
    if(task.trim() != "" && task != undefined){
        totaltodo++;
        my_todo.set(totaltodo,task,false);
        document.getElementById("taskInput").value = " ";
        add_in_ui();
        total.innerText = totaltodo;
        
        
    }
    else{
        alert("Please Enter Valid Value")
    }

}
taskadd.addEventListener("click",newtask);
clearall.addEventListener("click",clear_all_fun);


// jquery
    function add_in_ui(){
    let newtd = my_todo.get(totaltodo).name;  
    $(taskList).append(todoTemplate(totaltodo,newtd));
    }
   var clear_all_fun = () => {
        $("#taskList").html("");
        total = 0;
        my_todo = []
    }
    
function todoTemplate(id, task) {
    return `
        <li id="todo-${id}">
            <div>
                <input type="checkbox" id="${id}" class="complete">
                <label for="${id}" id="task_label${id}">${task}</label>
              
            </div>
           
            <div>
                <button class="edit" id="edit-${id}" data-id="${id}">
                    Edit
                </button>

                <button class="delete" data-id="${id}">
                    Delete
                </button>
            </div>
        </li>
    `;
}
$("#taskList").on("click", ".delete", function () {
    let id = $(this).data("id")
    my_todo.deleteset(id);
    totaltodo--;
    total.innerText = totaltodo;
    $(this).closest("li").remove();
});
$("#taskList").on("click", ".edit", function () {
    let id = $(this).data("id")
    
    let name = my_todo.get(id).name;
    $("#todo-"+id).after(Alert_box(id,name));
    
    $(this).prop("disabled", true);

});
function Alert_box(id,name){
    return `<div class="alert_dialog ${id}">
    <input type="text" name="taskname" id="taskname-${id}" value="${name}">
    <button type="button" data-id = "${id}" class="simp" >edit</button>

    </div>
` ;
}

$(document).on("click", ".simp", function () {
   
    let id = $(this).data("id");
     let task_name = $("#taskname-"+id).val();

    my_todo.updatetask(id,task_name)
 
    $("#task_label" + id).text(task_name)
    $("#edit-" + id).prop("disabled", false);
    $("#task_name-"+id).val("");
    $("."+id).remove();

});
