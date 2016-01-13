$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    console.log('test');
    var gender = $("input#gender").val();
    var age = parseInt($("input#age").val());
      if (gender === "women" && age <= 35) {
       $("#output5").show();
     }

    var gender = $("input#gender").val();
    var age = parseInt($("input#age").val());
      if (gender === "women" && age >= 35) {
        $("#output4").show();
      }

    var gender = $("input#gender").val();
    var age = parseInt($("input#age").val());
      if (gender === "men" && age <= 35) {
        $("#output3").show();
      }

    var gender = $("input#gender").val();
    var age = parseInt($("input#age").val());
      if (gender === "men" && age >= 35) {
        $("#output2").show();
      } else {
       alert('Please fill all fields!');
     }



    event.preventDefault();
  });
});
