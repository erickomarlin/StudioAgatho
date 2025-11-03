import { useState } from "react";
import "./App.css";
import accent1 from "./assets/1.png";
import accent2 from "./assets/2.png";
import accent3 from "./assets/3.png";
import card1 from "./assets/showcase1.png";
import card2 from "./assets/showcase2.png";
import card3 from "./assets/showcase3.png";
import card4 from "./assets/showcase4.png";
import card5 from "./assets/showcase5.png";
import videoFile from "./assets/teamwork.mp4.mp4";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div id="container">
      <img id="accent1" src={accent1} alt="accent1"></img>
      <img id="accent2" src={accent2} alt="accent2"></img>
      <img id="accent3" src={accent3} alt="accent3"></img>
      <div id="page1">
        <a href="#page7a" className="brand-name">
          Studio Agatho
        </a>
        <h1 className="description">We enable brands to make their mark in history</h1>
        <a href="#page2" className="explore">
          Explore More
        </a>
      </div>

      <div id="page2">
        <h2 className="showcase">
          <i>Creative Showcase</i>
        </h2>
        <div className="cards">
          <div className="card-left">
            <img className="img-card-left" src={card1} />
            <p className="img-name">
              <strong>Serrineton Bank</strong>
            </p>
            <p className="img-sector">Brand Strategy</p>
          </div>
          <div className="card-right">
            <img className="img-card-right" src={card2} />
            <p className="img-name">
              <strong>Power Through Connections</strong>
            </p>
            <p className="img-sector">Digital Marketing</p>
          </div>
        </div>
      </div>

      <div id="page3">
        <div className="card-left">
          <img className="img-card-left" src={card3} />
          <p className="img-name">
            <strong>The Spoon & Cup</strong>
          </p>
          <p className="img-sector">Content Development</p>
        </div>
        <div className="card-middle">
          <img className="img-card-middle" src={card4} />
          <p className="img-name">
            <strong>Warrenshire Inc.</strong>
          </p>
          <p className="img-sector">Graphic Design</p>
        </div>
        <div className="card-right">
          <img className="img-card-right" src={card5} />
          <p className="img-name">
            <strong>Diamanda Furniture</strong>
          </p>
          <p className="img-sector">Web Design</p>
        </div>
      </div>

      <div id="page4">
        <video autoPlay muted loop id="myVideo" src={videoFile} />
        <div className="content">
          <h1 id="core">
            <i>Core</i>
          </h1>
          <p className="teamwork">Team Work Inevitable</p>
        </div>
      </div>

      <div id="page5">
        <div className="established">
          <h3 className="est">Est. 1981</h3>
          <p className="est-content">Since its founding, Studio Agatho has begun the go-to company for various design needs. Its offerings range from graphic design dan branding strateg to website development and video production.</p>
        </div>
        <div className="accents">
          <img className="img1" src={logo1}></img>
          <img className="img2" src={logo2}></img>
          <img className="img3" src={logo3}></img>
          <img className="img4" src={logo4}></img>
        </div>
      </div>

      <div id="page6">
        <div className="clients">
          <i>Clients</i>
        </div>
        <div className="clients-name">
          <p className="serrineton">
            <strong>Serrineton Bank</strong>
          </p>
          <p className="crowd">Crowd zero</p>
          <p className="diamanda">Diamanda Furniture</p>
          <p className="oddnest">OddNest</p>
          <p className="spoon-cup">THE SPOON & CUP</p>
          <p className="warrenshire">
            <strong>WARRENSHIRE INC.</strong>
          </p>
        </div>
      </div>

      <div id="page7a">
        <a href="#" className="brand-name">
          Studio Agatho
        </a>
        <h1 className="description">Begin Your Story Here</h1>
        <a href="#" className="email">
          hello@reallygreatsite.com
        </a>
      </div>

      <div id="page7b">
        <div className="social-media">Social Media</div>
        <div className="social-media-icons">
          <a className="twitter" href="www.twitter.com" target="_blank">
            <FaTwitter></FaTwitter>
          </a>
          <a className="facebook" href="www.facebook.com" target="_blank">
            <FaFacebook></FaFacebook>
          </a>
          <a className="instagram" href="www.instagram.com" target="_blank">
            <FaInstagram></FaInstagram>
          </a>
        </div>
      </div>

      <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
