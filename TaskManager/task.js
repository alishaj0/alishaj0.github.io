// TASK MANAGER

// Template Literal allows to create seperate lines:
const menu = `TASK MANAGER

What would you like to do:
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager`;


// For storing tasks: bc it is array (not a string) can add/remove values from array:
const tasks = [`Charge MacBook`, `Master JavaScript`];


// For displaying tasks to user, empty string to add as go through loop:
let taskList = "";


// For storing the value for a new task:
let newTask;


// For storing the number/index of the task to be removed:
let num;


// For storing the value of the removed task (will end up being an array when removed items are added):
let removed;


// Displays the menu for the user to select an option. Also sets the users response to the userInput variable:
// Also converting all input values .toUpperCase();
let userInput = prompt(menu).toUpperCase();



/*
IF statement loop, will work but won't continue to keep popping up. Need to use WHILE LOOP to continue popping up.
    if (userInput === "CLOSE"){
        alert(`Thank you for using Task Manager`)
    }
*/


// 'WHILE LOOP' Loops the display menu until the user ends the program (AKA until the user enters "CLOSE") -- 'WHILE' statement will continue loop (as long as 'TRUE') for as long as user enters something that is specificially not "CLOSE". 
// If user enters "CLOSE", the statement will be 'FALSE' and loop will end. --> close !== "CLOSE": false)
while (userInput !== "CLOSE") {
    //checks if did not enter "close", will be true statement and run through the loop

    // Checks if user entered "TASKS"
    if (userInput === "TASKS") {

        // Concatenates each task (or item) in the task array to the taskList string variable
        // Also instead or 'for of Loop' using alert("tasks.join")??? w3schools.com
        for (list of tasks) {

            // Using \n to create a new line (AKA Line break)
            taskList += `${list}\n`;
        }
        // Displays the current tasks to the user
        alert(taskList);

        // Sets the value of the taskList string variable back to an empty string (for next time)
        taskList = "";
    }
    // Checks if the user entered "NEW": if true, will run whats inside.
    else if (userInput === "NEW") {

        // Prompts the user to enter a new task and stores their response
        newTask = prompt(`Please enter the new task:`);

        // 'while loop' set to (true) will continue looping until user enters something 
        while (true) {                       // while(userInput === "") { newTask = prompt(`Please enter new task`);}

            // Checks is user entered enpty string (aka === "";)   
            if (newTask === "") {    // if (newTask ==== "") : user hasn't input anything (empty string)

                //  will prompt(`Please enter the new task`)
                newTask = prompt(`Please enter the new task`);
            } else {

                // Breaks out of the loop since user entered something
                break;
            }
        }
        // Alert user their new task has been added
        alert(`"${newTask}" has been added!`);

        // arrayName(tasks).push(newTask(Variable)) to update "tasks" vairable & adds the user's entry as a new item at the end of the tasks array
        tasks.push(newTask);

    }
    // Checks if the user entered "REMOVE"
    else if (userInput === "REMOVE") {

        // 'While Loop' that continues looping until user enters a valid number 
        while (true) {

            // Concatenates each task/item in the 'tasks' array to the taskLists string variable. Also, seta a number for each task. 
            for (i = 0; i < tasks.length; i++) {
                        //tasks.length = 2
                        // (i = 0; i < 2; i++) -- will run for the length of tasks variable 
                        // i = 0                    // Charge MacBook
                        // 0++ (=1) (1 < 2): true   // Master JavaScript
                        // 1++ (=2) (2 < 2): false  --

                // Using \n to create a new line. Also, adding 1 to i (AKA the index) so the numbers will start displaying at 1.                         
                taskList += `${i + 1}: ${tasks[i]}\n`;
                        // update value of taskList += `${i + 1}:   to add numbers to task list, add 1 so that numbers don't start at zero. 
                        //                 taskList += `${i + 1}: ${tasks[i]}`; 

                                                        // 0 + 1 (=1)-- 1: ${tasks[0]}          1: Charge MacBook \n
                                                        // 1 + 1 (=2)-- 2: ${tasks[1]}          2: Master JavaScript \n                        
            }

            // Prompts user to enter a number and stores their response. Also, using \n to create a new line. Finally, subsracting 1 from the user's entry so it matches the index of tasks array. 
            // (NOTE: JavaScript will attempt to convert a string into a number when you try to subtract from it. Just like parseInt does.)
            num = parseInt(prompt(`Please enter a number to remove:\n${taskList}`)) - 1;
                // num = prompt(`Please enter a number to remove:\n${taskList}`) -1;


            // Verifies the user entered a number within the index/number range
                        // num = #removed - 1   which if a valid option will always be less than tasks.length
            if (num >= 0 && num < tasks.length){

                
                // Removes the selected task/item and sets that value to the removed variable. ('num' is the starting point-the number entered to be removed -1), (second number is how many items to splice from array)
                removed = tasks.splice(num, 1);
                
                // Alerts user of the task/item that has been removed. (NOTE: Using index on the "removed" variable because splice returns what is removed in an array -- will start work with the zero index: [0])
                alert(`"${removed[0]}" has been removed.`);
                
                // Sets the value of the taskList string variable back to an empty string (for next time):
                taskList = "";
                
                // breaks out of loop
                break;
            } else {

                // Alerts user they input an invalid #
                alert(`Not a valid entry`);

                // Sets the value of the taskList string variable back to an empty string (for next time):
                taskList = "";
            }
        } 
    }
    //Displays the menus again. Also, converting value to UPPERCASE:
    userInput = prompt(menu).toUpperCase();
}
// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager`);












// TASK MANAGER

// const menu = `TASK MANAGER

// What would you like to do:
// "TASKS" - Display All Tasks
// "NEW" - Add A New Task
// "REMOVE" - Remove A Task
// "CLOSE" - Close The Task Manager`;

// const tasks = [`Charge MacBook', 'Master JavaScript`];

// let taskList = "";

// let userInput = prompt(menu);


// while (userInput.toUpperCase() !== "CLOSE"){
//     if (userInput.toUpperCase() === "TASKS"){
//         for (list of tasks){
//             taskList = taskList + `\n ${tasks}`
//         }
//         alert(taskList);
//         prompt(menu);
//     } else {
//         prompt(menu);
//     }
//     break;
// } 

// while (userInput.toUpperCase() === "CLOSE"){
//     alert(`Thank you for using Task Manager`)
//     break; 
// }

// ===============================================