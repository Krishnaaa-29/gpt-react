import React from 'react'
import './article.css';

const Article = ( {key, img, date, heading, read} ) => {
  return (
    <div className='gpt3__blog-article_container'>
      <div className='gpt3__blog-article_container-image'>
        <img src={img} alt={`blog ${key}`} />
      </div>
      <div className='gpt3__blog-article_container-content'>
        <p> {date} </p>
        <h3> {heading} </h3>
        <p> {read} </p>
      </div>
    </div>
  )
}

export default Article