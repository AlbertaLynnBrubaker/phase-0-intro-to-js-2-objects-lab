const employee = {
    name: "Alie",
    streetAddress: "7977 Marywood Dr"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj, [key]: value
    };
};

let newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
updateEmployeeWithKeyAndValue(newEmployee, "streeAddress", "11 Broadway");


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {
        ...obj
    };
    delete newObj[key];
    return newObj;
};

newEmployee = deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};

destructivelyDeleteFromEmployeeByKey(employee, "name");