video = "";
objects=[];
status1="";
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas = createCanvas(483,380);
    canvas.center();
}
function draw(){
image(video,0,0,483,380);
if(status1 != ""){
    objdec.detect(video,gotResults)
    for(i=0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status:Objects Detected";
        document.getElementById("object_detected").innerHTML = "Number OF Objects Detected  "+" "+objects.length;
        fill("green")
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("yellow");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}
function gotResults(error,results){
if (error){
    console.log(error);
}
else{
console.log(results);
objects = results;
}
}
function start(){
objdec = ml5.objectDetector("cocossd",modeloaded);
document.getElementById("status").innerHTML = "Status:Detecting Objects";
}
function stop(){
    video.pause();
}
function modeloaded(){
    console.log("Model Loaded Successfully");
    status1 = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
