import React, { Component } from 'react';
import axios from 'axios';
import WeatherBox from '../../components/WeatherBox/WeatherBox';


class Weather1 extends Component {

      state = {
        cityName: null,
        temperature: null,
        humidity: null,
        visibility : null,
        windSpeed: null
      };




    componentDidUpdate(){
      axios.get("https://api.openweathermap.org/data/2.5/weather?q="+this.state.cityName+"&appid=34820572e4151c411063ae9278a8045a")
      .then(response =>{
        console.log(response);
        this.setState({
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          visibility: response.data.visibility,
          windSpeed:response.data.wind.speed
        })
      })
    }


      handleChange = (event)=>{
        this.setState({
          cityName: event.target.value
        })
      }


      handleSubmit=()=>{

      }



    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Please select the city
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mangaluru">Mangaluru</option>
                  <option value="Udupi">Udupi</option>
                  <option value="Mysore">Mysore</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
            <WeatherBox
            cityName={this.state.cityName}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            visibility={this.state.visibility}
            windSpeed={this.state.windSpeed} />

            </div>
        );
    }
}

export default Weather1;
