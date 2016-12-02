$(document).ready(function(){
  $('#submit').click(function(){
    const name = $('#name').val()
    const flavor = $('#wafers').val()
    const order = {
      'name': name,
      'flavor': flavor
    }
    const orderJSON = JSON.stringify(order);
    $.post('http://localhost:3000/wafers', orderJSON, function(data) {
      //
    })

  });
})
