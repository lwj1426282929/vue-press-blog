# loading效果

## 打点

::: demo
<template>
    <p class="loading-text">加载中</p>
</template>

<style lang="scss" scoped>
.loading-text {
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);  
    font-size: 20px;
    line-height: 20px;

    &::after {
        content: "";
        position: absolute;
        animation: dot 3s infinite steps(3, start);
    }
}

@keyframes dot {
    33.33% {
        content: ".";
    }
    66.67% {
        content: "..";
    }
    100% {
        content: "...";
    }
}
</style>
:::

## 穿梭放大

::: demo
<template>
    <div class="g-container">
        <div class="blur">
            <div class="g-first"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
            <div class="g-ball"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$count: 7;

.g-container {
    background: #000;

    .blur {
        filter: blur(4px) contrast(8);
        height: 100px;
        position: relative;
    }

    .g-ball,
    .g-first {
        position: absolute;
        top:50%;
        left: 50%;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
        transform: translate(-700%, 0);
        opacity: 0;
    }
}


@for $i from 0 through $count { 
    .g-ball:nth-child(#{$i}) {
        animation: move 3.5s infinite #{$i * 0.2 + 0.1}s linear;
    }
}

.g-first {
    animation: scaleMove 3.5s infinite linear;
}

@keyframes move {
    25% {
        opacity: 1;
        transform: translate(-20px, 0);
    }
    50% {
        opacity: 1;
        transform: translate(20px, 0);
    }
    75%,
    100% {
        opacity: 0;
        transform: translate(700%, 0);
    }
}


@keyframes scaleMove {
    25% {
        opacity: 1;
        transform: translate(-20px, 0);
    }
    35% {
        opacity: 1;
        transform: scale(1);
    }
    70% {
        opacity: 1;
        transform: translate(20px, 0) scale(2);
    }
    90%,
    100% {
        opacity: 0;
        transform: translate(20px, 0) scale(1);
    }
}
</style>
:::

## 线条遮罩loading

::: demo
<template>
    <div class="loading-circle"></div>
</template>

<style lang="scss" scoped>
.loading-circle {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: auto;
    transform: rotate(360deg);
    animation: rotate 45s infinite linear;

    &::before {
        position: absolute;
        content: "";
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        box-sizing: border-box;
        border-radius: 50%;
        border-top: 3px solid #409eff;
        border-left: 3px solid #409eff;
        border-bottom: 3px solid transparent;
        border-right: 3px solid transparent;
        transform: rotate(720deg);
        animation: rotate 3s infinite ease-out;
    }

    &::after {
        position: absolute;
        content: "";
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        box-sizing: border-box;
        border-radius: 50%;
        border-bottom: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 7px solid #fff;
        border-left: 7px solid #fff;
        transform: rotate(720deg);
        animation: rotate 3s infinite ease-in-out;
    }
}


@keyframes rotate {
    100% {
        transform: rotate(0deg);
    }
}
</style>
:::