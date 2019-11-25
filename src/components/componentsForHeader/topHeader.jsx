import React from 'react'
import Location from './location'
import Login from './login'

const TopHeader = () => {
    return (
        <div className="top-header">
            <Location />
            <Login />
        </div>
    )
}

export default TopHeader;