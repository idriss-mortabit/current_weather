import React, { Component } from 'react';
import axios from 'axios';
class Body extends Component{
	constructor(props) {
		super(props);
		this.state = {
			cityWeather: [],
			city: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.weatherApi = this.weatherApi.bind(this);
	}
	handleChange(event) {
		this.setState({city: event.target.value});
	  }
	weatherApi(event){
		const url ='/api/postweather?city='+this.state.city
		//console.log(body)
		axios
		.get(url)
		.then(response => {
		  this.setState({cityWeather: response});
		})
		.catch(error => {
		  console.log("city Error: ", error);
		  alert("city Error");
		});
		event.preventDefault();
	}
   render(){
	   if(this.state.cityWeather.length===0){
		return (
		<div>
			<div className="hero" style={{backgroundImage: require("./images/banner.png")}}>
				<div className="container">
					<form onSubmit={this.weatherApi} className="find-location">
						<input type="text"  value={this.state.city} onChange={this.handleChange} placeholder="Find your location..."/>
						<input  type="submit" value="Find"/>
					</form>
				</div>
			</div>
			<div className="forecast-table">
				<div className="container">
					<div className="forecast-container">
						<div className="today forecast">
							<div className="forecast-header">
								<div className="day">{new Date().toLocaleString("default", { weekday: "long" })}</div>
								<div className="date">{new Date().getDate()} {new Date().toLocaleString('default', { month: 'short' })}</div>
							</div> 
						</div>
					</div>
				</div>
			</div>
		  </div>
		);
	   }else{
      return(
          <div>
            <div className="hero" style={{backgroundImage: require("./images/banner.png")}}>
				<div className="container">
					<form onSubmit={this.weatherApi} className="find-location">
						<input type="text"  value={this.state.city} onChange={this.handleChange} placeholder="Find your location..."/>
						<input  type="submit" value="Find"/>
					</form>
				</div>
			</div>
			<div className="forecast-table">
				<div className="container">
					<div className="forecast-container">
						<div className="today forecast">
							<div className="forecast-header">
								<div className="day">{new Date().toLocaleString("default", { weekday: "long" })}</div>
								<div className="date">{new Date().getDate()} {new Date().toLocaleString('default', { month: 'short' })}</div>
							</div> 
							<div className="forecast-content">
								<div className="location">{this.state.cityWeather["data"]["name"]}</div>
								<div className="degree">
									<div className="num">{Math.floor(this.state.cityWeather["data"]["main"]["temp"]-273,15)}<sup>o</sup>C</div>
									<div className="forecast-icon">
										<h4>{this.state.cityWeather["data"]["weather"][0]["description"]}</h4>
										<img src={"".concat("http://openweathermap.org/img/w/",this.state.cityWeather["data"]["weather"][0]["icon"],".png")} alt="" style={{width: 90}} />
									</div>	
								</div>
								<span><img src={require("./images/icon-umberella.png")} alt=""/>{this.state.cityWeather["data"]["main"]["humidity"]}%</span>
								<span><img src={require("./images/icon-wind.png")} alt=""/>{Math.floor(this.state.cityWeather["data"]["wind"]["speed"]*4)} km/h</span>
	 							<span><img src={require("./images/icon-pressure.png")} alt=""/>{this.state.cityWeather["data"]["main"]["pressure"]} hPa</span>
							</div>
						</div>
						</div>
					</div>
				</div>
		  </div>
			);
	  }
}
}
export default Body;