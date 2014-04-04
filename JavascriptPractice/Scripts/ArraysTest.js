function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function() {

    return this.firstName + "" + this.lastName;
};


function Employee(firstName,lastName,position) {
    Person.call(this,firstName,lastName);
    this.position = position;


}

window.alert("asdf");
window.prompt("sasasa", "saasas");
if (confirm("Document you want toolbar continue")) {
    location ="http://www.google.com";
} else {
    location.reload(true);
}


Employee.prototype = new Person();
Employee.prototype.getFullName = function() {
    var fullName = Person.prototype.getFullName.call(this);
    return fullName + "," + this.position;
};


var employee = new Employee("farai", "Motsi", "Developer");
alert(employee.getFullName());