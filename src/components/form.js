/*Task 12: React 5 - Fetching Data - Compulsory Task - Weather App - form.js*/

/*The form.js component contains the form of the Weather App used for user input of cities and their respective countries*/

/*Here we have two input fields to receive the city and country inputs, then a button to submit the form.*/

import React from "react";

class Form extends React.Component{

    render(){

        return(
        	// onSubmit is set to the loadWeather prop such that the getWeather() will get called whenever we submit the form.
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="country" placeholder="Country..."/>
                {/*we can make the api call by clicking the 'Get Weather button'.*/}
                    <button>Get Weather</button>
                </form>
           
        )
    }
}

export default Form;