class UI {
    constructor() {
        this.degree = document.getElementById('degree');
        this.city = document.getElementById('city');
        this.humidity = document.getElementById('humidity');
        this.description = document.getElementById('description');
        this.sunrise = document.getElementById('sunrise');
        this.sunset = document.getElementById('sunset');
    }
    insertData(data) {
        this.degree.textContent = `${Math.round(data.main.temp - 273.15)}°`;
        this.humidity.textContent = `Umidità: ${data.main.humidity}%`;
        this.city.textContent = `${data.name}`;
        this.description.textContent = `Descrizione: ${data.weather[0].description}`;
        this.sunrise.textContent = `Alba: ${new Date(data.sys.sunrise * 1000).getHours()}:${new Date(data.sys.sunrise * 1000).getMinutes()}`;
        this.sunset.textContent = `Tramonto: ${new Date(data.sys.sunset * 1000).getHours()}:${new Date(data.sys.sunset * 1000).getMinutes()}`;
    }
    
}
