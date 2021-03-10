const htmlLogo = document.querySelector('.logo__html');
const cssLogo = document.querySelector('.logo__css');
const jsLogo = document.querySelector('.logo__js');
const reactLogo = document.querySelector('.logo__react');
let htmlDegree = 0;
let cssDegree = 0;
let jsDegree = 0;
let reactDegree = 0;

function htmlLoop() {
  const rotation = (htmlDegree * Math.PI) /180;
  const targetX = window.innerWidth / 2 + 350 * Math.cos(rotation) - 50;
  const targetY = window.innerHeight / 2 + 350 * Math.sin(rotation) - 50;

  htmlLogo.style.left = `${targetX}px`;
  htmlLogo.style.top = `${targetY}px`;
  
  htmlDegree += 0.5;
  requestAnimationFrame(htmlLoop);
}

function cssLoop() {
  const rotation = (cssDegree * Math.PI) /180;
  const targetX = window.innerWidth / 2 + 350 * Math.cos(rotation) - 50;
  const targetY = window.innerHeight / 2 + 350 * Math.sin(rotation) - 50;

  cssLogo.style.left = `${targetX}px`;
  cssLogo.style.top = `${targetY}px`;
  
  cssDegree += 0.7;
  requestAnimationFrame(cssLoop);
}

function jsLoop() {
  const rotation = (jsDegree * Math.PI) /180;
  const targetX = window.innerWidth / 2 + 350 * Math.cos(rotation) - 50;
  const targetY = window.innerHeight / 2 + 350 * Math.sin(rotation) - 50;

  jsLogo.style.left = `${targetX}px`;
  jsLogo.style.top = `${targetY}px`;
  
  jsDegree += 0.9;
  requestAnimationFrame(jsLoop);
}

function reactLoop() {
  const rotation = (reactDegree * Math.PI) /180;
  const targetX = window.innerWidth / 2 + 350 * Math.cos(rotation) - 50;
  const targetY = window.innerHeight / 2 + 350 * Math.sin(rotation) - 50;

  reactLogo.style.left = `${targetX}px`;
  reactLogo.style.top = `${targetY}px`;
  
  reactDegree += 1.0;
  requestAnimationFrame(reactLoop);
}

htmlLoop();
cssLoop();
jsLoop();
reactLoop();