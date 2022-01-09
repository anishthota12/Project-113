function setup() {
    canvas = createCanvas(400, 300);
    video = createCapture(VIDEO);
    video.hide();
    frameColor = "#CD7F32";
}

function draw() {
    stroke(frameColor);
    circle(30, 30, 50);
    fill(frameColor);

    stroke(frameColor);
    circle(370, 30, 50);
    fill(frameColor);
    
    stroke(frameColor);
    circle(30, 270, 50);
    fill(frameColor);

    stroke(frameColor);
    circle(370, 270, 50);
    fill(frameColor);

    stroke(frameColor);
    rect(30, 17.5, 340, 25);

    stroke(frameColor);
    rect(17.5, 17.5, 25, 240);

    stroke(frameColor);
    rect(30, 257.5, 340, 25);

    stroke(frameColor);
    rect(357.5, 17.5, 25, 240);

    image(video, 40, 35, 320, 230);
}

function takePicture() {
    save("picture.png");
}

function changeFrameColor() {
    frameColor = document.getElementById("frameColor").value;
    console.log(frameColor);
}