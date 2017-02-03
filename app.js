// shopping-list object
var state = {
  items: [
    { label: 'apples', checked: false}
  ]
};

// list modification functions
function addItem(item) {
  state.items.push({label: item, checked: false});
 // console.log(state);
};

function toggle(index) {
  var target = '#' + index
   state.items[index].checked = true;
   $(target).toggleClass( "shopping-item__checked" );
   //console.log(state);
};





// Render functions
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
  //console.log(itemsHTML);
  element.html(itemsHTML);
}

// Event Listeners
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  var newItem = $('#shopping-list-entry').val();
 // console.log(newItem);
  addItem(newItem);
  renderList(state, $('.shopping-list'));
});


$( '.shopping-list' ).on( "click",  '.shopping-item-toggle', function( event ) {
  var toggleCheck = $( event.currentTarget ).closest( "li" ).attr('id');
  console.log(toggleCheck);
  toggle(toggleCheck);

});

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  var deleteCheck = $(event.currentTarget).closest('li').attr('id');
  //console.log(deleteCheck);
});

$(function(){
  renderList(state, $('.shopping-list'));
});


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
