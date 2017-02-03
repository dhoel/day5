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


    //return '<li>' + item + '</li>';
  });
  console.log(itemsHTML);
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

// $('.shopping-item-toggle').closest('div').on('click',  )



$( '.shopping-item-toggle' ).on( "click",  function( event ) {
  console.log($( event.currentTarget ).closest( "li" ).children('span'));
  var toggleCheck = $( event.currentTarget ).closest( "li" ).children('span').text();
  console.log('check');
  // call toggleItem function (label);
  // renderList();

  //.toggleClass( ".shopping-item__checked" );
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
