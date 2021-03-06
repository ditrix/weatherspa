import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class City extends Component {
 	constructor(props){
		super(props)
		this.state = {
			city: '',
		}
	}
	handleInputCityChanged(e){
		this.setState({city:e.currentTarget.value})
	}

	handleInputClicked(){
		this.setState({city:''})
	}

	render(){
		return(
			 <form className='search-form'>
			 	 <FontAwesomeIcon icon={faSearch} />	
	       <input type="text" onClick={this.handleInputClicked.bind(this)} value={this.state.city} placeholder="Search city..." onChange={this.handleInputCityChanged.bind(this)}  />
			</form>
		)
	}
}
export default City