/*Task 12: React 5 - Fetching Data - Compulsory Task - Weather App - titles.js*/

/*The titles.js component contains the title and short description of the Weather App*/


import React from "react";

class Titles extends React.Component {

    render() {

        return (

            <div>

                <h1 className="title-container__title">Weather App</h1>
                <p className="title-container__subtitle"> Helps you find weather conditions in cities all over the world...  </p>
            </div>
        )
    }
}

export default Titles;