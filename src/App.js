/*Task 12: React 5 - Fetching Data - Compulsory Task - Weather App - App.js*/

/*The App component is the container for all other React components. By default the App component is rendered by calling ReactDOM.render() in the index.js file */

import React from "react";

/*Below I import all the Components I created in the 'Components' directory.*/

import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";

/*API KEY stored in a constant variable used to make use of the OpenWeatherMap API*/

const Api_Key = "874375554c8e39819169aca8cfc150c7";

class App extends React.Component {

//we’ll retrieve the data we want from the response object as states because it’ll keep changing with every request. 
  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //To make this api call we’ll use async/await which makes it very easy and less complicated to make api calls and return data. 
  //getWeather is a method used to make the api call
  //An event argument 'e' is passsed into the async function and then used to prevent the default browser behaviour(.i.e., Full page referesh) 
  getWeather = async (e) => {
    try {
    //The city variable will retrieve the values of the "city input field"
    const city = e.target.elements.city.value;
    //The country variable will retrieve the values of the "country input field"
    const country = e.target.elements.country.value;
    e.preventDefault(); 
    //variables paased dinto API  
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`);
    //A response variable that will take in the result of our api call and convert it to Json. 
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }
    //We’ll use the error state to pass a message to the user when the input fields are empty.
    else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }
  //We’ll use the error state to pass a message to the user when there are gramatical errors in inputs.
  catch(error){
    this.setState({
        error: "Error in input values.Please try again..."
      })}
  }

  render() {

    return (

      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles />
                </div>
                <div className="col-xs-7 form-container">
                {/*loadWeather prop is defined, set to the getweather() method, and passed to the Form component that the Form component can have access to the exposed getWeather() method in the form.js file.*/}
                <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default App;
