
var  randomblock 
function setup(){
createCanvas (400,400)
randomblock=createSprite(200,200,20,20)
randomblock.shapeColor = "grey"
}





function draw(){
    
background = ("yellow")
if(keyIsDown(UP_ARROW)){
 background=("red")  
}
drawSprites()



}






