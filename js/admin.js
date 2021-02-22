
const popUp = document.getElementById("popUp-container");
const removeTheEvent = document.getElementById("removePopUp-container");
const notification = document.getElementById("notification-container");

let heads = document.getElementsByClassName("ad-tab");
heads = Array.prototype.slice.call(heads, 0);
const remove = $("#remove");

console.log(heads);

var pastMap, futureMap, approve, denied, items, eventViews;


var upcomingMap = {};


// Updates table when user clicks on another tab
function switchTabs(pandelIndex) {
  heads.forEach(element => {
    element.className = "ad-tab ";
  });


  if (pandelIndex === 0) {
    populateTable("tableEntries", ACCESS_MAP)
  } else if (pandelIndex === 1) { // Pending
    items = filterEvents(ACCESS_MAP, "pending");
    populateTable("tableEntries", items)
  } else if (pandelIndex === 2) { // Approved
    approve = filterEvents(ACCESS_MAP, "accepted");
    console.log(approve);
    populateTable("tableEntries", approve);
  } else if (pandelIndex === 3) { // Denied
    populateTable("tableEntries", denied)
  } else if (pandelIndex === 4) { // Upcoming
    populateTable("tableEntries", futureMap)
  } else if (pandelIndex === 5) { // Past
    populateTable("tableEntries", pastMap)
  }

  heads[pandelIndex].classList.add("active");
}


function filterEvents(data, type) {
  let date = new Date(); // get the current time
  // console.log(new Date("2020", "0", "1") - date);
  if (type === "future") {
    return Object.values(data).filter((el) =>
      el.endDate - date >= 0
    )
    /* } else if (type = Object.values(data).filter((el) =>
    (el.endDat == "past"))) { */
  } else if (type === "past") {
    return Object.values(data).filter((el) =>
      el.endDate - date <= 0)
  }
  else if (type === "pending") {

    //const atemp = Object.entries(data).filter(el => console.log(el[1].status == "Pending"));

    //console.log(atemp);

    //console.log(Object.values(data).filter(el => el.status == "Pending"));
    return Object.values(data).filter(el => el.status == "Pending")

  }
  else if (type === "accepted") {
    return Object.values(data).filter(el => el.status == "Accepted");
  }
  else if (type === "denied") {
    return Object.values(data).filter(el => el.status == "Denied");
  }
  else if (type === "views") {
    return Object.values(data).reduce((acc, cur) => (acc + cur.views), 0);
  }
  else {
    return Object.values(data);
  };
}


//Updates all filter maps
function updateStatuses() {
  futureMap = filterEvents(ACCESS_MAP, "future");
  pastMap = filterEvents(ACCESS_MAP, "past");
  items = filterEvents(ACCESS_MAP, "pending");
  approve = filterEvents(ACCESS_MAP, "accepted");
  denied = filterEvents(ACCESS_MAP, "denied");
  eventViews = filterEvents(ACCESS_MAP, "views");
}

//fill status boxes with data from access_key
function fillStatusBoxes() {

  $('#pendingNum').html(items.length);
  $('#approved').html(approve.length);
  $('#denied').html(denied.length);
  $('#futureE').html(futureMap.length);
  $('#views').html(eventViews);
  $('#past').html(pastMap.length);
}

//removes confirmation popUp after clicking red "x"
function removePopUp() {
  popUp.style.display = "none";
  removeTheEvent.style.display = "none";
}



//Convert seconds into Days Hours Months
function convertSeconds(seconds) {
  seconds = parseInt(seconds, 10);
  weeks = Math.floor(seconds / (604800));
  seconds -= weeks * 604800;
  var days = Math.floor(seconds / (3600 * 24));
  seconds -= days * 3600 * 24;
  var hrs = Math.floor(seconds / 3600);
  seconds -= hrs * 3600;
  var mnts = Math.floor(seconds / 60);
  seconds -= mnts * 60;
  return weeks + "weeks " + days + " days, " + hrs + " Hrs, " + mnts + " Minutes, " + seconds + " Seconds";
};

//Change status on access key after pressing accept button
function statusChange(changeTo) {

  if (changeTo == "pending") {
    console.log(tempKey);
    ACCESS_MAP[tempKey].status = "Pending";
    removePopUp();
    init();
  }
  else if (changeTo == "accept") {

    //console.log(tempKey);

    ACCESS_MAP[tempKey].status = "Accepted";
    //localStorage.setItem("access_map", JSON.stringify(ACCESS_MAP));
    removePopUp();
    init();
  }
  else if (changeTo == "denied") {
    console.log(tempKey);
    ACCESS_MAP[tempKey].status = "Denied";
    removePopUp();
    init();
  }
  showNotification(changeTo);
}

//Find which tab is currently active and populatesTable accordind to data
function findActive() {
  $('li').each(function (el) {
    console.log($('this'));
    if ($(this).hasClass('active')) {

      $(this).click();
    }
  });

}

//Show Notification
function showNotification(status) {
  //Find which button is clicked
  if (status === "accept") {
    document.getElementById('notificationP').innerText = "Event has been added to calendar";
    notification.classList.add("show");

  }
  else if (status === "denied") {
    document.getElementById('notificationP').innerText = "Event has been removed from calendar";
    notification.classList.add("show");

  }
  else if (status === "pending") {
    document.getElementById('notificationP').innerText = "Event has moved to pending";
    notification.classList.add("show");
  }
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);

}


//Init
function init() {
  findActive();
  //populateTable("tableEntries", ACCESS_MAP);
  updateStatuses();
  fillStatusBoxes();
  localStorage.setItem("access_map", JSON.stringify(ACCESS_MAP));

}

init();



