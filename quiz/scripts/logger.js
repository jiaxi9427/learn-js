// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg(obj) {
    if (obj && 'errMsg' in obj) {
        console.error(obj.errMsg);
    } else {
        console.error("No error message available.");
    }
}

const exampleObj1 = { errMsg: "Error: Invalid input." };
const exampleObj2 = { errMsg: "Error: Unable to connect to server." };

logMsg(exampleObj1);
logMsg(exampleObj2);