import React, {Component} from 'react';
import {connect} from 'react-redux'


import {Footer} from './component/Footer'
import {Header} from './component/Header'
import {Spinner} from './component/Spinner'

import {actionWeather} from './action/actionWeather'


import './style.css';

class App extends Component {
  handleButtonClick(){


   
   this.props.getWeather()
  }

  componentDidMount(){
        console.log(this.props.weather)
    
  }

  render(){
    return (
      <div className="container">
        <header> 
          <Header /> 
        </header>
        <nav>
            <div>
              <span>City:&nbsp;</span>
              <input type="text" defaultValue={"Краматорск"} onChange={()=> console.log('changed')} />
              <button onClick={()=>console.log('get city')}>find</button>
            </div>

        </nav> 
        <main>
           <button onClick={this.handleButtonClick.bind(this)}>get weather</button>
          { (this.props.weather.loading)? <Spinner />:
            (this.props.weather.loaded)? 
            <div>
              <p>{this.props.weather.data.name}</p>
              <p>температура {this.props.weather.data.main.temp}</p>
              <p>ветер:  {this.props.weather.data.wind.speed} </p>
              <p>облачность:  {this.props.weather.data.weather[0].description} </p>
            </div>:
            (this.props.weather.error)? <span>error</span>: null }
                  

     
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
    weather: store.weather
   } 
}

const mapDispatchToProps = dispatch => {
  return{
    getWeather: () => dispatch(actionWeather()),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);
