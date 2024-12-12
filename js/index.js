@import url('https://fonts.googleapis.com/css?family=Lobster');
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  background: #E5E5E5;
  background-image: url("bg.jpg");
}

#card-front {
  color: #FFDFDF;
  z-index: 10;
}

#card, #card-front, #card-inside {
  height: 580px;
}

.wrap {
  padding: 1.5em 2.5em;
  height: 100%;
}

#card-front, #card-inside {
  width: 50%;
  -webkit-box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.5);
          box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
}

#card-inside .wrap {
  background: #FFEFEF;
  -webkit-box-shadow: inset 2px 0 1px rgba(0, 0, 0, 0.05);
          box-shadow: inset 2px 0 1px rgba(0, 0, 0, 0.05);
}

#card {
  width: 960px;
  margin: auto;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-perspective: 5000px;
          perspective: 5000px;
  -webkit-transform: translateX(-25%);
          transform: translateX(-25%);
  -webkit-transition: -webkit-transform 1s ease-in-out;
  transition: -webkit-transform 1s ease-in-out;
  transition: transform 1s ease-in-out;
  transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

#card h1 {
  text-align: center;
  font-family: 'Lobster', cursive;
  font-style: italic;
  font-size: 70px;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.15), 1px 1px 0 #ffc8c8, 2px 2px 0 #ff9696, 3px 3px 0 #ff7d7d;
  color: #FFF;
}

#card-inside {
  font-size: 1.3em;
  line-height: 1.4;
font-family: 'Lobster';
  color: #331717;
  font-style: italic;
}

p {
  margin-top: 1em;
}

p:first-child {
  margin-top: 0;
}

p.signed {
  margin-top: 1em;
  text-align: center;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  font-size: 0.75em;
}

#card-front {
  background-color: #ee9ca7;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#FF5555), to(#FF7777));
  background-image: linear-gradient(top, #FF5555 0%, #FF7777 100%);
  -webkit-transform-origin: left;
          transform-origin: left;
  -webkit-transition: -webkit-transform 1s linear;
  transition: -webkit-transform 1s linear;
  transition: transform 1s linear;
  transition: transform 1s linear, -webkit-transform 1s linear;
  position: relative;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-perspective: 5000px;
          perspective: 5000px;
}

#card-front:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  background-color: #444;
  -webkit-transform: translateZ(-1px);
          transform: translateZ(-1px);
}

#card-front .wrap {
  -webkit-transition: background 1s linear;
  transition: background 1s linear;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

#card-front button {
  position: absolute;
  bottom: 1em;
  right: -12px;
  background: #F44;
  color: #FFF;
  font-family: 'Lobster', cursive;
  font-style: italic;
  font-weight: bold;
  font-size: 1.5em;
  padding: .5em;
  border: none;
  cursor: pointer;
  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.4);
          box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.4);
}

#card-front button:hover,
#card-front button:focus {
  background: #F22;
}

#close {
  display: none;
}

#card.open-fully {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}

#card.open-fully #close,
#card-open-half #close {
  display: inline;
}

#card.open-fully #open {
  display: none;
}

#card.open-half #card-front,
#card.close-half #card-front {
  -webkit-transform: rotateY(-90deg);
          transform: rotateY(-90deg);
}

#card.open-half .shadow {
  background-color: rgba(0, 0, 0, 0.5);
}

#card.open-fully #card-front,
#card.close-half #card-front {
  background: #FFEFEF;
}

#card.open-fully #card-front {
  -webkit-transform: rotateY(-180deg);
          transform: rotateY(-180deg);
}

#card.open-fully .shadow {
  background-color: rgba(0, 0, 0, 0);
}

footer {
  max-width: 500px;
  margin: 40px auto;
font-family: 'Lobster', cursive;
  font-size: 14px;
  line-height: 1.6;
  color: #888;
  text-align: center;
}

.cake_and_velas {
  position: absolute;
  bottom: 25%;
  left: 0;
  right: 0;
  overflow: hidden;
}

#cake {
  display: block;
  position: relative;
  margin: -10em auto 0 auto;
}

.velas {
  background: #ffffff;
  border-radius: 10px;
  position: absolute;
  top: 228px;
  left: 50%;
  margin-left: -2.4px;
  margin-top: -8.33333333px;
  width: 5px;
  height: 35px;
  -webkit-transform: translateY(-300px);
          transform: translateY(-300px);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-animation: in 500ms 5s ease-out forwards;
          animation: in 500ms 5s ease-out forwards;
}

.velas:after,
.velas:before {
  background: rgba(255, 0, 0, 0.4);
  content: "";
  position: absolute;
  width: 100%;
  height: 2.22222222px;
}

.velas:after {
  top: 25%;
  left: 0;
}

.velas:before {
  top: 45%;
  left: 0;
}

/* ============================================== Fire
*/
.fuego {
  border-radius: 100%;
  position: absolute;
  top: -20px;
  left: 50%;
  margin-left: -2.6px;
  width: 6.66666667px;
  height: 18px;
}

.fuego:nth-child(1) {
  -webkit-animation: fuego 2s 5.5s infinite;
          animation: fuego 2s 5.5s infinite;
}

.fuego:nth-child(2) {
  -webkit-animation: fuego 1.5s 5.5s infinite;
          animation: fuego 1.5s 5.5s infinite;
}

.fuego:nth-child(3) {
  -webkit-animation: fuego 1s 5.5s infinite;
          animation: fuego 1s 5.5s infinite;
}

.fuego:nth-child(4) {
  -webkit-animation: fuego 0.5s 5.5s infinite;
          animation: fuego 0.5s 5.5s infinite;
}

.fuego:nth-child(5) {
  -webkit-animation: fuego 0.2s 5.5s infinite;
          animation: fuego 0.2s 5.5s infinite;
}

/* ============================================== Animation Fire
*/
@-webkit-keyframes fuego {
  0%, 100% {
    background: rgba(254, 248, 97, 0.5);
    -webkit-box-shadow: 0 0 40px 10px rgba(248, 233, 209, 0.2);
            box-shadow: 0 0 40px 10px rgba(248, 233, 209, 0.2);
    -webkit-transform: translateY(0) scale(1);
            transform: translateY(0) scale(1);
  }
  50% {
    background: rgba(255, 50, 0, 0.1);
    -webkit-box-shadow: 0 0 40px 20px rgba(248, 233, 209, 0.2);
            box-shadow: 0 0 40px 20px rgba(248, 233, 209, 0.2);
    -webkit-transform: translateY(-20px) scale(0);
            transform: translateY(-20px) scale(0);
  }
}
@keyframes fuego {
  0%, 100% {
    background: rgba(254, 248, 97, 0.5);
    -webkit-box-shadow: 0 0 40px 10px rgba(248, 233, 209, 0.2);
            box-shadow: 0 0 40px 10px rgba(248, 233, 209, 0.2);
    -webkit-transform: translateY(0) scale(1);
            transform: translateY(0) scale(1);
  }
  50% {
    background: rgba(255, 50, 0, 0.1);
    -webkit-box-shadow: 0 0 40px 20px rgba(248, 233, 209, 0.2);
            box-shadow: 0 0 40px 20px rgba(248, 233, 209, 0.2);
    -webkit-transform: translateY(-20px) scale(0);
            transform: translateY(-20px) scale(0);
  }
}
@-webkit-keyframes in {
  to {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes in {
  to {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
.text {
  color: #8b6a60;
  font-family: 'Lobster', cursive;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.text h1 {
  font-size: 1.4em;
}

.card-front_inside {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  width: 80%;
  margin: auto;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: translateZ(-1px) rotateY(180deg);
          transform: translateZ(-1px) rotateY(180deg);
  background-color: #ffefef;
}

.shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: translateZ(-2px) rotateY(180deg);
          transform: translateZ(-2px) rotateY(180deg);
  pointer-events: none;
  -webkit-transition: background 1s linear;
  transition: background 1s linear;
}

.polaroid {
  width: 240x;
  height: 220px;
  position: absolute;
  float: left;
  background: #1e1c18;
  border: 7px solid #f5f5f5;
  border-bottom: 50px solid #f5f5f5;
  -webkit-box-shadow: 0 0 6px -1px #000;
          box-shadow: 0 0 6px -1px #000;
  overflow: hidden;
  left: 0;
  right: 0;
  margin: auto;
  -webkit-transform: rotate(-5deg);
          transform: rotate(-5deg);
  clear: both;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
.polaroid img,
.polaroid .img {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  background-position: center;
  background-size: cover;
  -webkit-animation: fade-in 20s ease-in;
          animation: fade-in 20s ease-in;
  -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

.wishesFont{
  font-family: 'Indie Flower', cursive;
  font-weight: 800;
}

@-webkit-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
