import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const NavNews = () => {
    return (
        <div className="nav-news">
            <FontAwesomeIcon icon={faBookmark} className="bookmark" />
            <span>новини</span>
            <ul className="list news-sidebar">
                <li className="news-item">
                    <span className="news-timing">11:29<span className="news-naming">відео:</span></span>
                    <span className="news-info">блаблаблаблаблаблаблаблабла</span>
                </li>
                <li className="news-item">
                    <span className="news-timing">11:29<span className="news-naming">відео:</span></span>
                    <span className="news-info">блаблаблаблаблаблаблаблабла</span>
                </li>
                <li className="news-item">
                    <span className="news-timing">11:29<span className="news-naming">відео:</span></span>
                    <span className="news-info">блаблаблаблаблаблаблаблабла</span>
                </li>
                <li className="news-item">
                    <span className="news-timing">11:29<span className="news-naming">відео:</span></span>
                    <span className="news-info">блаблаблаблаблаблаблаблабла</span>
                </li>
                <li className="news-item">
                    <span className="news-timing">11:29<span className="news-naming">відео:</span></span>
                    <span className="news-info">блаблаблаблаблаблаблаблабла</span>
                </li>
                <li className="news-item">
                    <span className="news-timing">11:29<span className="news-naming">відео:</span></span>
                    <span className="news-info">блаблаблаблаблаблаблаблабла</span>
                </li>
                <li className="news-item">
                    <span className="news-timing">11:29<span className="news-naming">відео:</span></span>
                    <span className="news-info">блаблаблаблаблаблаблаблабла</span>
                </li>
                <li className="news-item">
                    <span className="news-timing">11:29<span className="news-naming">відео:</span></span>
                    <span className="news-info">блаблаблаблаблаблаблаблабла</span>
                </li>
            </ul>
        </div>
    )
}

export default NavNews;