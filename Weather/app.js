var button = document.querySelector('.button')

let locationName = document.querySelector(".location-time")
let currentTemp = document.querySelector(".temp");
let weatherDesc = document.querySelector(".desc");
let inputValue = document.querySelector(".input-value")

button.addEventListener('click', function() {
const proxy = `https://cors-anywhere.herokuapp.com/`;
	const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?q=`+ inputValue.value +`&units=Metric&appid=7024602db09f273225688969f7be1f84`;
	fetch (api)
	.then(data => {
		console.log(data);
		const name = data.name;
		const {temp} = data.main;
		const {description} = data['weather'][0];
		const {icon} =  data['weather'][0];
		const img = `http://openweathermap.org/img/wn/`+ icon +`@4x.png`;

		/*Display Data To DOM*/

		locationName.textContent = name;
		console.log(name);

		currentTemp.textContent = temp;
		console.log(temp);

		weatherDesc.textContent = description;
		console.log(description);

		document.getElementById("icon").src = img;
	});

})


