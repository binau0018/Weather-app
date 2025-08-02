const Api = "your_api_key";

const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBar = document.querySelector("#searchBar input");
const searchBtn = document.querySelector("#searchBar button");

async function checkWeather(city) {
	const response = await fetch(apiurl + city + `&appid=${Api}`);
	var data = await response.json();

	if(response.status == 404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".hide").style.display = "none" ;
	}else{
	
	document.querySelector(".city").innerText = data.name;
	document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
	document.querySelector(".humidity").innerText= data.main.humidity + "%";
	document.querySelector(".wind").innerText = data.wind.speed + " km/h";

	if(data.weather[0].main == "Clouds"){
		document.querySelector(".icon").src = "images/clouds.png"
	}else if(data.weather[0].main == "Rain"){
		document.querySelector(".icon").src = "images/rain.png"
	}else if(data.weather[0].main == "Clear"){
		document.querySelector(".icon").src = "images/clear.png"
	}else if(data.weather[0].main == "Drizzle"){
		document.querySelector(".icon").src = "images/drizzle.png"
	}else if(data.weather[0].main == "Mist"){
		document.querySelector(".icon").src = "images/mist.png"
	}
	
	document.querySelector(".error").style.display = "none";
	document.querySelector(".hide").style.display = "block" ;
}
}

searchBtn.addEventListener("click",() =>{
	checkWeather(searchBar.value);
})


