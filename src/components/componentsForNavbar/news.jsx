import React from 'react'
import './news.scss'
import Content from './componentsForNews/content'
import NavNews from './componentsForNews/NavNews'

const News = () => {
    return (
        <div className="news">
            <NavNews />
            <Content />
        </div>
    )
}

export default News;