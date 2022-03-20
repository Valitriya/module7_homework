let user = {
  name: "Valentina",
  age: 29,
  job: "frontend-developer",
};

function acquaintance(arg) {
  for (let [key, value] of Object.entries(arg)) {
    console.log(`${key}: ${value}`);
  }
}
acquaintance(user);
