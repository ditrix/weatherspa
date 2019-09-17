import React, {Component} from 'react';
import {Spinner} from './Spinner'
//import {forecastLocal} from '../devdata/forecastLocal'

const getDate = (datestr) => {	
	const datearr = datestr.split('-')
	const res = datearr[2]+'.'+datearr[1]+'.'+datearr[0]
	return res
}

class Forecast extends Component {
	constructor(props){
		super(props)
		this.ForecastTemplate = this.ForecastTemplate.bind(this)
	}

  ForecastRow(time,data){
  	return(
					<div className="forecast-row">
						<span>{time}</span>
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

	ForecastTemplate(index,data){
			const dateFull = data.dt_txt.split(' ');
			const time = dateFull[1]
			const date = dateFull[0]
	
			if(time === '00:00:00' || index === 0){
			return(
				<>
				<div className="forecast-row forecast-title">
					 <h4>{getDate(date)}</h4>
				</div>
				{this.ForecastRow(time,data)}
				</>
			)}
			return(					
				this.ForecastRow(time,data)
			)
	}

	render(){

		const forecast = this.props.forecast
		//const develop = forecastLocal;
		return(
			<div>

		{/*		{(develop)?	<ul>
        	{develop.list.map((item, index) =>
						<li key={index}>{this.ForecastTemplate(index,item)}</li>
             )}
        </ul>
      	:<span></span>}
*/}

				{ (forecast.loading)? <Spinner />:
              (forecast.loaded)? 
              <div>
              	{(forecast.data.list)? 
                <ul>
                {forecast.data.list.map((item, index) =>
                  <li key={index}>{this.ForecastTemplate(index,item)}</li>
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


