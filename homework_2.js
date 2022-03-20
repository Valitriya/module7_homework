let user = {
  name: "Valentina",
  age: 29,
  job: "frontend-developer",
};

function verification(str, obj) {
  for (let value in obj) {
    if (obj[value] == str) {
      return true;
    }   
  }return false;
}
console.log(verification('blabla', user));

