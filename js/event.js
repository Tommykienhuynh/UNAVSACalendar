function propagateFields(id) {
  let eventData = getDBData("events", id);
  if (!eventData) {
    alert("No event was found");
  }
  console.log(eventData);

  // TODO assign the rest of the fields on the page

  /* FOR REFERENCE - DELETE Later
    name: "First event",
    email: "email@email.com",
    eventName: "",
    location: "",
    startDate: "",
    endDate: "",
    bannerURL:
      "https://unavsa.org/wp-content/uploads/2019/12/NEWSLETTER-UNAVSA16-Conference-Reveal-1-400x284.png",
    eventDescription: "",
    questions: "",

*/
  $("#eventName").text(eventData.name);

  $("#backdropImage").css(
    "background-image",
    "url(" + eventData.bannerURL + ")"
  );
  $("#bannerImage").css("background-image", "url(" + eventData.bannerURL + ")");
}
// TODO dynamic pull it from the web url (router stuff)
propagateFields("amlkm2lkm");
