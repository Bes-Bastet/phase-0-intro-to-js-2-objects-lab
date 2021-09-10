// Write your solution in this file!
const employee = {
    name: '',
    streetAddress: '',
};
    

      function updateEmployeeWithKeyAndValue(obj, key, value) {
        const newObj = { ...obj };

        newObj[key] = value;
      
        return newObj;
      }
      const employee2 = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam','streetAddress', '11 Broadway',);
      employee2.name;
      employee2.streetAddress;

    /*function beforeEach() {
    for (const key in employee) {
        delete employee[key];
      }

      employee.name = 'Sam';
  };*/
  //can also use 
  //function updateEmployeeWithKeyAndValue() {
      //const employee2 = {...empployee, name: 'Sam', streetAddress: '11 Broadway;};
      //return employee2

    function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
        object[key] = value;
        return object;
    }
    destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam', 'streetAddress', '12 Broadway');
    employee.name;
    employee.streetAddress;

    function deleteFromEmployeeByKey(object, key, value) {
        const newObj = { ...object };

        for (const key in newObj) {
            delete newObj[key];
          }
              
        return newObj;
      }
      const employee3 = deleteFromEmployeeByKey(employee, 'name');
      employee3.name;
      employee3.streetAddress;

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    for (const key in employee) {
        delete employee[key];
      }
          
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, 'name', 'streeAaddress');
employee.name;
employee.streetAddress;
    
    
  
    