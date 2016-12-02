$(document).ready(function(){
  $('#submit').click(function(){
    const name = $('#name').val()
    const flavor = $('#wafers').val()
    const order = {
      'name': name,
      'flavor': flavor
    }
    console.log(order);
  })
})
