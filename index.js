// Write your solution in this file!
const employee = {
    name: "meep",
    address: "1000 meep st",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]:value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newE= {...employee};
    delete newE[key];
    return newE;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}