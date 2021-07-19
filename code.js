var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1f0f8f7a-f41f-4546-8b6f-64c750ff2a84","75f432ed-36e7-4be3-930b-ecc1a578d3c2","366c0b54-38e7-4e14-b6d3-90e7b788b294","ae115182-ad82-4329-9353-4efe7e6c8e6b","89b9d095-957d-4fe6-8c6d-dce96b4e0be7","de680164-5986-4e91-abba-2369859c01fc","c92d83e7-9b39-4196-901b-363a5afe4832"],"propsByKey":{"1f0f8f7a-f41f-4546-8b6f-64c750ff2a84":{"name":"virus1","sourceUrl":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"jtYFwldEv_5qJnCT2glgiwdohYvywxlK","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png"},"75f432ed-36e7-4be3-930b-ecc1a578d3c2":{"name":"virus2","sourceUrl":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png","frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"KoZz0QksHdpzqfX71bq5vgJR__O0e4sP","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png"},"366c0b54-38e7-4e14-b6d3-90e7b788b294":{"name":"virus3","sourceUrl":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png","frameSize":{"x":390,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png"},"ae115182-ad82-4329-9353-4efe7e6c8e6b":{"name":"virus4","sourceUrl":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png","frameSize":{"x":399,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png"},"89b9d095-957d-4fe6-8c6d-dce96b4e0be7":{"name":"bandage","sourceUrl":"assets/api/v1/animation-library/gamelab/EdR21Mi_aYe_KoJ.axYBaHFt3pjQzkQs/category_household_objects/bandage.png","frameSize":{"x":91,"y":93},"frameCount":1,"looping":true,"frameDelay":2,"version":"EdR21Mi_aYe_KoJ.axYBaHFt3pjQzkQs","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":93},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EdR21Mi_aYe_KoJ.axYBaHFt3pjQzkQs/category_household_objects/bandage.png"},"de680164-5986-4e91-abba-2369859c01fc":{"name":"baby crying","sourceUrl":null,"frameSize":{"x":287,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"97XduK4LzeWaHJLNJwv_dt0T3u7ct.7D","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":287,"y":400},"rootRelativePath":"assets/de680164-5986-4e91-abba-2369859c01fc.png"},"c92d83e7-9b39-4196-901b-363a5afe4832":{"name":"baby happy","sourceUrl":null,"frameSize":{"x":287,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"DWKBZ3.c0q3sOD.Q4vTpnkKOSxjGd7ZJ","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":287,"y":400},"rootRelativePath":"assets/c92d83e7-9b39-4196-901b-363a5afe4832.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 3;
var Virus1, Virus2, Virus3,Virus4;
var boundary1, boundary2;
var bandage;
var baby;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  bandage = createSprite(20,190,13,13);
  bandage.shapeColor = "green";
  bandage.setAnimation("bandage");
  bandage.scale = 0.30;


  baby = createSprite(380,190,20,20);
  baby.setAnimation("baby crying");
  baby.scale = 0.09;
  
  
  Virus1 = createSprite(100,130,10,10);
  Virus1.shapeColor = "red";
  Virus1.setAnimation("virus1");
  Virus1.scale = 0.05;
  Virus2 = createSprite(215,130,10,10);
  Virus2.shapeColor = "red";
  Virus2.setAnimation("virus2");
  Virus2.scale = 0.05;
  Virus3 = createSprite(165,250,10,10);
  Virus3.shapeColor = "red";
  Virus3.setAnimation("virus3");
  Virus3.scale = 0.05;
  Virus4 = createSprite(270,250,10,10);
  Virus4.shapeColor = "red";
  Virus4.setAnimation("virus4");
  Virus4.scale = 0.05;
 
//add the velocity to make the car move.
  Virus1.velocityY = +7;
  Virus2.velocityY = +7;
  Virus3.velocityY = -7;
  Virus4.velocityY = -7;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
  Virus1.bounceOff(boundary1);
  Virus1.bounceOff(boundary2);
  Virus2.bounceOff(boundary1);
  Virus2.bounceOff(boundary2);
  Virus3.bounceOff(boundary1);
  Virus3.bounceOff(boundary2);
  Virus4.bounceOff(boundary1);
  Virus4.bounceOff(boundary2);
//Add the condition to make the bandage move left and right
  if(keyDown("right")){
   bandage.x = bandage.x +5;
  }
  if(keyDown("LEFT")){
    bandage.x = bandage.x-5;
  }
//Add the condition to reduce the life of bandage if it touches the car.
  if(bandage.isTouching(Virus1) || bandage.isTouching(Virus2) || bandage.isTouching(Virus3) || bandage.isTouching(Virus4)){
    bandage.x = 20;
    bandage.y = 190;
    life = life -1;
  }
  if(bandage.isTouching(baby)){
    textSize(30);
    fill("red");
    text("You Won !!!!!",100,200);
    Virus1.setVelocity(0,0);
    Virus2.setVelocity(0,0);
    Virus3.setVelocity(0,0);
    Virus4.setVelocity(0,0);
  }
  if(life===0){
    textSize(30);
    fill("red");
    text("Game Over !!!!!",100,150);
    Virus1.setVelocity(0,0);
    Virus2.setVelocity(0,0);
    Virus3.setVelocity(0,0);
    Virus4.setVelocity(0,0);
    
  }
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
