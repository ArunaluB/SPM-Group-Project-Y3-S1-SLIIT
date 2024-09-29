import { Link } from "react-router-dom";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import MainLogo from "../../assets/orbital.png";
import MainL from "../../assets/bot.png"
import logo from '../../assets/logo.png'
import humen1 from '../../assets/human1.jpeg'
import humen2 from '../../assets/human2.jpeg'

const Home = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src={MainLogo} alt="" className="orbital" />
      <div className="left">
        <h1>Pro Menter</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
          dolorem doloribus, architecto dolor.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src={MainL} alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ?  humen1 
                  : typingStatus === "human2"
                  ? humen2
                  : MainL
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src={logo} alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
