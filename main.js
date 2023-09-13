canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasaimages = ["nasa1.jpeg", "nasa2.jpeg","nasa3.jpeg","nasa4.jpeg"];
var randomnumber = Math.floor(Math.random()*4)
roverWidth = 100;
roverHeight = 90;

backgroundImage = nasaimages[randomnumber];

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
    backgroundImgTag = new Image(); // Definindo uma variável com uma nova imagem
    backgroundImgTag.onload = uploadBackground; // Djustando uma função, ao carregar essa variável
    backgroundImgTag.src = backgroundImage; // Carregar a imagem

    roverImgTag = new Image(); // Definindo uma variável com uma nova imagem
    roverImgTag.onload = uploadrover; // Ajustando uma função, ao carregar essa variável
    roverImgTag.src = roverImage; // Carregar a imagem
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.height);
}

function uploadrover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
       if(keyPressed == '38')
       {
        up();
        console.log("cima");
       }
       if(keyPressed == '40')
       {
        down();
        console.log("baixo");
       }
        if(keyPressed == '37')
       {
         left();
         console.log("esquerda");
       }  
         if(keyPressed == '39')
         {
          right();
          console.log("direita");
       }
    }

    function up()
    {
        if(rovewrY >=0)
        {
            roverY = roverY - 10;
            console.log("Quando a seta para cima é pressionada, x = " + roverX + " | y =" +roverY); 
            uploadBackground();
            uploadRover();
        }
    }

    function down()
    {
        if(rovewrY <=500)
        {
            roverY = roverY + 10;
            console.log("Quando a seta para baixo é pressionada, x = " + roverX + " | y =" +roverY); 
            uploadBackground();
            uploadRover();
        }
    }

    function right()
    {
        if(rovewrX <=700)
        {
            roverX = roverX + 10;
            console.log("Quando a seta para à direita é pressionada, x = " + roverX + " | y =" +roverY); 
            uploadBackground();
            uploadRover();
        }
    }

    function left()
    {
        if(rovewrX >=0)
        {
            roverX = roverX - 10;
            console.log("Quando a seta para à esquerda é pressionada, x = " + roverX + " | y =" +roverY); 
            uploadBackground();
            uploadRover();
        }
    }