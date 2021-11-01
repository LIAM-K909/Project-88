var canvas = new fabric.Canvas('myCanvas');

ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 400;

block_image_width = 5;
block_image_height = 5;

function load_img()
{
    fabric.Image.fromURL('golf-h.png', function(Img){
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top: hole_y,
            left: hole_x
        });
        canavs.add(ball_obj);
    });
}

function new_image()
{
    fabric.Image.fomURL('ball.png', function(img){
        ball_obj = Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_ob.set({
            top: ball_y,
            left: ball_x
        })
        canvas.add(ball_obj);
    });
}

window.addEventListener('keyDown', my_keydown);

function my_keydown()
{

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ((ball_x == hole_x) && (ball_y == hole_y))
    {
        canvas.remove(ball_obj);
        document.getElementById("hd3").innerHTML = "You Have Hit The Goal!!!";
        document.getElementById("myCanvas").style.borderColor= "red";

            if(keyPressed == '38')
            {
                up();
                console.log("up");
            }
            if(keyPressed == '40')
            {
                down();
                console.log("down");
            }
            if(keyPressed == '37')
            {
                left();
                console.log("left");
            }
            if(keyPressed == '39')
            {
                right();
                console.log("right");
            }
        }
        
        function up()
        {
            if (ball_x >= 450)
            {
                ball_x = ball_x + block_image_width;
                console.log("Block Image Height = " + block_image_heigth);
                console.log("When Up Arrow Is Pressed, X = " + ball_x + "Y = ", ball_y);
                canvas.remove(ball_obj)
                new_image();
            }
        }
    
        function down()
        {
            if (ball_x <= 450)
            {
                ball_x = ball_x - block_image_width;
                console.log("Block Image Height = " + block_image_heigth);
                console.log("When Down Arrow Is Pressed, X = ", ball_x + "Y = ", ball_y);
                canvas.remove(ball_obj);
                new_image(); 
            }
        }
    
        function left()
        {
            if(ball_x >5)
            {
                ball_y = ball_y + block_image_height;
                console.log("Block Image Width = " + block_image_width);
                console.log("When Left Arrow is Pressed, X = ", ball_y + "Y = ", ball_y);
                canvas.remove(ball_obj);
                new_image();
            }
        }
    
        function right()
        {
            if(ball_x <=1050)
            {
                ball_y = ball_y - block_image_height;
                console.log("Block Image Width = " + block_image_width);
                console.log("When Right Arrow is Pressed, X = ", ball_y + "Y = ", ball_y);
                canvas.remove(ball_obj);
                new_image();
            }
        }   
    }    
