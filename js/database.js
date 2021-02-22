/** 

Similar to an angular service + database

**/

// TODO write a function to pull this data from local storage
function pullMap(id) {
  console.log(JSON.parse(localStorage.getItem(id)));
  return JSON.parse(localStorage.getItem(id));
}

const DB_PERSONEL = {};

const REGIONS = {
  default: {
    fullName: "No region",
    color: "white",
    textColor: "black",
  },
  norcal: {
    fullName: "Norcal",
    color: "#2DDE98",
    textColor: "black",
  },
  socal: {
    fullName: "socal",
    color: "#8e43e7",
    textColor: "white",
  },
  northwest: {
    fullName: "Northwest",
    color: "#FF6C5F",
    textColor: "white",
  },
  southwest: {
    fullName: "Southwest",
    color: "#FF4F81",
    textColor: "white",
  },
  south: {
    fullName: "South",
    color: "#ff4f81",
    textColor: "white",
  },
  newengland: {
    fullName: "New England",
    color: "#00AEFF",
    textColor: "white",
  },
  westerncanada: {
    fullName: "Western Canada",
    color: "#112233",
    textColor: "white",
  },
  easterncanada: {
    fullName: "Eastern Canada",
    color: "#b84592",
    textColor: "white",
  },
  midwest: {
    fullName: "Midwest",
    color: "#050f2c",
    textColor: "white",
  },
  gulfcoast: {
    fullName: "Gulf Coast",
    color: "#ffc168",
    textColor: "black",
  },
  midatlantic: {
    fullName: "Mid Atlantic",
    color: "#112233",
    textColor: "white",
  },
  central: {
    fullName: "Cental",
    color: "#003666",
    textColor: "white",
  }
};


var ACCESS_MAP = {
  auiojkl42: {
    name: "",
    email: "email@email.com",
    eventName: "Eastern Canada Conference",
    id: "auiojkl42",
    location: "Your computer - virtual",
    region: "Eastern Canada",
    regionID: "easterncanada",
    startDate: new Date("2021", "02", "5", "22", "00"),
    endDate: new Date("2021", "02", "7", "23", "00"),
    bannerURL:
      "https://unavsa.org/wp-content/uploads/2019/12/NEWSLETTER-UNAVSA16-Conference-Reveal-1-400x284.png",
    eventDescription: "",
    questions: "",
    status: "Accepted",
    views: 3,
    key: "auiojkl42"
  },
  jknmnmasd: {
    name: "",
    email: "email@email.com",
    eventName: "Same day second event",
    id: "jknmnmasd",
    location: "Your computer - virtual",
    region: "Norcal",
    regionID: "norcal",
    startDate: new Date("2021", "02", "26", "23", "00"),
    endDate: new Date("2021", "02", "26", "23", "30"),
    bannerURL:
      "https://unavsa.org/wp-content/uploads/2019/12/NEWSLETTER-UNAVSA16-Conference-Reveal-1-400x284.png",
    eventDescription: "",
    questions: "",
    status: "Accepted",
    views: 12,
    key: "jknmnmasd"
  },
  amlkm2lkm: {
    name: "",
    email: "email@email.com",
    eventName: "First event",
    id: "amlkm2lkm",
    location: "",
    region: "Southwest",
    regionID: "southwest",
    startDate: new Date("2021", "02", "10"),
    endDate: new Date("2021", "02", "11"),
    bannerURL:
      "https://unavsa.org/wp-content/uploads/2019/12/NEWSLETTER-UNAVSA16-Conference-Reveal-1-400x284.png",
    eventDescription: "",
    questions: "",
    status: "Pending",
    views: 14,
    key: "amlkm2lkm"
  },
  jplmj42ca: {
    name: "",
    email: "email@email.com",
    id: "jplmj42ca",
    eventName: "Second event",
    location: "",
    region: "South",
    regionID: "south",
    startDate: new Date("2021", "02", "12"),
    endDate: new Date("2021", "02", "13"),
    bannerURL:
      "https://unavsa.org/wp-content/uploads/2019/12/NEWSLETTER-UNAVSA16-Conference-Reveal-1-400x284.png",
    eventDescription: "",
    questions: "",
    status: "Pending",
    views: 10,
    key: "jplmj42ca"
  },
  if9oed5n: {
    bannerPic: "",
    email: "email@email.com",
    endDate: "2018-07-22",
    eventDescription: "ASd",
    eventName: "Northwest Conference",
    location: "asdas",
    name: "",
    questions: "asd",
    region: "Northwest",
    regionID: "northwest",
    startDate: new Date("2021", "02", "22"),
    endDate: new Date("2021", "02", "23"),
    status: "Accepted",
    views: 10,
    key: "if9oed5n"
  },
  iz934edrn: {
    bannerPic: "",
    email: "aemail@email.com",
    endDate: "2018-07-22",
    eventDescription: "ASd",
    eventName: "Fake event",
    location: "asdas",
    name: "",
    questions: "asd",
    region: "New England",
    
    regionID: "newengland",
    startDate: new Date("2021", "02", "02"),
    endDate: new Date("2021", "02", "02"),
    status: "Denied",
    views: 6,
    key: "iz934edrn"
  },
  iz934ko2k: {
    bannerPic: "",
    email: "aemail@email.com",
    endDate: "2018-07-22",
    eventDescription: "ASd",
    eventName: "Socal CPP Fundraiser",
    location: "asdas",
    name: "Socal CPP Fundraiser",
    questions: "asd",
    region: "Socal",
    regionID: "socal",
    startDate: new Date("2021", "02", "02"),
    endDate: new Date("2021", "02", "02"),
    status: "Denied",
    views: 6,
    key: "iz934edrn"
  },
  ad3k2m3f9: {
    bannerPic: "",
    email: "aemail@email.com",
    endDate: "2018-07-22",
    eventDescription: "ASd",
    eventName: "Mid-West Conference",
    location: "asdas",
    name: "Socal CPP Fundraiser",
    questions: "asd",
    region: "SoCal",
    regionID: "socal",
    startDate: new Date("2021", "02", "16"),
    endDate: new Date("2021", "02", "18"),
    status: "Denied",
    views: 6,
    key: "ad3k2m3f9"
  },
  cio9293c: {
    bannerPic: "",
    email: "aemail@email.com",
    endDate: "2018-07-22",
    eventDescription: "ASd",
    eventName: "Western Canada CPP Fundraiser",
    location: "asdas",
    name: "",
    questions: "asd",
    region: "Socal",
    regionID: "socal",
    startDate: new Date("2021", "02", "02"),
    endDate: new Date("2021", "02", "02"),
    status: "Denied",
    views: 6,
    key: "cio9293c"
  },
  f21as21a: {
    bannerPic: "",
    email: "email@email.com",
    endDate: "2018-07-22",
    eventDescription: "ASd",
    eventName: "Gulf Coast Conference",
    location: "asdas",
    name: "",
    questions: "asd",
    region: "Gulf Coast",
    regionID: "gulfcoast",
    startDate: new Date("2021", "02", "14"),
    endDate: new Date("2021", "02", "16"),
    status: "Accepted",
    views: 10,
    key: "f21as21a"
  },
  jp289as2z: {
    name: "",
    email: "email@email.com",
    id: "jp289as2z",
    eventName: "Second event",
    location: "",
    region: "Central",
    regionID: "central",
    startDate: new Date("2021", "02", "03"),
    endDate: new Date("2021", "02", "03"),
    bannerURL:
      "https://unavsa.org/wp-content/uploads/2019/12/NEWSLETTER-UNAVSA16-Conference-Reveal-1-400x284.png",
    eventDescription: "",
    questions: "",
    status: "Pending",
    views: 10,
    key: "jp289as2z"
  },
  t9ju2iuh2: {
    name: "",
    email: "email@email.com",
    id: "t9ju2iuh2",
    eventName: "Second event",
    location: "",
    region: "SouthWest",
    regionID: "southwest",
    startDate: new Date("2021", "02", "29"),
    endDate: new Date("2021", "02", "01"),
    bannerURL:
      "https://unavsa.org/wp-content/uploads/2019/12/NEWSLETTER-UNAVSA16-Conference-Reveal-1-400x284.png",
    eventDescription: "",
    questions: "",
    status: "Pending",
    views: 10,
    key: "t9ju2iuh2"
  },
  az323d12d: {
    name: "",
    email: "email@email.com",
    eventName: "Mid Alantic Conference",
    id: "az323d12d",
    location: "",
    region: "Mid-Alantic",
    regionID: "midatlantic",
    startDate: new Date("2021", "02", "23"),
    endDate: new Date("2021", "02", "26"),
    bannerURL:
      "https://unavsa.org/wp-content/uploads/2019/12/NEWSLETTER-UNAVSA16-Conference-Reveal-1-400x284.png",
    eventDescription: "",
    questions: "",
    status: "Pending",
    views: 14,
    key: "az323d12d"
  },
};

ACCESS_MAP = { ...ACCESS_MAP, ...pullMap("event") };
// merges this temporary data for everyone with the local storage data you have on your machine

// Pulls from local storage for events, then store into this variable
function storeMap(id) {
  console.log(ACCESS_MAP);
  ACCESS_MAP = { ...ACCESS_MAP, ...pullMap(id) };
}
/*
function addToMap(id) {
  // Checks if event id already exists

  ACCESS_MAP[id] = newEvent;
  storeLocally(id, ACCESS_MAP);
  console.log(ACCESS_MAP);
}
*/
/** Service methods **/

/**
Accessor method for database
**/
// Lookup a specific event: getDBData("events", "123") ; // Finds the event information
function getDBData(dbType, id) {
  if (dbType === "person") {
    return id ? DB_PERSONEL[id] : DB_PERSONEL;
  } else if (dbType === "events") {
    return id ? ACCESS_MAP[id] : ACCESS_MAP;
  }
  return null;
}

function storeLocally(id, data) {
  localStorage.setItem(id, JSON.stringify(data));
}
