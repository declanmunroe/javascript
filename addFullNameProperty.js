function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj.fullName;
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName);