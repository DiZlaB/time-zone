let city=document.querySelector("#city-dropdown")
city.addEventListener ("change", selectCity)

function selectCity(event) {
  if (event.target.value !== "") {
    if (event.target.value === "Melbourne") {
      let pickedCity = moment.tz("Australia/Melbourne").format("dddd, MMMM Do YYYY H:mm A ")
let result = document.querySelector("#local-time");
result.innerHTML = `It is ${pickedCity} in Melbourne, Australia`;
    }
    else if(event.target.value === "New Delhi") {
      let pickedCity = moment.tz("Asia/Kolkata").format("dddd, MMMM Do YYYY H:mm A")
let result = document.querySelector("#local-time");
result.innerHTML = `It is ${pickedCity} in New Delhi, India`;
    }
    else if (event.target.value === "Cape Town") 
     {
      let pickedCity = moment.tz("Africa/Johannesburg").format("dddd, MMMM Do YYYY H:mm A")
let result= document.querySelector("#local-time");
result.innerHTML = `It is ${pickedCity} in Cape Town, Africa`;
    }
  }}



