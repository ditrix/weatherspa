import React, {Component} from 'react';
import {Spinner} from './Spinner'


const getDate = (date) => {	
	//const dateStr = new Date(date)	
	return date 
}

class Forecast extends Component {
	constructor(props){
		super(props)
		this.ForecastTemplate = this.ForecastTemplate.bind(this)
	}

	ForecastTemplate(data){

			return(
					<div className="forecast-row">
						<span>{getDate(data.dt)}</span>
						<span>{data.dt_txt}</span>
						<span><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={' '} /></span>
						<div><label>темп,°C:</label><span>{data.main.temp}</span></div>
						<div><label>давл, мм.рт.ст.:</label><span>{data.main.pressure}</span></div>
						<div><label>влажн:</label><span>{data.main.humidity}</span></div>
						<div><label>ветер, м/с:</label><span>{data.wind.speed}({data.wind.deg}%)</span></div>

						<div><label>облачн:</label><span>{data.weather[0].description	}</span></div>
						
				
					</div>	
			)
	}

	render(){

		const forecast = this.props.forecast
		return(
			<div>
				{ (forecast.loading)? <Spinner />:
              (forecast.loaded)? 
              <div>
              	{(forecast.data.list)? 
                <ul>
                {forecast.data.list.map((item, index) =>
                  <li key={index}>{this.ForecastTemplate(item)}</li>
                )}
                </ul>
                : <span>no data</span>
              	}

              </div>:
              (forecast.error)? <span>error</span>: null }


			</div>
			)
	}

}

export default Forecast


