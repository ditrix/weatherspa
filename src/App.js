import React, {Component} from 'react';
import {connect} from 'react-redux'


import {Footer} from './component/Footer'
import {Header} from './component/Header'
import {Spinner} from './component/Spinner'
import Forecast from './component/Forecast'

// eslint-disable-next-line
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

  handleButtonDZClick(){
    this.props.getWeather('dz')
    this.props.getForecast('dz') 
  }

  handleButtonKramatorskClick(){
   this.props.getWeather('kramatorsk')
    this.props.getForecast('kramatorsk')  
  }


  handleInputCityCick(){
    this.setState({city:''})
  }
  handleInputCityChange(e){  
    this.setState({city:e.currentTarget.value})

  }

  handleKeyDown(e){
    if(e.keyCode === 13){
        e.preventDefault()
        this.handleButtonClick()
    }
  }
  render(){

    return (
      <div className="container">
        <header> 
          <Header /> 
        </header>
        <nav>
           <form className='search-form'>
            <FontAwesomeIcon icon={faSearch} onClick={this.handleButtonClick.bind(this)} />  
            <input type="text" 
              onClick={this.handleInputCityCick.bind(this)} 
              onKeyDown={this.handleKeyDown.bind(this)}
              value={this.state.city} 
              placeholder="Search city..." 
              onChange={this.handleInputCityChange.bind(this)}  />
          </form>
           <button className="button-get-weather" onClick={this.handleButtonKramatorskClick.bind(this)}>Kramatorsk</button> 
           <button className="button-get-weather" onClick={this.handleButtonDZClick.bind(this)}>DZMayskoe(48.4861103,35.628315)</button> 
        </nav> 
        <main>

           { (this.props.weather.loading)? <Spinner />:
            (this.props.weather.loaded)? 
            <div>
              {(this.props.weather.data.main)?
              <>
              <p>{this.props.weather.data.name}</p>
              <p>температура {this.props.weather.data.main.temp}</p>
              <p>ветер:  {this.props.weather.data.wind.speed} </p>
              <p>облачность:  {this.props.weather.data.weather[0].description} </p>
              </>
              :<span>no data</span>
              }
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
