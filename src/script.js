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


