# loading效果

## 打点

::: demo
<template>
    <p class="loading">加载中</p>
</template>

<style lang="scss" scoped>
.loading {
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