const basic = document.getElementById("basic");
const pro = document.getElementById("pro");
const master = document.getElementById("master");

const button = document.querySelector(".toggle-slider");

let changeNumbers = true;

function checkActive() {
  changeNumbers = !changeNumbers;
  if (!changeNumbers) {
    basic.innerHTML = `${"$" + 19.99}`;
    pro.innerHTML = `${"$" + 24.99}`;
    master.innerHTML = `${"$" + 39.99}`;
  } else {
    basic.innerHTML = `${"$" + 119.99}`;
    pro.innerHTML = `${"$" + 249.99}`;
    master.innerHTML = `${"$" + 399.99}`;
  }
}

button.addEventListener("click", checkActive);
