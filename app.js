let req = "start";
let todo = [];

while(req != null) {
    req = prompt("Please Enter your request");
    
    if(req == "quit" || req == null) {
        console.log("Quitting app");
        break;
    }
    else if(req == "list") {
        if(todo.length == 0) {
            console.log("List is empty");
        }
        else {
            console.log("Your tasks are as follows");
            for(let i = 0; i < todo.length; i++) {
                console.log(i+1, todo[i]);
            }
        }
    }
    else if(req == "add") {
        let addTask = prompt("Enter a task to add");
        todo.push(addTask);
        console.log(`${addTask} added to the list`);
    }
    else if(req == "delete") {
        if(todo.length == 0) {
            console.log("List is already empty");
        }
        else {
            let del = prompt("Enter which task to delete");
            let idx = -1;
            while(idx == -1) {
                idx = todo.indexOf(del);
                if(idx == -1) {
                    del = prompt("Task not found please enter the correct task");
                    if(del == "quit") {
                        console.log("Returning to main window");
                        break;
                    }
                }
                else {
                    let delTask = todo.splice(idx, 1);
                    console.log(`The task ${delTask} was succesfully deleted`);
                }
            }   

        }

    }
    else {
        console.log("Please enter correct request");
    }
}