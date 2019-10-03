/*Task 12: React 5 - Fetching Data - Compulsory Task - Weather App - weather.js*/

/*The weather.js component contains the returned weather conditions based on user input supplied in the form of the Weather App*/

/*Here, we conditionally checked for the availability of the states before displaying them on screen.*/

import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location: 
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                        <span className="weather__value">  {this.props.temperature}</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key">Humidity: 
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key">Conditions:  
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
        
            </div>
        )
    }
}

export default Weather;