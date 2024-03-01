const inputbox = document.getElementById("input-box");
const tasklist = document.getElementById("task-list");

const STORE_NAME = 'taskList'

const taskList = getTasklistFromMemory();


let arr = [];

function press(event)  {
  // if(inputbox.value == '' ){
  //   alert( "Please enter a valid value" );
  //    return;
  // }
  // else{
    if(event.keyCode === 13){
      console.log(event);
      arr.unshift(inputbox.value);
      console.log(arr);
      inputbox.value = '';
      displaytask();
    }

  }
  
// }

function addTask(event){
  if(inputbox.value == ''){
    alert( "Please enter a valid value" );
     return;
  }else{
    console.log(event);
    arr.unshift(inputbox.value);
    console.log(arr);
    inputbox.value='';
    displaytask();
  }
}

function displaytask(){
  tasklist.innerHTML='';
  arr.forEach((Element, index) => {
  let newLI = createList(Element, index);
  tasklist.append(newLI);
})
}

function createList(Element, index){
  const LI = document.createElement('li');
  const SPAN  = document.createElement('span');
  LI.innerHTML= Element;
  SPAN.innerHTML = '&times';
  LI.append(SPAN);
  SPAN.onclick = remove.bind(null,index);
  return  LI;
}

function remove(index){
  arr.splice(index, 1);
  console.log(arr);
  displaytask();
}

function storeInMemory() {
  localStorage.setItem(STORE_NAME,taskList);
}

function getTasklistFromMemory() {
  const storedList = localStorage.getItem(STORE_NAME);
    return storedList ? storedList.split(',') : [];
}

displaytask();