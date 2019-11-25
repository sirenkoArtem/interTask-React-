import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <ul className="list footer">
                <li className="footer-block">
                    <span className="limitation">18+</span>
                    <div className="copyriting">© 2019 Новини твого міста. Люди, місця, події. Новини України.
                    <br />Прогноз погоди наданий OpenWeatherMap.
                    </div>
                    <div className="socials"></div>
                </li>
                <li className="footer-block">
                    <div className="footer-cookies">блаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблабла
                        блаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблабла
                    </div>
                </li>
                <li className="footer-block footer-nav">
                    <div className="footer-item">Про сайт</div>
                    <div className="footer-item">Контакти</div>
                    <div className="footer-item">Рекламодавцям</div>
                    <div className="footer-item">Для користувачів</div>
                    <div className="footer-item">Вакансії</div>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;