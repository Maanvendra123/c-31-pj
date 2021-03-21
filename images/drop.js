class Drop{
    constructor(x, y){
        var options={
          restitution:0.1,
          density:1.2,
          friction:0.1,
        }
        }
        display(){
          var maxDrops=100;
          for(var i=0;i<maxDrops;i++){
            maxDrops.push(new createDrop(random(0,400),random(0,400)))
          }
          if(this.rain.position.y>height){
            Matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
          }
        }
    }