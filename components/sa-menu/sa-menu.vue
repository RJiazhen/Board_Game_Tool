<template>
  <view class="menu">

    <!-- 环型菜单 -->
    <view class="circle-menu" :class="isActive?'activated':'unactivated'">
      <!-- 菜单边框 -->
      <view class="menu-border"> </view>
      <!-- 按钮轮盘 -->
      <view class="btn-wheel">
        <view class="btn" v-for="(btn, index) in btnList" :key="index" @click="btn.func()">
          <image class="btn-icon" :src="btn.icon" mode="aspectFit"></image>
          <text class="btn-name">{{btn.name}}</text>
        </view>
      </view>
    </view>
    <!-- 中心按钮 -->
    <view class="center-btn" :class="isActive?'activated':'unactivated'" @click="changeActive">
      <!-- 按钮背景 -->
      <view class="center-btn-bg"> </view>
      <!-- 打开按钮 -->
      <view class="btn-open">
        <view class="rect" :class="isActive?'activated':'unactivated'"> </view>
        <view class="rect" :class="isActive?'activated':'unactivated'"> </view>
        <view class="rect" :class="isActive?'activated':'unactivated'"> </view>
      </view>
      <!-- 关闭按钮 -->
      <view class="btn-close">
        <view class="rect"></view>
        <view class="rect"></view>
      </view>
    </view>
    <!-- 重置按钮弹窗 -->
    <uni-popup ref="resetPopup" type="dialog">
      <uni-popup-dialog type="warn" mode="base" content="确认重置吗？" :before-close="true" @close="closeReset"
        @confirm="confirmReset"></uni-popup-dialog>
    </uni-popup>

    <!-- 帮助按钮弹窗 -->
    <uni-popup ref="helpPopup" type="bottom" background-color="#fff">
      <uni-popup-dialog type="warn" mode="base" content="" :before-close="true" @close="closeHelp" @confirm="nextHelp">
        <view class="helpInfo">
          帮助信息
        </view>
      </uni-popup-dialog>
    </uni-popup>

  </view>
</template>

<script setup lang="ts">
  import {
    getCurrentInstance,
    ref
  } from "vue";
  import {
    useSakuraArms
  } from '@/store/sakuraArms'

  const sakuraArms = useSakuraArms()
  const cur = getCurrentInstance()

  // 当前激活状态
  const isActive = ref(false)

  // 改变激活状态
  const changeActive = () => {
    isActive.value = !isActive.value
  }

  // 环型菜单列表
  const btnList = [{
      name: '重置',
      icon: '../../static/sakura_arms/reset_icon.svg',
      func: () => {
        cur.refs.resetPopup.open()
        changeActive()
      }
    },
    {
      name: '帮助',
      icon: '../../static/sakura_arms/reset_icon.svg',
      func: () => {
        cur.refs.helpPopup.open()
        changeActive()
      }
    }
  ]

  // 重置按钮相关函数
  const closeReset = () => {
    cur.refs.resetPopup.close()
  }
  const confirmReset = () => {
    sakuraArms.resetState()
    cur.refs.resetPopup.close()
  }

  // 帮助按钮相关函数
  const closeHelp = () => {
    cur.refs.helpPopup.close()
  }
  let helpInfoCount = 0
  const nextHelp = () => {
    cur.refs.helpPopup.close()
    // if (helpInfoCount == 3) {
    //     cur.refs.helpPopup.close()
    //     helpInfoCount = 0
    // } else {
    //     helpInfoCount += 1
    //     console.log(helpInfoCount);
    // }
  }
</script>

<style scoped lang="scss">
  @import "@/common/sakuraArms.scss";
  @import "@/common/boardGameTool.scss";

  .menu {
    position: relative;

    // 环型菜单
    .circle-menu {

      &.unactivated {
        width: 0;
        height: 0;
        position: absolute;
        left: 50%;
        top: 50%;

        // 外圈边框
        .menu-border {
          display: none;
          width: 0;
          height: 0;
          background: conic-gradient(from 180deg at 50% 50%, #F0F1F2 -26.25deg, #F2D5DB 50.63deg, rgba(102, 93, 115, 0.84375) 127.5deg, rgba(120, 119, 140, 0.609447) 210deg, #B0C1D9 279.38deg, #F0F1F2 333.75deg, #F2D5DB 410.62deg);

          position: absolute;
          left: 50%;
          top: 50%;
          translate: -50% -50%;
        }

        // 按钮轮盘
        .btn-wheel {
          .btn {
            width: 0;
            height: 0;
            rotate: 180deg;

            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% -50%;

            display: flex;
            flex-direction: column;
            align-items: center;


            &:nth-child(1) {
              rotate: 0deg;
            }

            .btn-icon {
              width: 0px;
              height: 0px;
            }

            .btn-name {
              font-size: 0px;
              line-height: 0px;
            }
          }
        }
      }

      // 激活时的环型菜单
      &.activated {

        // 外圈边框
        .menu-border {
          width: $menu-border-size;
          height: $menu-border-size;
          border-radius: 50%;
          background: conic-gradient(from 180deg at 50% 50%, #F0F1F2 -26.25deg, #F2D5DB 50.63deg, rgba(102, 93, 115, 0.84375) 127.5deg, rgba(120, 119, 140, 0.609447) 210deg, #B0C1D9 279.38deg, #F0F1F2 333.75deg, #F2D5DB 410.62deg);
          position: absolute;
          left: 50%;
          top: 50%;
          translate: -50% -50%;
        }

        // 按钮轮盘
        .btn-wheel {
          width: $menu-btn-wheel-size;
          height: $menu-btn-wheel-size;
          background: #F7F8FC;
          border-radius: 50%;

          position: absolute;
          left: 50%;
          top: 50%;
          translate: -50% -50%;

          // 按钮
          .btn {
            width: $menu-btn-width;
            height: $menu-btn-height;

            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% 50px;

            display: flex;
            flex-direction: column;
            align-items: center;

            .btn-icon {
              width: $menu-btn-icon-size;
              height: $menu-btn-icon-size;
            }

            .btn-name {
              font-size: $menu-btn-name-font-size;
              line-height: $menu-btn-name-font-size;
            }

            // 将其中一个按钮旋转到对侧
            &:nth-child(1) {
              transform-origin: center -50px;
              // translate: -50% -100px;
              rotate: 180deg;
            }
          }
        }
      }
    }

    // 中心按钮
    .center-btn {
      transition: 1s all;

      // 按钮背景
      .center-btn-bg {
        width: $menu-center-btn-bg-size;
        height: $menu-center-btn-bg-size;

        background: #D3D3D3;
        border-radius: $menu-center-btn-bg-border-size;
        transform: rotate(-45deg);
      }

      // 未激活状态
      &.unactivated {
        transition: 1s all;

        // 打开菜单按钮
        .btn-open {

          .rect {

            &:nth-child(1) {
              translate: 0 $menu-btn-open-rect-translateY;
            }

            &:nth-child(3) {
              translate: 0 calc(0px - $menu-btn-open-rect-translateY);
            }
          }
        }

        // 关闭菜单按钮
        .btn-close {
          display: none;

          position: absolute;
          left: 50%;
          top: 50%;

          .rect {
            width: 0;
            height: 0;
            rotate: 180deg;

            transition: 1s all;
          }
        }
      }

      // 激活状态
      &.activated {

        // 打开菜单按钮
        .btn-open {
          animation: 1s linear reverse forwards btn-open;

          .rect {
            animation: 1s linear reverse forwards btn-open-rect;
          }
        }

        // 关闭菜单按钮
        .btn-close {
          // z-index: 1;
          width: $menu-btn-open-n-close-size;
          height: $menu-btn-open-n-close-size;

          position: absolute;
          left: 50%;
          top: 50%;
          translate: -50% -50%;

          .rect {
            // position: absolute;
            // width: $menu-btn-close-rect-width;
            // height: $menu-btn-close-rect-height;
            // border-radius: $menu-btn-open-n-close-rect-border-radius;
            // left: calc(50% - $menu-btn-close-rect-width/2);
            // top: calc(50% - $menu-btn-close-rect-height/2);

            // background: #000000;

            // transition: 1s all;
            // animation: show 1s linear infinite;

            &:nth-child(1) {

              // rotate: 45deg;
              animation: rotate1 1s linear forwards;
            }

            &:nth-child(2) {
              // rotate: -45deg;
              animation: rotate2 1s linear forwards;
            }
          }
        }
      }
    }

    .helpInfo {
      font-size: $popup-body-font-size;
    }
  }

  // 
  // 出现动画
  @keyframes show {
    100% {
      width: $menu-btn-close-rect-width;
      height: $menu-btn-close-rect-height;
      border-radius: $menu-btn-open-n-close-rect-border-radius;
      left: calc(50% - $menu-btn-close-rect-width/2);
      top: calc(50% - $menu-btn-close-rect-height/2);
    }
  }

  @keyframes rotate1 {
    100% {

      position: absolute;
      width: $menu-btn-close-rect-width;
      height: $menu-btn-close-rect-height;
      border-radius: $menu-btn-open-n-close-rect-border-radius;
      left: calc(50% - $menu-btn-close-rect-width/2);
      top: calc(50% - $menu-btn-close-rect-height/2);

      background: #000000;
      rotate: 45deg;
    }
  }

  @keyframes rotate2 {
    100% {

      position: absolute;
      width: $menu-btn-close-rect-width;
      height: $menu-btn-close-rect-height;
      border-radius: $menu-btn-open-n-close-rect-border-radius;
      left: calc(50% - $menu-btn-close-rect-width/2);
      top: calc(50% - $menu-btn-close-rect-height/2);

      background: #000000;
      rotate: -45deg;
    }
  }

  // 打开菜单按钮关键帧
  @keyframes btn-open {
    0% {
      width: $menu-btn-open-n-close-size;
      height: $menu-btn-open-n-close-size;

      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
    }

    100% {
      display: none;

      position: absolute;
      left: 50%;
      top: 50%;
    }
  }

  // 打开菜单按钮矩形关键帧
  @keyframes btn-open-rect {
    0% {
      width: $menu-btn-open-rect-width;
      height: $menu-btn-open-rect-height;
      border-radius: $menu-btn-open-n-close-rect-border-radius;
      background: #000000;

      position: absolute;
      left: calc(50% - $menu-btn-open-rect-width / 2);
      top: calc(50% - $menu-btn-open-rect-height);
    }

    100% {
      width: 0;
      height: 0;
      rotate: 180deg;
      transition: 1s all;
    }
  }
</style>
