
//checks if input fields have the "success-border" class
function checkValidation() {
  //console.log($("#name, #email").hasClass("success-border"));
  if ($("#name").hasClass("success-border") && $("#email").hasClass("success-border")
    && $("#eventDescription").hasClass("success-border") && $("#eventName").hasClass("success-border") &&
    $("#location").hasClass("success-border") && $("#region").hasClass("success-border")
  ) {
    console.log(123);
    return true;

  }
}


$("#eventDescription").blur(function (
  e
) {

  let val = $(this).val();
  if (val.length && val.length < 20) {
    $("#descriptionError").addClass("errorMessage error");
    $(this).removeClass("success-border");
    $(this).addClass("error-border");
  } else {
    $("#descriptionError").removeClass(" error");
    $(this).removeClass("error-border");
    $(this).addClass("success-border");
  }
});


let emailRegEx = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

$("#email").blur(function (e) {
  console.log($(this).val());
  let val = $(this).val();
  if (val.length && !emailRegEx.test(val)) {

    $("#emailError").addClass("errorMessage error");
    $(this).removeClass("success-border");
    $(this).addClass("error-border");
  } else if (!val.length) {
    console.log("Please enter an email address");
    $(this).removeClass("success-border");
    $(this).addClass("error-border");
    $("#emailError").addClass("errorMessage error");


  } else {
    $(this).removeClass("error-border");
    $(this).addClass("success-border");
    $("#emailError").removeClass("error");

  }
});

$("#eventName").blur(function (e) {
  let val = $(this).val();
  if (val.length < 2) {
    console.log($("#eventNameError"));
    $("#eventNameError").addClass("errorMessage error");
    $(this).removeClass("success-border");
    $(this).addClass("error-border");
  } else {
    $(this).removeClass("error-border");
    $(this).addClass("success-border");
    $("eventNameError").removeClass("error");

  }
})

$("#name").blur(function (e) {
  console.log($(this).val());
  let val = $(this).val();
  if (val.length < 2) {
    $("#nameError").addClass("errorMessage error");
    $(this).removeClass("success-border");
    $(this).addClass("error-border");
  } else {
    $(this).removeClass("error-border");
    $(this).addClass("success-border");
    $("#nameError").removeClass("error");
  }
})

$("#location").blur(function (e) {
  let val = $(this).val();
  if (val.length < 1) {
    $("#locationError").addClass("errorMessage error");
    $(this).removeClass("success-border");
    $(this).addClass("error-border");
  } else {
    $(this).removeClass("error-border");
    $(this).addClass("success-border");
    $("#locationError").removeClass("error");
  }
})

$("#region").blur(function (e) {
  let val = $(this).val();
  if (val.length < 1) {
    $("#regionError").addClass("errorMessage error");
    $(this).removeClass("success-border");
    $(this).addClass("error-border");
  } else {
    $(this).removeClass("error-border");
    $(this).addClass("success-border");
    $("#locationError").removeClass("error");

  }
})