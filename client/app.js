$(document).ready(function(){
  $('#submit').click(function(){
    const name = $('#name').val()
    const flavor = $('#wafers').val()
    const order = {
      'name': name,
      'flavor': flavor
    }

    const orderJSON = JSON.stringify(order);
    // $.post('http://localhost:3000/wafers', orderJSON, function(data) {
    //   console.log(data);
    //   console.log(orderJSON);
    // })
    $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/wafers',
            data: orderJSON,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        })

  });
})
