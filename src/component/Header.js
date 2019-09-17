import React from 'react';
import reactlogo from '../reactlogo.svg';
import reduxlogo from '../reduxlogo.svg';
export const Header = () => {
	return(
		<>
			<h1>MY SPA</h1>
      <img src={reactlogo} className="header-logo" alt="logo" />
      <img src={reduxlogo} className="header-logo" alt="logo" />
      <span><i>Weather</i></span>
		</>
	)
}