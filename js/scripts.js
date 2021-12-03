function newItem() {

  //1. Adding a new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if(inputValue === '') {
    alert("You must write something!");
  } else {
      $('#list').append(li);
  }

  //2. Crossing out an item from the list of items
  //Event Listener
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //3. Adding the delete button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  //Event Listener for delete button
  crossOutButton.on('click', function deleteListItem() {
    li.addClass('delete');
  })

  function deleteListItem() {
    li.addClass('delete');
  }

}
//4. Reordering the items
$('#list').sortable();
