<template>
  <div>
    <div class="essay-bg">
      <canvas id="canvas">Canvas is not supported in your browser</canvas>
    </div>
    <div class="essay-container">
      <div class="en">
        <p>You say that you love rain</p>
        <p>But you open your umbrella when it rains</p>
        <p>You say that you love the sun</p>
        <p>But you find a shadow spot when the sun shines</p>
        <p>You say that you love the wind</p>
        <p>But you close your windows when wind blows</p>
        <p>This is why I am afraid</p>
        <p>You say that you love me too</p>
      </div>
      <div class="zh">
        <p class="sub-title">【文艺版】</p>
        <p>你说烟雨微芒，兰亭远望；后来轻揽婆娑，深遮霓裳</p>
        <p>你说春光烂漫，绿袖红香；后来内掩西楼，静立卿旁</p>
        <p>你说软风轻拂，醉卧思量；后来紧掩门窗，漫帐成殇</p>
        <p>你说情丝柔肠，如何相忘；我却眼波微转，兀自成霜</p>
      </div>
      <div class="zh">
        <p class="sub-title">【离骚版】</p>
        <p>君乐雨兮启伞枝</p>
        <p>君乐昼兮林蔽日</p>
        <p>君乐风兮栏帐起</p>
        <p>君乐吾兮吾心噬</p>
      </div>
      <div class="zh">
        <p class="sub-title">【诗经版】</p>
        <p>子言慕雨，启伞避之</p>
        <p>子言好阳，寻荫拒之</p>
        <p>子言喜风，阖户离之</p>
        <p>子言偕老，吾所畏之</p>
      </div>
    </div>
  </div>
</template>
<script>
import dat from 'dat.GUI'
export default {
  mounted() {
    window.onload = main;

    function getRgb(r, g, b) {
      return "rgb(" + r + "," + g + "," + b + ")";
    }

    function main() {
      //drop
      var dropList = [];
      var gravity = 0.5;
      //
      var linelist = [];
      var canvasEl = document.getElementById('canvas');
      var ctx = canvasEl.getContext('2d');
      var mousePos = [0, 0];
      var backgroundColor = 'rgba(0,0,0,0)';
      canvasEl.width = canvasEl.clientWidth;
      canvasEl.height = canvasEl.clientHeight;
      var speedx = 0;
      var maxspeedx = 0;
      window.onresize = function () {
        canvasEl.width = canvasEl.clientWidth;
        canvasEl.height = canvasEl.clientHeight;
      }
      window.onmousemove = function (e) {
        mousePos[0] = e.clientX;
        mousePos[1] = e.clientY;
        maxspeedx = (e.clientX - canvasEl.clientWidth / 2) / (canvasEl.clientWidth / 2);
      }

      function createLine(e) {
        var temp = 0.25 * (50 + Math.random() * 100);
        var myline = {
          speed: 5.5 * (Math.random() * 6 + 3),
          die: false,
          posx: e,
          posy: -200,
          h: temp,
          color: getRgb(Math.floor(temp * 255 / 75), Math.floor(temp * 255 / 75), Math.floor(temp * 255 / 75))
        };
        linelist.push(myline);
      }

      window.requestAnimationFrame(update);

      function createDrop(x, y) {
        var mydrop = {
          die: false,
          posx: x,
          posy: y,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * (-6) - 3,
          radius: Math.random() * 1.5 + 1
        };
        return mydrop;
      }

      function madedrops(x, y) {
        var maxi = Math.floor(Math.random() * 5 + 5);
        for (var i = 0; i < maxi; i++) {
          dropList.push(createDrop(x, y));
        }
      }

      function update() {
        if (dropList.length > 0) {
          dropList.forEach(function (e) {
            e.vx = e.vx + (speedx) / 2;
            e.posx = e.posx + e.vx;
            e.vy = e.vy + gravity;
            e.posy = e.posy + e.vy;
            if (e.posy > canvasEl.clientHeight) {
              e.die = true;
            }
          });
        }

        for (var i = dropList.length - 1; i >= 0; i--) {
          if (dropList[i].die) {
            dropList.splice(i, 1);
          }
        }

        speedx = speedx + (maxspeedx - speedx) / 50;

        if (Math.random() > 0) {
          createLine(Math.random() * 2 * canvasEl.width - (0.5 * canvasEl.width));
          createLine(Math.random() * 2 * canvasEl.width - (0.5 * canvasEl.width));
          createLine(Math.random() * 2 * canvasEl.width - (0.5 * canvasEl.width));
        }

        var mydeadline = canvasEl.clientHeight - Math.random() * canvasEl.clientHeight / 5;
        
        linelist.forEach(function (e) {
          var dis = Math.sqrt(((e.posx + speedx * e.h) - mousePos[0]) * ((e.posx + speedx * e.h) - mousePos[0]) + (e.posy + e.h - mousePos[1]) * (e.posy + e.h - mousePos[1]));
          if (dis < 35) {
            madedrops(e.posx + speedx * e.h, e.posy + e.h);
            e.die = true;
          }

          if ((e.posy + e.h) > mydeadline) {
            if (Math.random() > 0.85) {
              madedrops(e.posx + speedx * e.h, e.posy + e.h);
              e.die = true;
            }
          }
          if (e.posy >= canvasEl.clientHeight) {
            e.die = true;
          } else {
            e.posy = e.posy + e.speed;
            e.posx = e.posx + (e.speed * speedx);
          }
        });
        for (var i = linelist.length - 1; i >= 0; i--) {
          if (linelist[i].die) {
            linelist.splice(i, 1);
          }
        }
        render();
        window.requestAnimationFrame(update);
      }

      function render() {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

        linelist.forEach(
          function (line) {

            ctx.strokeStyle = line.color;
            ctx.lineWidth = 4.5;
            ctx.beginPath();
            ctx.moveTo(line.posx, line.posy);
            ctx.lineTo(line.posx + speedx * line.h, line.posy + line.h);
            ctx.stroke();
          });
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#fff";
        dropList.forEach(function (e) {
          ctx.beginPath();
          ctx.arc(e.posx, e.posy, e.radius, Math.random() * Math.PI * 2, 1 * Math.PI);
          ctx.stroke();
        });
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.essay-bg {
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(251, 215, 134, 0.75), rgba(247, 121, 125, 0.25)), url('/img/bg/essay-9.jpg') no-repeat bottom right;
  background-size: cover;
}
#canvas {
  width: 100%;
  height: 100%;
  transition: opacity 2s;
}
</style>