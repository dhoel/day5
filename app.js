// shopping-list object
var state = {
  items: []
};

// list modification functions

  //Add item function
function addItem(item) {
  state.items.push({label: item, checked: false});
 // console.log(state);
}

  //Check item toggle function
function toggle(index) {
  var target = '#' + index
   if (!state.items[index].checked) {
     state.items[index].checked = true;
   } else { state.items[index].checked = false;
     }
   $(target).toggleClass( "shopping-item__checked" );
   //console.log(state);
}

  //Delete item functions
function deleteItem(index) {
  state.items.splice(index, 1);
}


// Render function
function renderList(state, element) {
  var itemsHTML = state.items.map(function(item, index) {
    return `
      <li id="${index}">
        <span class="shopping-item">${ item.label }</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `;
});
  element.html(itemsHTML);

  for (var i = 0; i < state.items.length; i++) {
    if (state.items[i].checked) {
      var target = '#' + i;
      $(target).toggleClass( "shopping-item__checked" );
    }
  }

}

// Event Listeners

  //Submit button listener
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  var newItem = $('#shopping-list-entry').val();
 // console.log(newItem);
  addItem(newItem);
  renderList(state, $('.shopping-list'));
});

  //Check button Listener
$( '.shopping-list' ).on( "click",  '.shopping-item-toggle', function( event ) {
  var itemIndex = $( event.currentTarget ).closest( "li" ).attr('id');
  //console.log(itemIndex);
  toggle(itemIndex);
});

  //Delete button listener
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  var itemIndex = $(event.currentTarget).closest('li').attr('id');
  deleteItem(itemIndex);
  renderList(state, $('.shopping-list'));
});

  //for testing - render the list when the page loads
// $(function(){
//   renderList(state, $('.shopping-list'));
// });


/* pseudocode for shopping list
user inputs item in form:
>add new item to array
>render the list
>event listener for form submit

- add new item to array:
>

- check list item
> event listener for check button
> add the .shopping-item__checked class to item name span

*/
