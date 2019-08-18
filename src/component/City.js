import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class City extends Component {

	render(){
		return(
		 <form className='search-form'>
			 <button className="search-button" onClick={()=>console.log('get city')} ><FontAwesomeIcon icon={faSearch} /></button>
       <input type="text" defaultValue={"Search city..."} onChange={()=> console.log('changed')}  />
		</form>
		)
	}
}
export default City