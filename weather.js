//Modified from Activity 5:AJAX interactions
//if DOM content has loaded, call getWeather function
document.addEventListener('DOMContentLoaded', getWeather);

//Source: modified from the lesson on forms with Ajax and JS
function getWeather() {
   document.getElementById('submit_data').addEventListener('click', function(event) {
   // put form data together with URL to make full URL
   var request = new XMLHttpRequest();
   var result;
   var startURL = "http://api.openweathermap.org/data/2.5/weather?";
   var zip = "zip=" + document.getElementById("zip").value;
   var cCode = ",us";
   var apiKey = "&appid=e77163a9865fbb5d19ded6870135b0ac";
   //add this to get imperial units
   var units = "&units=imperial";
   var fullAddress = startURL + zip + cCode + apiKey + units;
   
   // send asychronous request with full address
   request.open('GET', fullAddress, true);
  
   //add event listener to pass results to display function if they load correctly
   request.addEventListener('load', showWeather);
   request.send(null);
   event.preventDefault();
   })
   }
  


// Display results in HTML
 function showWeather(response) {
//access responseText by target to access different objects within response object
//source: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
   var weatherText = JSON.parse(response.target.responseText);
  
//Access elements of data object and display in HTML table
   document.getElementById("result_weather").textContent = "Weather: " + weatherText.weather[0].description;
    document.getElementById("result_temp").textContent = "Temperature: " + weatherText.main.temp + " F";

   }
  
  
  
   