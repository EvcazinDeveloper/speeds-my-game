var player;
var ground, plataform;
var ruby;
var playerAnimIdle, playerAnimRun, playerAnimSleeping, playerAnimJumping, playerAnimgettingRuby, playerAnimRun2, groundImg, plataformImg, rubyAnim, transformedIdle;
var button;
var moving = false, jumping = false;
var invisibleWall;

function preload() {
  playerAnimIdle = loadAnimation(
    "./assets/sprite/idleSequence0001.png", 
    "./assets/sprite/idleSequence0002.png", 
    "./assets/sprite/idleSequence0003.png", 
    "./assets/sprite/idleSequence0004.png", 
    "./assets/sprite/idleSequence0005.png", 
    "./assets/sprite/idleSequence0006.png", 
    "./assets/sprite/idleSequence0007.png", 
    "./assets/sprite/idleSequence0008.png" 
  );
  playerAnimRun = loadAnimation(
    "./assets/sprite/runningSequence0001.png",
    "./assets/sprite/runningSequence0002.png",
    "./assets/sprite/runningSequence0003.png",
    "./assets/sprite/runningSequence0004.png",
    "./assets/sprite/runningSequence0005.png",
    "./assets/sprite/runningSequence0006.png",
    "./assets/sprite/runningSequence0007.png",
    "./assets/sprite/runningSequence0008.png",
    "./assets/sprite/runningSequence0009.png",
    "./assets/sprite/runningSequence0010.png",
    "./assets/sprite/runningSequence0011.png",
    "./assets/sprite/runningSequence0012.png",
    "./assets/sprite/runningSequence0013.png",
    "./assets/sprite/runningSequence0014.png",
    "./assets/sprite/runningSequence0015.png",
    "./assets/sprite/runningSequence0016.png"
  )
  playerAnimRun2 = loadAnimation(
    "./assets/sprite/runningLeft0001.png",
    "./assets/sprite/runningLeft0002.png",
    "./assets/sprite/runningLeft0003.png",
    "./assets/sprite/runningLeft0004.png",
    "./assets/sprite/runningLeft0005.png",
    "./assets/sprite/runningLeft0006.png",
    "./assets/sprite/runningLeft0007.png",
    "./assets/sprite/runningLeft0008.png",
    "./assets/sprite/runningLeft0009.png",
    "./assets/sprite/runningLeft0010.png",
    "./assets/sprite/runningLeft0011.png",
    "./assets/sprite/runningLeft0012.png",
    "./assets/sprite/runningLeft0013.png",
    "./assets/sprite/runningLeft0014.png",
    "./assets/sprite/runningLeft0015.png",
    "./assets/sprite/runningLeft0016.png"
  )
  playerAnimJumping = loadAnimation(
    "./assets/sprite/jumpSequence0001.png",
    "./assets/sprite/jumpSequence0002.png",
    "./assets/sprite/jumpSequence0003.png",
    "./assets/sprite/jumpSequence0004.png",
    "./assets/sprite/jumpSequence0005.png",
    "./assets/sprite/jumpSequence0006.png",
    "./assets/sprite/jumpSequence0007.png",
    "./assets/sprite/jumpSequence0008.png",
    "./assets/sprite/jumpSequence0009.png",
    "./assets/sprite/jumpSequence0010.png",
    "./assets/sprite/jumpSequence0011.png",
    "./assets/sprite/jumpSequence0012.png",
    "./assets/sprite/jumpSequence0013.png",
    "./assets/sprite/jumpSequence0014.png",
    "./assets/sprite/jumpSequence0015.png",
    "./assets/sprite/jumpSequence0016.png",
    "./assets/sprite/jumpSequence0017.png",
    "./assets/sprite/jumpSequence0018.png",
    "./assets/sprite/jumpSequence0020.png",
    "./assets/sprite/jumpSequence0021.png",
    "./assets/sprite/jumpSequence0022.png",
    "./assets/sprite/jumpSequence0023.png",
    "./assets/sprite/jumpSequence0024.png",
    "./assets/sprite/jumpSequence0025.png",
    "./assets/sprite/jumpSequence0026.png",
    "./assets/sprite/jumpSequence0027.png",
    "./assets/sprite/jumpSequence0028.png",
    "./assets/sprite/jumpSequence0029.png",
    "./assets/sprite/jumpSequence0030.png",
    "./assets/sprite/jumpSequence0031.png",
    "./assets/sprite/jumpSequence0032.png",
    "./assets/sprite/jumpSequence0033.png",
    "./assets/sprite/jumpSequence0034.png",
    "./assets/sprite/jumpSequence0035.png",
    "./assets/sprite/jumpSequence0036.png",
    "./assets/sprite/jumpSequence0037.png",
    "./assets/sprite/jumpSequence0038.png",
    "./assets/sprite/jumpSequence0039.png",
    "./assets/sprite/jumpSequence0040.png"
  )
  playerAnimgettingRuby = loadAnimation(
    "./assets/sprite/conquestingSequence0001.png",
    "./assets/sprite/conquestingSequence0002.png",
    "./assets/sprite/conquestingSequence0003.png",
    "./assets/sprite/conquestingSequence0004.png",
    "./assets/sprite/conquestingSequence0005.png",
    "./assets/sprite/conquestingSequence0006.png",
    "./assets/sprite/conquestingSequence0007.png",
    "./assets/sprite/conquestingSequence0008.png",
    "./assets/sprite/conquestingSequence0009.png",
    "./assets/sprite/conquestingSequence0010.png",
    "./assets/sprite/conquestingSequence0011.png",
    "./assets/sprite/conquestingSequence0012.png",
    "./assets/sprite/conquestingSequence0013.png",
    "./assets/sprite/conquestingSequence0014.png",
    "./assets/sprite/conquestingSequence0015.png",
    "./assets/sprite/conquestingSequence0016.png",
    "./assets/sprite/conquestingSequence0017.png",
    "./assets/sprite/conquestingSequence0018.png",
    "./assets/sprite/conquestingSequence0020.png",
    "./assets/sprite/conquestingSequence0021.png",
    "./assets/sprite/conquestingSequence0022.png",
    "./assets/sprite/conquestingSequence0023.png",
    "./assets/sprite/conquestingSequence0024.png",
    "./assets/sprite/conquestingSequence0025.png",
    "./assets/sprite/conquestingSequence0026.png",
    "./assets/sprite/conquestingSequence0027.png",
    "./assets/sprite/conquestingSequence0028.png",
    "./assets/sprite/conquestingSequence0029.png",
    "./assets/sprite/conquestingSequence0030.png",
    "./assets/sprite/conquestingSequence0031.png",
    "./assets/sprite/conquestingSequence0032.png",
    "./assets/sprite/conquestingSequence0033.png",
    "./assets/sprite/conquestingSequence0034.png",
    "./assets/sprite/conquestingSequence0035.png",
    "./assets/sprite/conquestingSequence0036.png",
    "./assets/sprite/conquestingSequence0037.png",
    "./assets/sprite/conquestingSequence0038.png",
    "./assets/sprite/conquestingSequence0039.png",
    "./assets/sprite/conquestingSequence0040.png",
    "./assets/sprite/conquestingSequence0041.png",
    "./assets/sprite/conquestingSequence0042.png",
    "./assets/sprite/conquestingSequence0043.png",
    "./assets/sprite/conquestingSequence0044.png",
    "./assets/sprite/conquestingSequence0045.png",
    "./assets/sprite/conquestingSequence0046.png",
    "./assets/sprite/conquestingSequence0047.png",
    "./assets/sprite/conquestingSequence0048.png",
    "./assets/sprite/conquestingSequence0049.png",
    "./assets/sprite/conquestingSequence0050.png"
  );
  transformedIdle = loadAnimation(
    "./assets/sprite/Rubyidle0001.png",
    "./assets/sprite/Rubyidle0002.png",
    "./assets/sprite/Rubyidle0003.png",
    "./assets/sprite/Rubyidle0004.png",
    "./assets/sprite/Rubyidle0005.png",
    "./assets/sprite/Rubyidle0006.png",
    "./assets/sprite/Rubyidle0007.png",
    "./assets/sprite/Rubyidle0008.png",
    "./assets/sprite/Rubyidle0009.png",
    "./assets/sprite/Rubyidle0010.png",
    "./assets/sprite/Rubyidle0011.png",
    "./assets/sprite/Rubyidle0012.png",
    "./assets/sprite/Rubyidle0013.png",
    "./assets/sprite/Rubyidle0014.png",
    "./assets/sprite/Rubyidle0015.png",
    "./assets/sprite/Rubyidle0016.png",
    "./assets/sprite/Rubyidle0017.png",
    "./assets/sprite/Rubyidle0018.png",
    "./assets/sprite/Rubyidle0020.png",
    "./assets/sprite/Rubyidle0021.png",
    "./assets/sprite/Rubyidle0022.png",
    "./assets/sprite/Rubyidle0023.png",
    "./assets/sprite/Rubyidle0024.png",
    "./assets/sprite/Rubyidle0025.png",
    "./assets/sprite/Rubyidle0026.png",
    "./assets/sprite/Rubyidle0027.png",
    "./assets/sprite/Rubyidle0028.png",
    "./assets/sprite/Rubyidle0029.png",
    "./assets/sprite/Rubyidle0030.png",
    "./assets/sprite/Rubyidle0031.png",
    "./assets/sprite/Rubyidle0032.png",
    "./assets/sprite/Rubyidle0033.png",
    "./assets/sprite/Rubyidle0034.png",
    "./assets/sprite/Rubyidle0035.png",
    "./assets/sprite/Rubyidle0036.png",
    "./assets/sprite/Rubyidle0037.png",
    "./assets/sprite/Rubyidle0038.png",
    "./assets/sprite/Rubyidle0039.png",
    "./assets/sprite/Rubyidle0040.png",
    "./assets/sprite/Rubyidle0041.png",
    "./assets/sprite/Rubyidle0042.png",
    "./assets/sprite/Rubyidle0043.png",
    "./assets/sprite/Rubyidle0044.png",
    "./assets/sprite/Rubyidle0045.png",
    "./assets/sprite/Rubyidle0046.png",
    "./assets/sprite/Rubyidle0047.png",
    "./assets/sprite/Rubyidle0048.png",
    "./assets/sprite/Rubyidle0049.png",
    "./assets/sprite/Rubyidle0050.png"
  );
  groundImg = loadImage("./assets/ground.png");
  rubyAnim = loadAnimation(
    "./assets/ruby/redEmerald0001.png",
    "./assets/ruby/redEmerald0002.png",
    "./assets/ruby/redEmerald0003.png",
    "./assets/ruby/redEmerald0004.png",
    "./assets/ruby/redEmerald0005.png",
    "./assets/ruby/redEmerald0006.png",
    "./assets/ruby/redEmerald0007.png",
    "./assets/ruby/redEmerald0008.png",
    "./assets/ruby/redEmerald0009.png",
    "./assets/ruby/redEmerald0010.png",
    "./assets/ruby/redEmerald0011.png",
    "./assets/ruby/redEmerald0012.png",
    "./assets/ruby/redEmerald0013.png",
    "./assets/ruby/redEmerald0014.png",
    "./assets/ruby/redEmerald0015.png",
    "./assets/ruby/redEmerald0016.png",
    "./assets/ruby/redEmerald0017.png",
    "./assets/ruby/redEmerald0018.png",
    "./assets/ruby/redEmerald0020.png",
    "./assets/ruby/redEmerald0021.png",
    "./assets/ruby/redEmerald0022.png",
    "./assets/ruby/redEmerald0023.png",
    "./assets/ruby/redEmerald0024.png",
    "./assets/ruby/redEmerald0025.png",
    "./assets/ruby/redEmerald0026.png",
    "./assets/ruby/redEmerald0027.png",
    "./assets/ruby/redEmerald0028.png",
    "./assets/ruby/redEmerald0029.png",
    "./assets/ruby/redEmerald0030.png",
    "./assets/ruby/redEmerald0031.png",
    "./assets/ruby/redEmerald0032.png",
    "./assets/ruby/redEmerald0033.png",
    "./assets/ruby/redEmerald0034.png",
    "./assets/ruby/redEmerald0035.png",
    "./assets/ruby/redEmerald0036.png",
    "./assets/ruby/redEmerald0037.png",
    "./assets/ruby/redEmerald0038.png",
    "./assets/ruby/redEmerald0039.png",
    "./assets/ruby/redEmerald0040.png"
  );
  plataformImg = loadImage("./assets/plataform.png")
  rubyformSpritedata = loadJSON("./assets/sprite/jsonTransformation.json");
  rubyformSpritesheet = loadImage("./assets/sprite/jsonTransformation.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = createSprite(900, 1100, 10000, 60);
  ground.addImage(groundImg);
  ground.scale = 1.5;
  plataform = createSprite(1427, 523, 300, 100)
  plataform.addImage(plataformImg);
  ruby = createSprite(1158, 660, 100, 100);
  ruby.addAnimation("floating", rubyAnim);
  player = createSprite(200, 730, 30, 40);
  player.addAnimation("idle", playerAnimIdle);
  player.addAnimation("running", playerAnimRun);
  player.addAnimation("runningleft", playerAnimRun2);
  player.addAnimation("jump", playerAnimJumping);
  player.addAnimation("rubyConquest", playerAnimgettingRuby);
  player.addAnimation("transformedidle", transformedIdle);
  invisibleWall = createSprite(1919, 644, 20, 900);
  invisibleWall.visible = false;
  player.scale = 0.7;
}

function draw() {
  background("cyan");
  text(mouseX + "," + mouseY, mouseX, mouseY);
  camera.x = player.x
  camera.y = player.y
  if (keyDown(RIGHT_ARROW)) {
    player.x = player.x + 5
    player.changeAnimation("running");
    moving = true
  }
  else if (keyDown(LEFT_ARROW)) {
    player.x = player.x - 5
    player.changeAnimation("runningleft");
    moving = true
  }
  else if (keyDown("space") && player.y >= 600) {
    player.velocityY = player.velocityY - 5;
    player.changeAnimation("jump");
    moving = true;
    jumping = true;
  }
  else if (jumping == true) {
    jumping = false;
    player.changeAnimation("jump");
    moving = false
  }
  else if (moving == true) {
    moving = false
    player.changeAnimation("idle")
  }
  player.velocityY = player.velocityY + 0.7;
  //colisao
  if (player.isTouching(ruby)) {
    ruby.destroy();
    moving = false;
    player.changeAnimation("rubyConquest");
    button = createImg("./assets/transformButton.png");
    button.position(1808,861);
    button.size(100, 100);
    button.mouseClicked(transformation);
  }
  player.collide(ground);
  player.collide(plataform);
  player.collide(invisibleWall)
  plataform.debug = true
  player.debug = true
  drawSprites();
}

function transformation() {
  player.changeAnimation("transformedidle");
}

function gameOver() {
  swal(
    {
      title: `Fim, você ganhou!`,
      text: "Obrigado por jogar!! Logo logo, terá mais!",
      imageUrl:
        "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
      imageSize: "150x150",
      confirmButtonText: "Okay!"
    },
    //restart function
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}