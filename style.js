let need = document.getElementById("need");
let have = document.getElementById("have");

let input = document.querySelector("input");
let needText = document.getElementById("needText");
let haveText = document.getElementById("haveText");

function deleteItem (item){
    item.addEventListener('click', ()=>{
        item.remove()
      })
}


function addToNeed() {
    // alert()
  if (input.value == "") {
    alert("Insert Something...");
    return
  }

  let list = document.createElement("li");
  list.innerHTML = `${input.value} <span id="delete">X</span>`;
  needText.appendChild(list);
  input.value = "";
  deleteItem(list)
  
}


function addToHave() {
  if (input.value == "") {
    alert("Insert Something...");
    return
  }

  let list = document.createElement("li");
  list.innerHTML = `${input.value} <span id="delete">X</span>`;
  haveText.appendChild(list);
  input.value = "";

  deleteItem(list)
}

