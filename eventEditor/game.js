function player(name) { 
  // unfinished code
  this.name=name;
  this.x=0;
  
  this.setX=function setX(value){
  this.x=value;
  }
  //this.methodList=[this.ler];
} 


p1=new player("p1");
p1.setX(10);
console.log(p1.x);

update();
function update(){

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(p1.x,0,10,10);


}



var start = null;
var element = document.getElementById("myCanvas");
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress/10, 200) + "px";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
