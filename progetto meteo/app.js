document.querySelector('button').addEventListener('click', getWeatherData);


function getWeatherData(e){
    const inputValue = document.querySelector('input').value; 
    const weather = new Weather(inputValue);
    const ui = new UI();
    if(inputValue.trim() !== ""){
    weather.getWeather()
        .then(data => {
            ui.insertData(data)
            
        }) 
        .catch(error => console.log(error));
    }else {
        alert('scrivi qualcosa')       
    }
       
    e.preventDefault();
}
