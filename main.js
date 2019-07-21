let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let txtBox = document.getElementById('txtItem'); // Get Value from Textbox
let filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault(); //prevent submit

    // Create new LI element
    let li = document.createElement('li');
    // Add class 
    li.className = "list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(txtBox.value));

    // Create delete button element
    let delButton = document.createElement('button');
    // Add class to button elment
    delButton.className = "btn btn-danger btn-sm float-right delte";
    // Append text node
    delButton.appendChild(document.createTextNode('X'));

    // append button to <li>
    li.appendChild(delButton);

    // append li to list
    itemList.appendChild(li);


    // Clear Textbox
    txtBox.value = '';
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }    
}

function filterItems(e) {
    //get txtBox text and convert it to lower case
    let searchText = e.target.value.toLowerCase();

    // get all the <li> within the itemlist and convert it to array, so we can foreach trough it
    let items = Array.from(itemList.getElementsByTagName('li'));

    // declare itemName for storing this property
    let itemName = "";

    // convert to an array
    items.forEach(function(item) {
        itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

