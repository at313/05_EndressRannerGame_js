for (var j = 0; j < 4; j++) {
  for(var i = 0; i < 4; i++){
    var sprite = new cc.Sprite(res.cover_png);
    sprite.attr({
        x: size.width  * 0.18 + 70 * i,
        y: size.height * 0.2 + 70 * j,
        scale: 1.0,
        rotation: 0
    });
    this.addChild(sprite, 0);
  }
}
