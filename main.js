left_wristx=0;
right_wristx=0;
difference=0;

function preload(){

}

function setup(){
    video=createCapture(VIDEO);
    video.position(100,120);
    canvas=createCanvas(550,400);
    video.size(550,500);
    canvas.position(700,170);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#eecfff');
    textSize(difference);
    fill("voilet");
    text("Sneha",200,200);
    document.getElementById("head1").innerHTML= "the size of text  is: "+difference;
}

function modelLoaded(){
    console.log('posenet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        left_wristx=results[0].pose.leftWrist.x;
        right_wristx = results[0].pose.rightWrist.x;
        difference=floor(left_wristx-right_wristx);
    }
}