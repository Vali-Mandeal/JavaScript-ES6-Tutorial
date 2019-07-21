// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//GETELEMENTBYID //
// console.log(document.getElementById('header-title'));

// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById("main-header");
// headerTitle.onclick = () => {
//     headerTitle.textContent = "JesusLol";
// };

// console.log(headerTitle);

// headerTitle.innerText = "yeeeeeeeeey";
// headerTitle.textContent = "yeeeeeeeeeeey";
// headerTitle.innerHTML = "<h3>yeeeeey</h3>"

// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// let myItems = document.getElementsByClassName('list-group-item');
// for (let i = 0; i < myItems.length; i++) {
//     myItems[i].style.color = "red";    
// }
// console.log(myItems);

// myItemsArray = Array.from(myItems);

// console.log(myItemsArray);


// myItemsArray.forEach(element => {
//     element.style.color = "purple";
//     element.style.color = "red";
// });

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';    
// }

// GETELEMENTSBYTAGNAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f1f9f9';    
// }

// QUERYSELECTOR // //WORKS LIKE CSS SELECTOR //if there are more results, it only grabs the first one
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid black 2px';

// var input = document.querySelector('#txtAddItemField');
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// var item = document.querySelector('.list-group-item'); //gets first item
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';





//////////////////////////////////////
//TRAVERSING THE NODE
//////////////////////////////////////

// var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemList.firstChild);

// FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello One';

// LastChild
// console.log(itemList.lastChild);

// LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'I am za last one!';


////////////////////////////////////////
// SIBLINGS
////////////////////////////////////////

// var itemList = document.querySelector('#items');

// NextSibling
// console.log(itemList.nextSibling); //it gives the element child node
// console.log(itemList.nextElementSibling);

// PreviousSibling
// console.log(itemList.previousSibling);

// PreviousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


////////////////////////////////////////
// CREATE STUFF
////////////////////////////////////////


// // CreateElement
// var newDiv = document.createElement('div');

// // Add Class
// newDiv.className = 'hello';

// // Add Id
// newDiv.id = 'hello1';

// // Add Attribute
// newDiv.setAttribute('title', 'helloDivTilte');

// // Create a text node
// var newDivText = document.createTextNode('Hello World Text');

// // Add text to div
// newDiv.appendChild(newDivText);

// // set it into the dom
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// // once it's inserted in the DOM we can treat it like any other elmenent:
// newDiv.style.fontSize = '12px';

// console.log(newDiv);




////////////////////////////////////////
// Events
////////////////////////////////////////

// let button = document.getElementById('button');

// button.addEventListener('click', buttonClick);


// function buttonClick() {
//     console.log('Button Clicked');
//     let headerTitle = document.getElementById('header-title');
//     if(headerTitle.textContent === 'Item Lister') {
//         headerTitle.textContent = 'JesusLol';
//     }
//     else {
//         headerTitle.textContent = 'Item Lister';
//     }

//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// }

// function buttonClick(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);

//     var output = document.getElementById('output');
//     output.innerHTML = '<h3>'+ e.target.id+ '</h3>';
// }

// function buttonClick(e) {
//     console.log(e.type);

//     console.log(e.clientX);
//     console.log(e.clientY);
    
//     console.log(e.offsetX);
//     console.log(e.offsetY);

//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }


// let button = document.getElementById('button');
// let box = document.getElementById('box');


// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type=text]');
// var form = document.querySelector('form');
    

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);


// function runEvent(e) {
//     console.log('EVENT TYPE: '+ e.type);

//     // document.body.style.display = 'none';

//     // console.log(e.target.value);
//     // let output = document.getElementById('output');

//     // output.innerHTML = "<h3>"+  e.offsetX + "</h3><h3>" + e.offsetY + "</h3>";

//     // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
   
//     // output.innerHTML = '<h3>'+ e.target.value + '</h3>';

    
// }

// var select = document.querySelector('select');

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);


// function runEvent(e) {
//     console.log('EVENT TYPE: '+ e.type);
//     console.log(e.target.value);
// }


// let form = document.querySelector('form');

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     e.preventDefault();
//     console.log('EVENT TYPE: '+ e.type);
// }
