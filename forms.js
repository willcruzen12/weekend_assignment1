$(document).ready(function() {
    var array = [];
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        values[element.name] = element.value;
      });

      console.log(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');

      // append to DOM
      appendDom(values);
    });


    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();
      $el.append('<p>' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' ' + empInfo.employeeid + ' ' + empInfo.employeetitle + ' ' + empInfo.employeesalary + '</p>');
      console.log(empInfo);
      var salary = parseInt(empInfo.employeesalary);
      $('.monthlytotal').children().append()


    }




});
