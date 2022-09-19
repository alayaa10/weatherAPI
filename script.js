var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=bd3ba241aca40d4970e34ff6dd13e4b0')
    .then(response => response.json())
    .then(data => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather']['0']['description'];

      nameValue.innerHTML =nameValue;
      temp.innerHtml = tempValue;
      desc.innerHTML = descValue;
    })
 
 .catch(err => alert("Wrong city name!"))
})