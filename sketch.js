const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var sliced2, sliced3
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
    background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(26)
    text("DATE: "+ sliced2,60, 50)
    textSize(26)
    text("TIME: "+ sliced3,89,90)

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var time = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")

    //change the data in JSON format
    var timeJson = await time.json()

    // write code slice the datetime
    var stime = timeJson.datetime

    var sliced = stime.slice(11,13)

    sliced2 = stime.slice(0,10)

    sliced3 = stime.slice(11,16)
    // add conditions to change the background images from sunrise to sunset
    if(sliced > 06 && sliced <= 08){
    backgroundImg = loadImage("sunrise1.png")
    }
    else if(sliced > 08 && sliced <= 10){
        backgroundImg = loadImage("sunrise2.png")
    }
    else if(sliced > 10 && sliced <= 12){
        backgroundImg = loadImage("sunrise3.png")
        }
    else if(sliced > 12 && sliced <= 14){
            backgroundImg = loadImage("sunrise4.png")
        }
    else if(sliced > 14 && sliced <= 16){
            backgroundImg = loadImage("sunrise5.png")
     }
    else if(sliced > 16 && sliced <= 18){
        backgroundImg = loadImage("sunrise6.png")
        }

        else if(sliced > 18 && sliced <= 20){
            backgroundImg = loadImage("sunset7.png")
            }

            else if(sliced > 20 && sliced <= 22){
                backgroundImg = loadImage("sunset8.png")
                }
                else if(sliced > 22 && sliced <= 00){
                    backgroundImg = loadImage("sunset9.png")
                    }
                    else if(sliced > 00 && sliced <= 02){
                        backgroundImg = loadImage("sunset10.png")
                        }
                        else if(sliced > 02 && sliced <= 04){
                            backgroundImg = loadImage("sunset11.png")

                            }
                            else{
                               backgroundImg = loadImage("sunset12.png")
                                }

    //load the image in backgroundImg variable here
    console.log(sliced2)
}
