const searchBtn = document.querySelector("#search");
const searchInput=document.querySelector("#input-container");
    
searchBtn.addEventListener("click", async function () {
    const location = searchInput.value;
    // console.log(location);
   if (location != "") {
    const data = await fetchWeather(location);
    if (data != "") {
        updateDOM(data);
    }
    searchInput.value = "";
   }
    
})

const tempratureElem = document.querySelector(".temprature");
const locationElem = document.querySelector(".location");
const dayElem= document.querySelector(".Day")
const timeElem = document.querySelector(".time");
const dateElem= document.querySelector(".date");
const conditionElem = document.querySelector(".condition");
const emojiImg = document.querySelector(".emoji");

function updateDOM(data) {
    console.log("i will get the data",data);
    const temp = data.current.temp_c;
    const location = data.location.name;
    const timeData =data.location.localtime;
    const[date , time]= timeData.split(" ");
    const iconLink =data.current.condition.icon;
    const conditionType =data.current.condition.text;

    // console.log("temp",temp,"locstion",location, "date",date ,"time",time,"icon",iconLink, "condition",conditionType);
    tempratureElem.textContent = temp + "°C";
    locationElem.textContent = location;
    timeElem.textContent = time;
    dateElem.textContent=date;
    emojiImg.src=iconLink;
    conditionElem.innerText = conditionType;
    

}



 async function fetchWeather(location) {
    const url = `http://api.weatherapi.com/v1/current.json?key=43620aab5956456fb8560003240912&q=${location}&aqi=no`
    const response = await fetch(url);
   
    if (response.status == 400) {
        alert("location is invalid");
    }else if (response.status == 200) {
        const json =  await response.json();
      return json;

    }
}

   
    




