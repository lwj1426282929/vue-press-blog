class Rain {
  speed = 1
  color= {
    r= '80',
    g= '175',
    b= '255',
    a= '0.5'
  }
  started= false
  canvas= null
  ctx= null
  width= 0
  height= 0
  dpr= window.devicePixelRatio || 1
  drop_time= 0
  drop_delay= 25
  wind= 4
  rain_color= null
  rain_color_clear= null
  rain= []
  rain_pool= []
  drops= []
  drop_pool= []

  init = () => {
    if (!Rain.started) {
      Rain.started = true;
      Rain.canvas = document.getElementById('canvas');
      Rain.ctx = Rain.canvas.getContext('2d');
      var c = Rain.color;
      Rain.rain_color = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')';
      Rain.rain_color_clear = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0)';
      Rain.resize();
      Ticker.addListener(Rain.step);
      
      const gui = new dat.GUI();
      gui.add(Rain, 'speed', 0.2, 2);
      
      // fade out instructions after a few seconds
      var instructions = document.getElementById('instructions');
      setTimeout(function() {
        instructions.style.opacity = 0;
        setTimeout(function(){
          instructions.parentNode.removeChild(instructions);
        }, 2000);
      }, 4000);
    }
  }
}
