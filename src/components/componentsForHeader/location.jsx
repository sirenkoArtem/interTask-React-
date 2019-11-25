import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

const Location = () => {
    return (
        <div className="location">
            <span className="location-name">київ</span>
            <span className="location-weather"><FontAwesomeIcon icon={faCloudSun} /></span>
            <span className="location-temperature">-5°C</span>
        </div>
    )
}

export default Location;