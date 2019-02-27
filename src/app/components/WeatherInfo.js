import React from 'react';

const WeatherInfo = props => {
    console.log(props);
    return (

        <div>

            {
                props.error &&
                <div className="alert alert-danger my-5">
                    <p>
                        {
                            props.error
                        }
                    </p>
                </div>
            }
            {
                props.temperature ?
                    <div className="card card-body my-5">
                        <p>
                            Location: {props.city}, {props.country}
                        </p>
                        <p>
                            Temperature: {props.temperature} °C, {props.description}
                        </p>
                        <p>
                            Humidity: {props.humidity} g/kg
                        </p>
                        <p>
                            Wind Speed: {props.wind_speed} km/h
                        </p>
                    </div>
                :
                <div className="card card-body"></div>
            }
        </div>


    )

};

export default WeatherInfo;