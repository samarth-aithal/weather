import React, { Component } from 'react';
import axios from 'axios';
import './weather.css'
import Forecast from '../../components/WeatherBox/forecast';


class Weather2 extends Component {

      state = {
        cityName: null,
        temperature: null,
        hourResults:[],
        dailyResults:[],
        error: false
      };




    componentDidUpdate(){
      axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=12.9716&lon=77.5946&exclude=minutely&appid=34820572e4151c411063ae9278a8045a")
      .then(response =>{
        console.log(response.data.hourly.slice(0,4));
        this.setState({
          hourResults:response.data.hourly.slice(0,12),
          dailyResults:response.data.daily.slice(0,7)
        })
      })
      .catch(error =>{
        this.setState({error:true});
      })
    }


    render () {
          const hourReports= this.state.hourResults.map(report =>{
                return <Forecast
                    key = {report.weather.id}
                    temperature = {report.temp}
                    clouds = {report.clouds} />
              });
              const dailyReports= this.state.dailyResults.map(report =>{
                    return <Forecast
                        key = {report.weather.id}
                        temperature = {report.temp.day}
                        clouds = {report.clouds} />
                  });
        return (
            <div>
            <h1>Weather reports for next 12 hours</h1>
            <section className='Posts'>
            {hourReports}
            </section>
            <h1>Weather reports for next 1 week</h1>
            <section className='Posts'>
            {dailyReports}
            </section>
            </div>
        );
    }
}

export default Weather2;
