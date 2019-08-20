import React, {Component} from 'react';
import {connect} from 'react-redux'


import {Footer} from './component/Footer'
import {Header} from './component/Header'
import {Spinner} from './component/Spinner'
import Forecast from './component/Forecast'
import City from './component/City'

import {actionWeather} from './action/actionWeather'
import {actionForecast} from './action/actionForecast'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import './style.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      city:''
    }
  }

  handleButtonClick(){


    this.props.getWeather(this.state.city)

    this.props.getForecast(this.state.city)
  }

  handleInputCityCick(){
    console.log(this.state.city)
    this.setState({city:''})
  }
  handleInputCityChange(e){  
    this.setState({city:e.currentTarget.value})
  }

  render(){
    return (
      <div className="container">
        <header> 
          <Header /> 
        </header>
        <nav>
          {/*<City city={''} />*/}
          

          
          <form className='search-form'>
            <FontAwesomeIcon icon={faSearch} onClick={this.handleButtonClick.bind(this)} />  
            <input type="text" 
              onClick={this.handleInputCityCick.bind(this)} 
              value={this.state.city} 
              placeholder="Search city..." 
              onChange={this.handleInputCityChange.bind(this)}  />
          </form>
          


     {/*     <div>
            <input  type="text" placeholder="city..." 
              value={this.state.city}
              onClick={this.handleInputCityCick.bind(this)}
              onChange={this.handleInputCityChange.bind(this)}
            />
          <button className="button-get-weather nav-button" onClick={this.handleButtonClick.bind(this)}>GET FORECAST</button>
          </div>*/}
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
    forecast: store.forecast,
    city: store.city,
   } 
}

const mapDispatchToProps = dispatch => {
  
  return{
    getWeather: (city) => dispatch(actionWeather(city)),
    getForecast: (city) => dispatch(actionForecast(city)),
    getCity: () => dispatch({type:'GET_CITY'})
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);
