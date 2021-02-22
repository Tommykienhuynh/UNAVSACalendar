/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

const form = document.getElementById("form");

function checkAccessCode(searchKey) {
  if (!searchKey) {
    searchKey = $("#accessCodeEntry").val();
  }
  let accessData = ACCESS_MAP[searchKey] ? ACCESS_MAP[searchKey] : null;
  if (!accessData) {
    return;
  }
  Object.keys(accessData).forEach((el) => {
    $(`#${el}`).val(accessData[el]);
  });
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    console.log("yes");
    //showSuccess(input);
  } else {
    console.log("error");
    //showError(input, "Email, is not valid");
  }
}

//Add Ticket to local storage
function addTicket() {
  // let tickets = [];
  // Collecting data
  let ticket = {
    name: $("#name").val(),
    email: $("#email").val(),
    eventName: $("#eventName").val(),
    location: $("#location").val(),
    region: $("#region").val(),
    startDate: $("#startDate").val(),
    endDate: $("#endDate").val(),
    bannerPic: $("#bannerFile").val(),
    eventDescription: $("#eventDescription").val(),
    questions: $("#questions").val(),
  };
  console.log(ticket);
  // TODO generate an access code
  let randomstring = Math.random().toString(36).slice(-8);
  randomstring = String(randomstring);
  console.log(randomstring);
  // Keeps generating random strings until has a unique one
  while (ACCESS_MAP[randomstring]) {
    randomstring = Math.random().toString(36).slice(-8);
  }
  console.log(ticket); // Give you the ticket JSON
  updateEvents(randomstring, ticket);
  storeMap(randomstring);
  // populateTable("tableEntries", ACCESS_MAP);

  /*
  let submitDate = new Date();
  $("#ticketSubmitDate").innerHTML(
    "Ticket Submitted: " +
      submitDate.getMonth +
      1 +
      "-" +
      submitDate.getDate() +
      "-" +
      submitDate.getYear()
  );
  */
  // tickets.push(ticket);
  // console.log(tickets);
  form.reset();

  //Save to local storage
  // localStorage.setItem("ticketList", JSON.stringify(tickets));
}





//Make access code visable
function showCode(accessCode) {
  $("#accessCode").html(accessCode);
}


$(document).ready(() => {
  $("#searchAccess").on("click", (e) => {
    e.preventDefault();
    checkAccessCode(null);
  });
});





//Event Listners
form.addEventListener("submit", function (e) {
  if (!checkValidation()) {
    alert("Please fill out all required fields");
    e.preventDefault();
    return null;
  }

  
  e.preventDefault();
  checkEmail(email);
  addTicket();

  console.log(ACCESS_MAP);
  $("#submittedEvent").toggle();
  showCode("amlkm2lkm");
});

