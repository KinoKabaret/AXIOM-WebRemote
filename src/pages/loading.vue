<template>
  <div>
    <div class="loader absolute-center" style="height:75%" v-show="!msg">
      <img class="logo" src="~assets/AXIOM_Logo_Trans_Partial.png"/>
      <svg class="loading" width="200" height="200" percent="75">
        <circle class="ring" cx="95" cy="95" r="22.5" transform="rotate(-90, 95, 95)">°</circle>
      </svg>
    </div>
    <small class="fixed-bottom text-center" style="width:100%" v-html="$store.state.settings.uuid + '<br/>' + $store.state.settings.preferences.ip + ':' + $store.state.settings.preferences.port"></small>
  </div>
</template>

<script>
// import common from '../components/common.vue'

export default {
  name: 'loading',
  percent: String,
  data () {
    return {
      msg: ''
    }
  },
  mounted: function () {
    // common.defaultSettings()
    this.$nextTick(function () {
      // ping the apiserver
      // copy settings to state
      let _this = this
      setTimeout(function () {
        _this.$router.push('/Main')
      }, 2000)
    })
  }
}
</script>

<style lang="less">
  p {
    color:#f4875a;
  }
  small {
    font-size: 0.8rem;
  }
  /* svg loading concept hijacked from https://codepen.io/kyledws/pen/Gvelt/ and modded by D.C. */

  .loader {
    .logo {
      position:absolute;
      top:100px;
      left:-180px;
      width: 360px;
      height: 60px;
    }
    svg.loading {
      position:absolute;
      top:35px;
      left:-27px;
      circle.ring {
        stroke: #f4875a;
        fill: transparent;
        stroke-width: 9.5px;
        stroke-dasharray: 150;
        stroke-dashoffset: 150;
        -webkit-animation-play-state: running;
        -moz-transform: rotate(-89deg) translateX(-190px);
      }
    }
    .loader, svg.loading[percent='75'] .ring {
      -webkit-animation: loadSpinner 1s ease-in forwards;
      animation: loadSpinner 1s ease-in forwards;
    }
  }
  @keyframes loadSpinner {
    20% {
      stroke-dashoffset: 145;
    }
    50% {
      stroke-dashoffset: 120;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
</style>
