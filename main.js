let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 /* typewriter es el efecto*/ 
typewriter
  .pauseFor(2500)
  .typeString('Soy programadora de sitios web y lo aprendi en Tecnolochicas.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
/*20221214 video */