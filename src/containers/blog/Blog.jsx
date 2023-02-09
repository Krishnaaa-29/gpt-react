import React from 'react'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './import.js';
import {Article} from '../../components'


const Images = [
  {
    id: 1,
    img: blog01,
    date: "Sep 21, 2021",
    heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    read: "Read full Article",
  },

  {
    id: 2,
    img: blog02,
    date: "Sep 28, 2021",
    heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    read: "Read full Article",
  },

  {
    id: 3,
    img: blog03,
    date: "Oct 03, 2021",
    heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    read: "Read full Article",
  },

  {
    id: 4,
    img: blog04,
    date: "Oct 10, 2021",
    heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    read: "Read full Article",
  },

  {
    id: 5,
    img: blog05,
    date: "Oct 17, 2021",
    heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    read: "Read full Article",
  }
];

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-header'>
        <h1 className='gradient__text'>A lot is happening, 
          <br/> We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        {Images.map((item) => (
          <Article key={item.id} img={item.img}  date={item.date} heading={item.heading} read={item.read} />
        ))}
      </div>
    </div>
  )
}

export default Blog