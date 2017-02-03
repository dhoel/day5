// shopping-list object
var state = {
  items: []
};

// list modification functions
var addItem = function(state, item) {
  state.items.push(item);
};

// Render functions
var renderList = function(state, element) {
  var itemsHTML = state.items.map(function(item) {
    return '<li>' + item + '</li>';
  });
  element.html(itemsHTML);
}

// Event Listeners
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  addItem(state, $('#shopping-list-entry').val());
  //renderList(state, $('.shopping-list'));
});

// $('.shopping-item-toggle').closest('div').on('click',  )

//console.log(state);

$( 'div' ).on( "click", '.shopping-item-toggle', function( event ) {
  console.log($( event.target ).closest( "li" ));
  //$( event.currentTarget ).closest( "span" ).toggleClass( ".shopping-item__checked" );
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
