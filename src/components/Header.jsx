import React from 'react'
import './Header.scss'
import TopHeader from './componentsForHeader/topHeader'
import Lines from './componentsForHeader/lines'

const Header = () => {
    return (
        <header className="header">
            <TopHeader />
            <Lines />
        </header>
    )
}

export default Header;