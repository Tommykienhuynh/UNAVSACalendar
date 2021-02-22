var calendarMap = [];
//Gets data from Access map and formats it for javascript calendar
Object.values(ACCESS_MAP).forEach(el => {

  const title = el.eventName;
  const region = el.region;
  const id = el.id;
  const regionID = el.regionID;
  const description = el.description;

  //Reformat dates to yyyy/mm//dd
  let start = el.startDate;
  start = formatDate(start);

  let end = el.endDate;
  end = formatDate(end);

  let subArray = { title, region, regionID, description, start, end, id };


  calendarMap.push(subArray);

});

calendarMap.map((el) => {
  const regionData = REGIONS[(el.regionID) ? el.regionID.toLowerCase() : "default"];
  el.region = regionData.fullName;
  el.color = regionData.color;
  el.textColor = regionData.textColor;
})

console.log(calendarMap);

/* function initCal() {
  $(document).ready(function () {
    let events = toArray(getDBData("events", null));
    var currentTime = new Date();
    // Filter out expired events
    events = events.filter(el => {
      return el.endDate - currentTime > 0;
    });
    let sortedEvents = events.sort((a, b) => {
      return a.endDate - b.endDate;
    });
    let calendarEvents = events.map(el => {
      return {
        title: el.name,
        start: el.startDate.toISOString(),
        end: el.endDate.toISOString()
      };
    });


    //Render Calendar

  });
}; */
//initCal();

var calendarEl = document.getElementById("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: ["interaction", "dayGrid"],

  navLinks: true,
  editable: true,
  eventLimit: true,
  eventClick: function (info) {
    location.href = "http://event-cal.glitch.me/event.html";
  },

  header: {
    center: "title",
    left: "",
    right: "prev,next"
  },

  events:
    calendarMap,
});

calendar.render();
//changeDay(currentTime, events);





function renderEvents(maxCount) {
  maxCount = maxCount || 30;
  console.log(maxCount);
}

function renderEvents(eventList) {
  $("#dayEvents").empty();
  eventList.forEach(el => {
    let parent = document.createElement("div");
    let title = document.createElement("h3");
    title.innerHTML = el.name;
    parent.append(title);
    let location = document.createElement("div");
    location.innerHTML = el.location;
    parent.append(location);

    //Todo add a class for the dates
    let dates = document.createElement("div");
    console.log(el.endDate.getMinutes());
    let startTime =
      el.startDate.getHours() > 12
        ? el.startDate.getHours() - 12
        : el.startDate.getHours();
    startTime += ":";
    startTime +=
      el.startDate.getMinutes() < 10
        ? "0" + el.startDate.getMinutes()
        : el.startDate.getMinutes();
    startTime += el.startDate.getHours() < 12 ? "am" : "pm";
    let endTime =
      el.endDate.getHours() > 12
        ? el.endDate.getHours() - 12
        : el.endDate.getHours();
    endTime += ":";
    endTime +=
      el.endDate.getMinutes() < 10
        ? "0" + el.endDate.getMinutes()
        : el.endDate.getMinutes();
    endTime += el.endDate.getHours() < 12 ? "am" : "pm";
    dates.innerHTML = startTime + " - " + endTime;
    parent.append(dates);
    $("#dayEvents").append(parent);
  });
}

// TODO listener function for changing a day

/**
 *
 * @param(currentDay) date object of the current day
 */
function changeDay(currentDay, events) {
  let currentDayEvents = events.filter(el => {
    return (
      el.endDate.toDateString().toLowerCase() ===
      currentDay.toDateString().toLowerCase() ||
      el.startDate.toDateString().toLowerCase() ===
      currentDay.toDateString().toLowerCase()
    );
  });
  currentDayEvents = currentDayEvents.sort((a, b) => {
    return a.startDate - b.startDate;
  });
};

//Filters calendar to show a particular region
function filterRegion(region) {

  calendarMap = [];
  console.log(calendarMap);

  Object.values(ACCESS_MAP).forEach(el => {
    console.log(region);
    if (el.region === region) {
      const title = el.eventName;
      const region = el.region;
      const description = el.description;

      //Reformat dates to yyyy/mm//dd
      let start = el.startDate;
      start = formatDate(start);

      let end = el.endDate;
      end = formatDate(end);

      let subArray = { title, region, description, start, end };


      calendarMap.push(subArray);
      console.log(calendarMap);

    }
  });
  //TODO Rerender Calendar with calendar.rerenderEvents();
  // TODO update calendar.events();

  calendar.destroy();
  calendar.render();


};

/* Managest toggling the filtering of events*/

$("#regionSelect").change(function () {
  // TODO migrate this to a function instead of on the listener
  console.log(calendar.getEvents());
  console.log(this.value);
  if (this.value.trim() === "") { // blank
    // TODO populate the calendar with ALL events (blank case)
  }
  else {

    let newEvents = calendarMap.filter((el) => {
      return el.regionID === this.value
    });
    let refinedListElements = {};
    newEvents.forEach(el => {
      refinedListElements[el.id] = el;
    })
    console.log(refinedListElements)
    let currentEvents = calendar.getEvents();
    currentEvents.forEach((el) => {
      if (!refinedListElements[el.id]) { // not on the list to be there, remove it
        calendar.getEventById(el.id).remove();
      }
    })
    console.log(calendar.getEvents());
    // Check if all the events exists
    // TODO make sure the number of events matches, i.e go from one region to another region
    if (calendar.getEvents().length != Object.keys(refinedListElements).length) {
      console.log("Event count mismatch")
    }
  }

  // filterRegion(this.value) 

}
);




