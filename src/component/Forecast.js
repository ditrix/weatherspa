import React, {Component} from 'react';
import {Spinner} from './Spinner'
import {forecastLocal} from '../devdata/forecastLocal'

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
						<div className="forecast-data"><label>обл:</label><span>{data.weather[0].description	}</span></div>
						<div className="forecast-data"><label>темп(°C):</label><span>{data.main.temp}</span></div>
						<div className="forecast-data">
							<label>давл(мм.рт.ст):</label>
								<span>{parseFloat((+data.main.pressure/133.322).toFixed(2))}</span>
							</div>
						<div className="forecast-data"><label>влажн(%):</label><span>{data.main.humidity}</span></div>
						<div className="forecast-data"><label>ветер(м/с):</label><span>{data.wind.speed}({data.wind.deg}%)</span></div>

						
						
				
					</div>	
			)
	}

	render(){

		const dt_str = '2019-09-16 18:00:00';
		const dt_arr = dt_str.split(' ')[1]
				

		const forecast = this.props.forecast
		const develop = forecastLocal;
		return(
			<div>

				<div>{dt_arr}</div>

				{(develop)?	<ul>
        	{develop.list.map((item, index) =>
						<li key={index}>{this.ForecastTemplate(item)}</li>
             )}
        </ul>
      	:<span></span>}


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


