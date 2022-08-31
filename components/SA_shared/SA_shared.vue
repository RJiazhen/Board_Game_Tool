<template>
  <view class="shared">
    <view class="distance" data-region="distance">
      <text class="area-title">距：</text>
      <text class="sakura-token-count">{{shared.distance}}</text>
      <text class="sakura-token-limit">/{{shared.distance_limit}}</text>
    </view>
    <view class="shadow" data-region="shadow">
      <text class="area-title">虚：</text>
      <text class="sakura-token-count">{{shared.shadow}}</text>
      <text class="sakura-token-limit">/{{shared.shadow_limit}}</text>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from "vuex"
  export default {
    name: "SA_shared",
    data() {
      return {
        from: '',
        to: ''
      }
    },
    computed: {
      ...mapState('m_sa', ['shared'])
    },
    methods: {
      ...mapMutations('m_sa', ['moveSakuraToken'])
    }
  }
</script>

<style lang="scss">

</style>
