let search = document.getElementById("search");
let firstDay = document.getElementById("firstDay");
let secondDay = document.getElementById("secondDay");
let ThirdDay = document.getElementById("thirdDay");

GetWeatherData('cairo');

search.addEventListener('keyup',function(){
    GetWeatherData(search.value)
})


async function GetWeatherData(city) {
    
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2eef6c216f404dc2a4c164019241412&q=${city}&days=3`)
    var data = await response.json();

  display(data);
}

function display(data) {
    // Helper function to get the day name from a date string
    function getDayName(dateString) {
        const date = new Date(dateString);
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[date.getDay()];
    }


    firstDay.innerHTML=`
                                    <div class="card-header part-gray d-flex justify-content-between align-items-center">
                                <p class="mb-0"> ${getDayName(data.forecast.forecastday[0].date)}</p>
                                <p class="mb-0">${data.forecast.forecastday[0].date}</p>
                            </div>
                            <div class="card-body body-part-gray">
                                <div class="location text-center">
                                    <p class="fw-bold fs-4 mb-2">${data.location.name}</p>
                                </div>
                                <div class="d-flex flex-column justify-content-center align-items-center mb-3">
                                    <h1 class="display-1 mb-0">${data.forecast.forecastday[0].day.maxtemp_c}C</h1>
                                    <img src="${data.forecast.forecastday[0].day.condition.icon}" alt="Weather Icon" class="ms-3">
                                </div>
                                <div class="text-center mb-3">
                                    <span class="text-info fw-bold">${data.forecast.forecastday[0].day.condition.text}</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center text-center">
                                    <div>
                                        <img src="images/icon-umberella@2x.png" alt="Humidity" width="20">
                                        <p class="mb-0">${data.forecast.forecastday[0].hour[0].cloud}%</p>
                                    </div>
                                    <div>
                                        <img src="images/icon-wind@2x.png" alt="Wind" width="20">
                                        <p class="mb-0">${data.forecast.forecastday[0].hour[0].wind_kph}km/h</p>
                                    </div>
                                    <div>
                                        <img src="images/icon-compass@2x.png" alt="Direction" width="20">
                                        <p class="mb-0">${data.forecast.forecastday[0].hour[0].wind_dir}</p>
                                    </div>
                                </div>
                        </div>
    `


    secondDay.innerHTML = `
    <div class="card-header full-gray">
                                <div class="text-center">
                                    <p class="mb-0">${getDayName(data.forecast.forecastday[1].date)}</p>
                                </div>     
                        </div>

                        <div class="card-body body-full-gray">
                            <div class="d-flex flex-column justify-content-center align-items-center py-4">
                                <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="Weather Icon" class="ms-3 pb-3">
                                <h3>${data.forecast.forecastday[1].day.maxtemp_c}C</h3>
                                <span class="py-2">${data.forecast.forecastday[1].day.maxtemp_f}F</span>
                                <p class="text-info pt-2">${data.forecast.forecastday[1].day.condition.text}</p>
                            </div>
                        </div>
    `


    ThirdDay.innerHTML = `
    <div class="card-header part-gray">
                                <div class="text-center">
                                    <p class="mb-0">${getDayName(data.forecast.forecastday[2].date)}</p>
                                </div>     
                        </div>

                        <div class="card-body body-part-gray">
                            <div class="d-flex flex-column justify-content-center align-items-center py-4">
                                <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="Weather Icon" class="ms-3 pb-3">
                                <h3>${data.forecast.forecastday[2].day.maxtemp_c}C</h3>
                                <span class="py-2">${data.forecast.forecastday[2].day.maxtemp_f}F</span>
                                <p class="text-info pt-2">${data.forecast.forecastday[2].day.condition.text}</p>
                            </div>
                        </div>
    `
}