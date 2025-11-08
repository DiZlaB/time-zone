setInterval(() => {
let yourLocation=document.querySelector ("#local-time")
let localCity=yourLocation.querySelector(".city-Name")
let localDate=yourLocation.querySelector(".date")
let localTimeyZone=yourLocation.querySelector(".time")

let zone = moment.tz.guess();                      
let city = zone.split("/")[1].replace("_", " ");   
localCity.innerHTML = city;

localDate.innerHTML=moment.tz().format ("DD.MM.YYYY")
localTimeyZone.innerHTML=moment.tz().format ("H:mm")
},1000);

let worldTime=document.querySelector("#city-dropdown")
worldTime.addEventListener("change", addNewTimeZone)


function addNewTimeZone (event){
let selectedCity=document.querySelector("#world-time")

const cityTimezones = {
  "Cape Town": "Africa/Johannesburg",
  "Melbourne": "Australia/Melbourne",
  "New Delhi": "Asia/Kolkata",
  "Paris": "Europe/Paris",
  "San Diego": "America/Los_Angeles",
  "Sofia": "Europe/Sofia"
};
selectedCity.innerHTML=`
        <div class="left-column">
           <h5 class="city-Name">${event.target.value}</h5>
          <div class="date"> ${moment.tz(cityTimezones[event.target.value]).format("DD.MM.YYYY")} </div>
        </div>
      <div class="time">${moment.tz(cityTimezones[event.target.value]).format("H:mm")}</div>`
      selectedCity.style.display = "flex";
}
