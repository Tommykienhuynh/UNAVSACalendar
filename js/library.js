

function updateEvents(accessCode, newEvent) {
  ACCESS_MAP[accessCode] = newEvent; // Store into the object map

  console.log(ACCESS_MAP);

  storeLocally(accessCode, ACCESS_MAP);
}

//Fills Admin chart with form data
function populateTable(tableBody, data) {

  //Gathers info from Acesss key object
  if (!data) { return null; }
  let tableEntries = $(`#${tableBody}`);
  tableEntries.empty();
  const headers = `
  <tr>
  <th class="table-header-title" style="width: 300px;">Name</th>
  <th class="table-header-title" style="width: 90px;">Region</th>
  <th class="table-header-title" style="width: 200px;">Dates</th>
  <th class="table-header-title" style="width: 50px;">Action</th>
</tr>
  `;

  tableEntries.append(headers);


  //Fills table with new data 
  Object.keys(data).forEach((elKey) => {

    let eventData = data[elKey];
    let key = eventData["key"];
    let row = document.createElement("tr");

    let tempElement = document.createElement("td");
    tempElement.innerHTML = eventData["name"];
    row.append(tempElement);

    tempElement = document.createElement("td");
    tempElement.innerHTML = eventData["region"];
    row.append(tempElement);

    // TODO add comments on logic

    tempElement = document.createElement("td");
    const start = String(eventData["startDate"]);

    const end = String(eventData["endDate"]);
    const eventDates = dateFormat(start, end);




    tempElement.innerHTML = eventDates;
    row.append(tempElement);

    /* else {
      tempElement = document.createElement("td");
      let second = new Date() - eventData["endDate"] + " seconds ago";
      console.log(second);
      second = convertSeconds(second);
      tempElement.innerHTML = second;
      row.append(tempElement);
    } */



    tempElement = document.createElement("td");
    let tempButton = document.createElement("button");
    tempButton.setAttribute("data-key", key);

    tempButton.classList.add("actionBTN");
    if (eventData["status"] === "Denied") {
      tempButton.innerText = "undo";
      tempButton.onclick = function () {

        removeTheEvent.style.display = "flex";
        tempKey = this.getAttribute("data-key");

        // TODO call the update status method here
        // updateStatus(key, newStatus); 
        // Rerun data filters
        localStorage.setItem("tempKey", JSON.stringify(key));
        $("#tabName").html(eventData["name"]);
        $("#tabRegion").html(eventData["region"]);
        $("#tabStartDate").html(eventData["startDate"]);
        $("#tabEndDate").html(eventData["endDate"]);
        $("#tabLocation").html(eventData["location"]);
        $("#tabDescription").html(eventData["description"]);
        $("#tabComment").html(eventData["comment"]);


      }

    } else {
      tempButton.innerText = "edit";
      tempButton.onclick = function () {
        tempKey = this.getAttribute("data-key");

        localStorage.setItem("tempKey", JSON.stringify(key));
        $("#tabName").html(eventData["name"]);
        $("#tabRegion").html(eventData["region"]);
        $("#tabStartDate").html(eventData["startDate"]);
        $("#tabEndDate").html(eventData["endDate"]);
        $("#tabLocation").html(eventData["location"]);
        $("#tabDescription").html(eventData["description"]);
        $("#tabComment").html(eventData["comment"]);
        popUp.style.display = "flex";

        //TODO: make it so that if status is "Accepted" the accept button is now unclickable
        if (eventData["status"] === "Accepted") {


          $(".acceptBTN").addClass("acceptBTN-disabled")


        }
        else if (eventData["status"] === "Pending") {
          $(".acceptBTN").removeClass('acceptBTN-disabled');
          console.log($(".acceptBTN"));
        }

      };
    }



    tempElement.append(tempButton);
    row.append(tempElement);

    tableEntries.append(row);
  })
}

//Updates Status box DOM


function toArray(jsonObject) {
  return Object.values(jsonObject);
}
// property: string i.e. startDate
function sortByDate(dataArray, property, ascending) {
  return dataArray.sort((a, b) => {
    return (ascending) ? a[property] - b[property] : b[property] - a[property];
  });
}


//Formats date to (MM-DD-YYYY time - MM-DD-YYYY time)
function dateFormat(sDate, eDate) {
  let sSplit = sDate.split(" ");

  let mon = sSplit[1];
  let day = sSplit[2];
  let year = sSplit[3];
  let dateTimes = sSplit[4];
  dateTimes = tConvert(dateTimes).substring(0, 5) + tConvert(dateTimes).substring(8, 10);
  const start = `${mon}, ${day}, ${year}, ${dateTimes}`;

  sSplit = eDate.split(" ");

  mon = sSplit[1];
  day = sSplit[2];
  year = sSplit[3];
  dateTimes = sSplit[4];
  dateTimes = tConvert(dateTimes).substring(0, 5) + tConvert(dateTimes).substring(8, 10);
  const end = `${mon}, ${day}, ${year}. ${dateTimes}`;
  return start + ' - ' + end;

}

function tConvert(time) {

  // Check correct time format and split into components
  console.log(time);
  // if(!time ) { return null; }
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice(1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(''); // return adjusted time or original string
}
/* remove.addEventListener("click", removeEvent(remove.key)); */

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
};


function removeEvent(key) {
  console.log(key);
}


