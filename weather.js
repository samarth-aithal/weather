import React, { Component } from 'react';
import axios from 'axios';
import WeatherBox from '../../components/WeatherBox/WeatherBox';


class Weather extends Component {

      state = {
        cityName: null,
        lon: null,
        lat: null,
        temperature: null,
        humidity: null,
        visibility : null,
        windSpeed: null
      };




    componentDidUpdate(){
      axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.state.lat+"&lon="+this.state.lon+"&exclude=hourly,daily,minutely&appid=34820572e4151c411063ae9278a8045a")
      .then(response =>{
        console.log(response);
        this.setState({
          temperature: response.data.current.temp,
          humidity: response.data.current.humidity,
          visibility: response.data.current.visibility,
          windSpeed:response.data.current.wind_speed
        })
      })
    }


      handleChange = (event)=>{
        this.setState({
          cityName: event.target.value
        })
        switch(this.state.cityName){
          case 'Bengaluru':
            this.setState({
                lon: 77.59369,
                lat: 12.97194
              });
          break;
          case 'Mangaluru':
              this.setState({
                  lon: 74.8560,
                  lat: 12.9141
                });
                break;
          case 'Udupi':
              this.setState({
                lon:74.7421,
                lat: 13.3409
                });
              break;
          case 'Mysore':
              this.setState({
                    lon: 76.6394,
                    lat: 12.2958
                    });
                  break;
      console.log(this.state.lon);
      console.log(this.state.lat);
          }
            // default:
            //  this.setState({
            //   lon: null,
            //   lat: null
            //     });



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

export default Weather;
