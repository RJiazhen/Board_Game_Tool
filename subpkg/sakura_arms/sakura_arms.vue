<template>
  <view class="container">
    <!-- 使用说明弹窗 -->
    <!-- FIXME 后续制作自己的使用说明弹出层 -->
    <!-- <uni-popup ref="popup" type="top" mask-background-color="rgba(35, 35, 35, 0.8)">
      <view class="help-container">
        <view class="help">
          <view><text class="bold" style="font-size: 20px;">【长按重置按钮</text>
            <uni-icons class="reset-icon" type="loop" size="25px" color="#fff" /><text class="bold"
              style="font-size: 20px;">可再次查看本帮助】</text>
          </view>
          <view><text class="bold">1. 基本动作</text><text>：直接点击对应按钮</text></view>
          <view><text class="bold">2. 移动token</text><text>：先点击来源区域，再点击目标区域</text></view>
          <view><text class="bold">3. 打出付与牌</text><text>：点击“打出付与牌”的＋号按钮，再点击虚或装区域移动token，最后再点击 √ 确认完成</text></view>
          <view><text class="bold">4. 结束回合</text><text>：直接点击“结束回合”，所有付与牌会-1</text></view>
          <view><text class="bold">5. 重置游戏面板</text><text>：点击左侧中央重置按钮</text>

            <uni-icons class="reset-icon" type="loop" size="25px" color="#fff" />，<text>并再次确认</text>
          </view>
          <view class="feedback">
            <text>如有问题和建议可以点击下方按钮进行反馈</text>
            <button type="primary" open-type="feedback" size="mini" plain="true">意见反馈</button>
          </view>
          <view class="close-tip"><text class="bold">点击空白区域关闭说明</text></view>
        </view>
      </view>
    </uni-popup> -->
    <!-- 重置按钮 -->
    <uni-icons class="reset" type="loop" @longpress="showHelp" size="50px"></uni-icons>
    <!-- 菜单 -->
    <view class="menu"></view>
    <!-- 游戏版图 -->
    <view class="game-board">
      <!-- 玩家二 -->
      <view class="player1">
        <SA_player TopAreaName="player1"></SA_player>
      </view>
      <!-- 公共区域 -->
      <!-- <SA_shared TopAreaName="shared"></SA_shared> -->
      <!-- 玩家一 -->
      <!-- <SA_player TopAreaName="player2"></SA_player> -->
    </view>
  </view>
</template>

<script setup lang="ts">
  import {
    onMounted,
  } from "vue";
  import {
    useSakuraArms
  } from '@/store/sakura_arms.js'
  const sakuraArms = useSakuraArms()
  // 开启分享功能
  onMounted(() => {
    uni.showShareMenu({})
  })

  // 显示帮助菜单
  let toShowHelp = true

  // 显示帮助
  const showHelp = () => {
    // const popup = ref(null)
    // console.log(popup);
    // popup.open()
    // console.log($refs);
    // app.$refs.popup.open()
  }

  // 重置相关数值
  const reset = () => {
    uni.showModal({
      content: '是否重置所有数值？',
      success: (res) => { // success是只要接口调用成功都会执行
        if (res.confirm) { // res.confirm才是点击确认才执行
          sakuraArms.resetState()
        }
      }
    })
  }

  // 加载时从本地存储获取数据
  onMounted(() => {
    // 获取游戏面板数据
    sakuraArms.getFromStorage()
    // 获取是否显示帮助参数
    toShowHelp = uni.getStorageSync('sa_toShowHelp').length != 0 ?
      JSON.parse(uni.getStorageSync('sa_toShowHelp')) :
      toShowHelp
    // 判断是否显示帮助
    if (toShowHelp) {
      showHelp()
      uni.setStorageSync('sa_toShowHelp', JSON.stringify(false))
    }
  })
</script>

<style lang="scss">
  .container {
    height: 100vh;
    position: fixed;
    background-color: #dddddd;

    // 帮助说明
    .help-container {
      // position: absolute;
      // left: 50%;
      transform: translateX(50px) translateY(20px);
      width: calc(100% - 100px);


      .help {
        color: #fff;
        font-size: 18px;
        text-align: justify;

        view {
          margin-top: 10px;
          align-items: center;

          .bold {
            font-weight: bold;
          }

          text {
            line-height: 100%;

          }

          .reset-icon {
            display: inline-block;
          }


        }

        // 反馈说明
        .feedback {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          text {
            font-size: 15px;
          }

          button {
            margin-top: 5px;
          }
        }

        // 关闭提示
        .close-tip {
          margin-top: 20px;
          display: flex;
          justify-content: center;

          text {}
        }


      }
    }

    // 重置按钮
    .reset {
      position: absolute;
      top: 50%;
      left: -10px;
      transform: translateY(-50%);
      z-index: 999999;
    }

    .menu {}

    // 游戏版图
    .game-board {
      height: 100%;
      width: 100%;

      .player1 {
        height: 40vh;
        transform: rotate(180deg);
      }

      .player2 {
        height: 40vh;
      }

      .shared {
        height: 20vh;
      }

    }
  }
</style>
