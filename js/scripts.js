// Business Logic

function roboNum(str) {
  if (empty(str)) {
    return "Sorry neighbor, letters don't compute...";
  }
  let numArr = [];
  for (i = 0; i <= str; i++) {
    if ([i].toString().includes(3)) {
      numArr.push("Won't you be my neighbor?");
    } else if ([i].toString().includes(2)) {
      numArr.push("Boop!");
    } else if ([i].toString().includes(1)) {
      numArr.push("Beep!")
    } else {
      numArr.push(i);
    }
  }
  return numArr;
}

// UI logic

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    // User input handlers
    const userName = document.getElementById("user").value;
    const numInput = document.getElementById("number").value;
    // Input display
    document.querySelector("span#user").innerText = userName;
    document.querySelector("span#numbers").innerText = roboNum(numInput).join(" ");
    // display response div
    document.querySelector("div#response").removeAttribute("class");

    event.preventDefault();
  }
}

//Utility Logic

function empty(emptyString) {
  return (emptyString.trim().length === 0);
}