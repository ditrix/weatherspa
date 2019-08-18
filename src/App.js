import React, {Component} from 'react';
import {connect} from 'react-redux'


import {Footer} from './component/Footer'
import {Header} from './component/Header'
import {Spinner} from './component/Spinner'
import Forecast from './component/Forecast'
import City from './component/City'

import {actionWeather} from './action/actionWeather'
import {actionForecast} from './action/actionForecast'


import './style.css';

class App extends Component {
  handleButtonClick(){


   
   this.props.getWeather()
   this.props.getForecast()
  }

  componentDidMount(){
        //console.log(this.props.weather)
    
  }

  render(){
    return (
      <div className="container">
        <header> 
          <Header /> 
        </header>
        <nav>
          <City />
          <button className="button-get-weather nav-button" onClick={this.handleButtonClick.bind(this)}>получить прогноз</button>
        </nav> 
        <main>

           { (this.props.weather.loading)? <Spinner />:
            (this.props.weather.loaded)? 
            <div>
              <p>{this.props.weather.data.name}</p>
              <p>температура {this.props.weather.data.main.temp}</p>
              <p>ветер:  {this.props.weather.data.wind.speed} </p>
              <p>облачность:  {this.props.weather.data.weather[0].description} </p>
            </div>:
            (this.props.weather.error)? <span>error</span>: null }
       <hr />           
  
        <Forecast forecast={this.props.forecast} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

const mapStateToProps = store => {
   return {
    weather: store.weather,
    forecast: store.forecast
   } 
}

const mapDispatchToProps = dispatch => {
  return{
    getWeather: () => dispatch(actionWeather()),
    getForecast: () => dispatch(actionForecast()),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);
