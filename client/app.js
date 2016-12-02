$(document).ready(function(){
  $('#submit').click(function(){
    const name = $('#name').val()
    const flavor = $('#wafers').val()
    const order = {
      'name': name,
      'flavor': flavor
    }

    const orderJSON = JSON.stringify(order);

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/wafers',
      data: orderJSON,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(data) {
        let message = `${data.name}, ${data.message}`
        $('#message').text(message);
        console.log(data);
      }

    })

  });
})
