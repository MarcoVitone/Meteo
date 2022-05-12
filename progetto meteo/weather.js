class Weather {
    constructor(city){
        this.apiKey = "fa72e141725101e51e470b0fa597fdaa";
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);
        const data = await response.json();
        return data;
    }

    changeCity(city) {
        this.city = city;
    }
    
}

