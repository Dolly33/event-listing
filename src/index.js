/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/

import React from "react";
import { render } from "react-dom";
import "./index.css";

let imgList = [
  {
    img: "/images/1.png",
    date: "Mon 14th Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/2.jpg",
    date: "Tues 15th Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/3.jpg",
    date: "Wed 16th Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/4.jpg",
    date: "Thurs 17th Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/5.png",
    date: "Fri 18th Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/6.jpg",
    date: "Sat 19th Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/7.jpg",
    date: "Mon 21st Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/8.jpg",
    date: "Tue 22nd Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/9.jpg",
    date: "Wed 23rd Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/10.jpg",
    date: "Thur 24th Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/11.jpg",
    date: "Fri 25th Sept,2020",
    title: "The Event is titled...",
  },
  {
    img: "/images/12.jpg",
    date: "Sat 26th Sept,2020",
    title: "The Event is titled...",
  },
];

const Image = ({ img, date, title }) => {
  return (
    <div id="graphics">
      <figure>
        <img src={img} alt="The Pulpit Rock" width="304" height="228" />
        <figcaption>{date}</figcaption>
        {title}
      </figure>
    </div>
  );
};

const Gallery = ({ images }) => {
  return (
    <div>
      {images.map((image, i) => (
        <Image key={i} img={image.img} date={image.date} title={image.title} />
      ))}
    </div>
  );
};

render(<Gallery images={imgList} />, document.getElementById("root"));
