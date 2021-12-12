var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


button.addEventListener('click',function(){
    fetch('https:://api-openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=50a7aa80fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
   var nameValue = data['name'];
   var tempValue = data['main']['temp'];
   var descValue = data['weather'][0]['description'];

   name.innerHTML = nameValue;
   temp.innerHTML = tempValue;
   desc.innerHTML = desc.Value;
})



.catch(err => alert("Wrong city name!"))
})
   