# 几种酷炫的css特效

## 文字故障效果

::: demo
<template>
    <div class="container">
        <div class="text-magic" data-word="CSSTextMagic">
            CSSTextMagic
            <div class="white"></div>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    height: 200px;
    border: 1px solid;
    background: #000;

    .white {
        position: absolute;
        left: -10px;
        width: 100%;
        height: 3px;
        background: #000;
        z-index: 4;
        animation: whiteMove 3s ease-out infinite;
    }

    .text-magic {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(2.4);
        width: 300px;
        font-size: 36px;
        font-family: Raleway, Verdana, Arial;
        color: #fff;

        &::before {
            content: attr(data-word);
            position: absolute;
            top: 0;
            left: 0.5px;
            height: 0px;
            color: rgba(255, 255, 255, 0.9);
            overflow: hidden;
            z-index: 2;
            animation: redShadow 1s ease-in infinite;
            filter: contrast(200%);
            text-shadow: 1px 0 0 red;
        }

        &::after {
            content: attr(data-word);
            position: absolute;
            top: 0;
            left: -3px;
            height: 36px;
            color: rgba(255, 255, 255, 0.8);
            overflow: hidden;
            z-index: 3;
            background: rgba(0, 0, 0, 0.9);
            animation: redHeight 1.5s ease-out infinite;
            filter: contrast(200%);
            text-shadow: -1px 0 0 cyan;
            mix-blend-mode: darken;
        }
    }
}

@keyframes redShadow {
    20% {
        height: 32px;
    }
    60% {
        height: 6px;
    }
    100% {
        height: 42px;
    }
}

@keyframes redHeight {
    20% {
        height: 42px;
    }
    35% {
        height: 12px;
    }
    50% {
        height: 40px;
    }
    60% {
        height: 20px;
    }
    70% {
        height: 34px;
    }
    80% {
        height: 22px;
    }
    100% {
        height: 0px;
    }
}

@keyframes whiteMove {
    8% {
        top: 38px;
    }
    14% {
        top: 8px;
    }
    20% {
        top: 42px;
    }
    32% {
        top: 2px;
    }
    99% {
        top: 30px;
    }
}
</style>
:::

## 图片故障效果

::: demo
<template>
    <div class="malfunction-img-container"></div>
</template>

<style lang="scss" scoped>
$img: "./img/crack-img.png";

$imgHeight: 370;

@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

@mixin leftAndClip { 
    $height: randomNum(40, 20);
    $top: random($imgHeight - 60);
    $bottom: $imgHeight - $top - $height;
    clip-path: inset(#{$top}px 0 #{$bottom}px);
    left: #{randomNum(200, -100)}px;   
}

.malfunction-img-container {
    position: relative;
    width: 100%;
    height: 370px;
    margin: auto;
    background: url($img) no-repeat center;
    animation: main-img-hide 16s infinite step-end;

    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 370px;
        top: 0;
        left: 0;
        background: inherit;
    }

    &::before {
        animation: glitch-two 16s infinite 1s step-end;
    }

    &::after {
        animation: glitch-one 16s infinite step-end;
    }
}

@keyframes glitch-one {
    @for $i from 20 to 30 {
        #{$i / 2}% {
            @include leftAndClip;
        }
    }

    15.5% {
        clip-path: inset(10px 0 320px);
        left: -20px;
    }
    16% {
        clip-path: inset(10px 0 320px);
        left: -10px;
        opacity: 0;
    }
    45% {
        opacity: 0.5;
        left: -20px;
        filter: hue-rotate(90deg) saturate(1.3);
    }
    45.5% {
        left: 0px;
        filter: invert(1);
    }

    46% {
        clip-path: inset(150px 0 160px);
        left: 15%;
    }
    46.5% {
        clip-path: inset(20px 0 200px);
        left: -10%;
        transform: scale(1.1);
    }
    47% {
        clip-path: inset(240px 0 20px);
        left: -11%;
        transform: scale(1.2);
    }
    47.5% {
        clip-path: inset(20 0 20px);
        left: 13%;
        transform: scale(1.3);
        filter: invert(0);
    }
    48% {
        clip-path: inset(120 0 120px);
        left: 15%;
        transform: scale(1.1);
    }
    48.5% {
        clip-path: inset(260px 0 10px);
        left: -11%;
        transform: scale(1.2);
        filter: none;
    }
    49% {
        clip-path: inset(5px 0 350px);
        left: 11%;
        transform: scale(1.3);
    }
    49.5% {
        clip-path: inset(105px 0 210px);
        left: 0%;
        transform: scale(1.1);
    }
    50% {
        clip-path: inset(175px 0 160px);
        left: -11%;
    }
    50.5% {
        clip-path: inset(95px 0 230px);
        left: -14%;
        transform: scale(1.2);
    }
    51% {
        clip-path: inset(235px 0 12px);
        left: -14%;
    }
    51.5% {
        clip-path: inset(350px 0 7px);
        left: -14%;
    }
    52% {
        clip-path: inset(320px 0 27px);
        left: -12%;
        transform: scale(1.1);
    }
    52.5% {
        clip-path: inset(190px 0 127px);
        left: -11%;
        transform: scale(1.3);
        filter: hue-rotate(90deg) saturate(1.3);
    }
    54% {
        clip-path: inset(20px 0 20px);
        left: 12%;
        transform: scale(1.1);
        filter: none;
    }
    54% {
        background-image: none;
    }
}

@keyframes glitch-two {
    @for $i from 40 to 50 {
        #{$i / 2}% {
            @include leftAndClip;
        }
    }

    25.5% {
        clip-path: inset(10px 0 320px);
        left: -20px;
    }
    26% {
        clip-path: inset(10px 0 320px);
        left: -10px;
        opacity: 0;
    }
    45% {
        opacity: 0.3;
        left: -20px;
        filter: hue-rotate(45deg) saturate(1.1);
    }
    45.5% {
        left: 0px;
        filter: invert(1.2);
    }

    46% {
        clip-path: inset(50px 0 260px);
        left: -12%;
    }
    46.5% {
        clip-path: inset(120px 0 100px);
        left: 8%;
        transform: scale(1.2);
    }
    47% {
        clip-path: inset(40px 0 300px);
        left: 8%;
        transform: scale(1.3);
    }
    47.5% {
        clip-path: inset(220 0 70px);
        left: -9%;
        transform: scale(1.1);
        filter: invert(1.1);
    }
    48% {
        clip-path: inset(240px 0 120px);
        left: 11%;
        transform: scale(1.2);
    }
    48.5% {
        clip-path: inset(0px 0 310px);
        left: -12%;
        transform: scale(1.2);
        filter: none;
    }
    49% {
        clip-path: inset(255px 0 50px);
        left: 11%;
        transform: scale(1.3);
    }
    49.5% {
        clip-path: inset(10px 0 240px);
        left: 6%;
        transform: scale(1.1);
    }
    50% {
        clip-path: inset(275px 0 90px);
        left: -12%;
    }
    50.5% {
        clip-path: inset(195px 0 90px);
        left: 14%;
        transform: scale(1.4);
    }
    51% {
        clip-path: inset(35px 0 282px);
        left: -14%;
    }
    51.5% {
        clip-path: inset(350px 0 7px);
        left: 14%;
    }
    52% {
        clip-path: inset(20px 0 270px);
        left: -12%;
        transform: scale(1.1);
    }
    52.5% {
        clip-path: inset(90px 0 227px);
        left: -11%;
        transform: scale(1.3);
        filter: hue-rotate(150deg) saturate(1.3);
    }
    54% {
        clip-path: inset(220px 0 100px);
        left: 12%;
        transform: scale(1.1);
        filter: none;
    }
    54% {
        background-image: none;
    }
}

@keyframes main-img-hide {
    5% {
        filter: invert(1);
    }
    5.2% {
        filter: none;
    }
    10% {
        opacity: 0.5;
        filter: grayscale(1);
    }
    11% {
        filter: none;
        opacity: 1;
    }
    45% {
        opacity: 0.5;
        filter: grayscale(1);
    }
    46% {
        filter: none;
        opacity: 1;
    }
    53.5% {
        opacity: 0.5;
        filter: grayscale(1);
    }
    54% {
        filter: none;
        opacity: 1;
    }
    54.5% {
        opacity: 0.5;
        filter: hue-rotate(30deg);
    }
    55% {
        filter: none;
    }
    55.5% {
        background-image: none;
        filter: none;
        opacity: 1;
    }
    56% {
        background-image: url($img);
        opacity: 0.5;
    }
    56.5% {
        background-image: none;
    }
    57% {
        background-image: url($img);
        opacity: 0.8;
    }
    57.5% {
        opacity: 0.3;
    }
    58% {
        background-image: none;
    }
}
</style>
:::

## 电池充电动画

::: demo
<template>
    <div class="battery-bg">
        <div class="battery-container">
            <div class="header"></div>
            <div class="battery">
            </div>
            <div class="battery-copy">
                <div class="g-wave"></div>
                <div class="g-wave"></div>
                <div class="g-wave"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.battery-bg {
    background: #000;
    padding: 50px;
}
.battery-container {
    position: relative;
    width: 140px;
    margin: auto;

    .header {
        position: absolute;
        width: 26px;
        height: 10px;
        left: 50%;
        top: 0;
        transform: translate(-50%, -10px);
        border-radius: 5px 5px 0 0;
        background: #fff;
    }

    .battery-copy {
        position: absolute;
        top: 0;
        left: 0;
        height: 220px;
        width: 140px;
        border-radius: 15px 15px 5px 5px;
        overflow: hidden;
    }

    .battery {
        position: relative;
        height: 220px;
        box-sizing: border-box;
        border-radius: 15px 15px 5px 5px;
        box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.22);
        background: #fff;
        z-index: 1;
        
        &::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 80%;
            background: linear-gradient(to bottom, #7abcff 0%, #00BCD4 44%, #2196F3 100%);
            border-radius: 0px 0px 5px 5px;
            box-shadow: 0 14px 28px rgba(33, 150, 243, 0), 0 10px 10px rgba(9, 188, 215, 0.08);
            animation: charging 10s linear infinite;
            filter: hue-rotate(90deg);
        }
    }

    .g-wave {
        position: absolute;
        width: 300px;
        height: 300px;
        background: rgba(255, 255, 255, .8);
        border-radius: 45% 47% 44% 42%;
        bottom: 25px;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 1;
        animation: move-battery 10s linear infinite;
    }

    .g-wave:nth-child(2) {
        border-radius: 38% 46% 43% 47%;
        transform: translate(-50%, 0) rotate(-135deg);
    }

    .g-wave:nth-child(3) {
        border-radius: 42% 46% 37% 40%;
        transform: translate(-50%, 0) rotate(135deg);
    }
}

@keyframes charging {
	50% {
        box-shadow: 0 14px 28px rgba(0, 150, 136, 0.83), 0px 4px 10px rgba(9, 188, 215, 0.4);
    }
    
    95% {
        top: 5%;
        filter: hue-rotate(0deg);
        border-radius: 0 0 5px 5px;
        box-shadow: 0 14px 28px rgba(4, 188, 213, .2), 0 10px 10px rgba(9, 188, 215, 0.08);
    }
    100% {
        top: 0%;
        filter: hue-rotate(0deg);
        border-radius: 15px 15px 5px 5px;
        box-shadow: 0 14px 28px rgba(4, 188, 213, 0), 0 10px 10px rgba(9, 188, 215, 0.4);
    }
}

@keyframes move-battery {
    100% {
        transform: translate(-50%, -160px) rotate(720deg);
    }
}

</style>
:::

## 华为充电动画

::: demo
<template>
    <div class="g-container">
        <div class="g-number">98.7%</div>
        <div class="g-contrast">
            <div class="g-circle"></div>
            <ul class="g-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.g-container {
    position: relative;
    height: 400px;
    margin: auto;
}

.g-number {
    position: absolute;
    width: 300px;
    top: 27%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 32px;
    z-index: 10;
    color: #fff;
}

.g-contrast {
    filter: contrast(15) hue-rotate(0);
    height: 400px;
    background-color: #000;
    overflow: hidden;
    animation: hueRotate 10s infinite linear;

    .g-circle {
        position: relative;
        width: 300px;
        height: 300px;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
        filter: blur(8px);
        
        &::after {
            content: "";
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0);
            width: 200px;
            height: 200px;
            background-color: #00ff6f;
            border-radius: 42% 38% 62% 49% / 45%;
            animation: rotate 10s infinite linear;
        }
        
        &::before {
            content: "";
            position: absolute;
            width: 176px;
            height: 176px;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background-color: #000;
            z-index: 10;
        }
    }

    .g-bubbles {
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 100px;
        height: 40px;
        transform: translate(-50%, 0);
        border-radius: 100px 100px 0 0;
        background-color: #00ff6f;
        filter: blur(5px);

        li {
            position: absolute;
            border-radius: 50%;
            background: #00ff6f;
        }
    }
}

@for $i from 0 through 15 { 
    li:nth-child(#{$i}) {
        $width: 15 + random(15) + px;
        left: 15 + random(70) + px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: $width;
        height: $width;
        animation: moveToTop #{random(6) + 3}s ease-in-out -#{random(5000)/1000}s infinite;
    }
}

@keyframes rotate {
    50% {
        border-radius: 45% / 42% 38% 58% 49%;
    }
    100% {
        transform: translate(-50%, -50%) rotate(720deg);
    }
}

@keyframes moveToTop {
    90% {
        opacity: 1;
    }
    100% {
        opacity: .1;
        transform: translate(-50%, -180px);
    }
}

@keyframes hueRotate {
    100% {
        filter: contrast(15) hue-rotate(360deg);
    }
}
</style>
:::


## 抖音logo

::: demo
<template>
    <div class="douyin-container">
        <div class="douyin"></div>
    </div>
</template>

<style lang="scss" scoped>
.douyin-container {
    background: #000;
    padding: 100px;

    .douyin {
        position: relative;
        width: 37px;
        height: 218px;
        margin: 0 auto;
        z-index: 1;
        background: #fff;
        filter:drop-shadow(-10px -10px 0 #24f6f0) contrast(150%) brightness(110%);
        box-shadow: 11.6px 10px 0 0 #fe2d52;
        z-index: 10;
        animation: move-douyin 5s infinite ease-in;
        
        &::before {
            content: "";
            position: absolute;
            width: 100px;
            height: 100px;
            border: 37px solid #fff;
            border-top: 37px solid transparent;
            border-radius: 50%;
            top: 123px;
            left: -137px;
            transform: rotate(45deg);
            filter: drop-shadow(16px 0px 0 #fe2d52);
        }
        
        &::after {
            content: "";
            position: absolute;
            width: 140px;
            height: 140px;
            border: 30px solid #fff;
            border-right: 30px solid transparent;
            border-top: 30px solid transparent;
            border-left: 30px solid transparent;
            top: -100px;
            right: -172px;
            border-radius: 100%;
            transform: rotate(45deg);
            z-index: -10;
            filter:drop-shadow(14px 0 0 #fe2d52);
        }
    }
}


@keyframes move-douyin {
    4% {
        transform: skewX(7deg) translate(-30px);
    }
    7% {
        transform: skewX(-6deg) translate(18px);
    }
    9% {
        transform: skewX(5deg) translate(-8px);
    }
    10% {
        transform: skewX(-4deg)translate(6px);
    }
    11% {
        transform: skewX(3deg)translate(-4px);
    }
    12% {
        transform: skewX(-2deg) translate(2px);
    }
    13% {
        transform: skewX(1deg) translate(0px);
        filter:drop-shadow(-10px -10px 0 #24f6f0) contrast(120%) brightness(110%) blur(3px);
    }
    30% {
        filter:drop-shadow(-10px -10px 0 #24f6f0) contrast(150%) brightness(120%) blur(0px);
    }
}
</style>
:::

## 幽灵动画

::: demo
<template>
<div class="ghost-bg">
    <div class="ghost-container" translate="no">
        <div class="ghost"></div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.ghost-bg {
    overflow: hidden;
    background: #000;
}
.ghost-container {
    padding: 20px;
    background: #000;
    filter: blur(3px) contrast(10);
}
.ghost {
    position: relative;
    width: 80px;
    height: 120px;
    background: 
        radial-gradient(circle at 60px 40px, #000, #000 7px, transparent 7px),
        radial-gradient(circle at 40px 40px, #000, #000 7px, transparent 7px),
        radial-gradient(circle at 50px 50px, #fff, #fff);
    background-size: 100% 100%; 
    background-repeat: no-repeat;
    margin: auto;
    border-radius: 40px 40px 60px 20px;
    transform: skewX(-10deg);
    animation: move-ghost-main 2s infinite ease-out;

    &::before,
    &::after {
        content: "";
        position: absolute;
        background: #fff;
        border-radius: 50%;
    }

    &::before {
        width: 20px;
        height: 20px;
        top: 50px;
        left: -10px;
        box-shadow: 0 0 0 1px #fff;
        animation: move-ghost 2s infinite ease-in;
    }

    &::after {
        width: 30px;
        height: 25px;
        top: 95px;
        left: -10px;
        box-shadow: 0 0 0 1px #fff;
        animation: move-ghost2 2s infinite ease-in;
    }
}

@keyframes move-ghost {
    80%,
    100% {
        box-shadow: -60px 0 0 .5px rgba(255, 255, 255, .4);
    }
}

@keyframes move-ghost2 {
    80%,
    100% {
        box-shadow: -100px 0 0 .5px rgba(255, 255, 255, .2);
    }
}

@keyframes move-ghost-main {
    42% {
        transform: skewX(-10deg) translate(40px, 0);
    }
}
</style>
:::

## 毛玻璃效果

::: demo
<div class="frosted-glass-container">
    <div class="frosted-glass">毛玻璃效果</div> 
</div>

<style lang="scss" scoped>
.frosted-glass-container {
    height: 400px;
    background: url('./img/crack-img.png') no-repeat center center;

    .frosted-glass {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 50%;
        height: 200px;
        background: inherit;
        margin: 50px auto;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        font-size: 30px;
        line-height: 200px;
        color: #eee;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);

        &::after {
            position: absolute;
            content: "";
            background: inherit; 
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            filter: blur(10px);
            z-index: -1;
        }
    }
}
</style>
:::

## 聚光灯效果

::: demo
<template>
    <div class="radial-circle-bg">
        <div class="radial-circle"></div>
    </div>
</template>

<style lang="scss" scoped>
$img: './img/crack-img.png';

.radial-circle-bg {
    height: 300px;
    background-image: url($img);
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;

    .radial-circle {
        position: absolute;
        top: -100%;
        left: -100%;
        right: -100%;
        bottom: -100%;
        background: radial-gradient(circle at 50% 50%, transparent 0%, transparent 3%, rgba(0, 0, 0, .7) 3.5%, rgba(0, 0, 0, .8) 100%);
        animation: move-radial-circle 10s infinite alternate;
    }
}

@keyframes move-radial-circle {
    0% {
        transform: translateX(-10%);
    }
    100% {
        transform: translateX(10%);
    }
}
</style>
:::