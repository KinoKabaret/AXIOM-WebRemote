<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import common from './components/common.vue'

export default {
  name: 'App',
  watch: {
    '$q.fullscreen.isActive' (val) {
      val ? this.$store.commit('settings/fullScreen', 'true') : this.$store.commit('settings/fullScreen', 'false')
    }
  },
  mounted: function () {
    this.getUUID = common.getUUID
    this.$nextTick(function () {
      let localStorage = this.$q.localStorage.get.all()
      console.info(localStorage)
      for (const key of Object.keys(localStorage)) {
        this.$store.commit('settings/Mutator', [key, localStorage[key]])
        if (key === 'fullscreen' && localStorage[key] === 'true') {
          let _this = this
          setTimeout(function () {
            // This probably will never work, but we try.
            _this.$q.fullscreen.request()
            _this = null
          }, 50)
        }
      }
      this.getUUID()
    })
  },
  methods: {

  }
}
</script>

<style lang="less">
  @font-face {
    font-family: 'Titillium';
    src: url('/statics/fonts/titillium-regular.otf') format('opentype'),
      url('/statics/fonts/titillium-regular-webfont.woff2') format('woff2'),
      url('/statics/fonts/titillium-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  html,
  body {
    background-color:#d5d5d5;
    -webkit-background-size: inherit;
    background-size: inherit;
    height: 100%;
    width: 100%;
    font-family: 'Titillium';
    margin: 0;
    padding: 0;
    border: 0;

    /* Disable text selection */
    user-select: none;
  }
  /* Header
-----------------------------------------------------------------------------*/

  .header {
    width: 100%;
    height: 17%;
    position: fixed;
    top: 0;
    z-index: 10;
  }
  /* Middle
-----------------------------------------------------------------------------*/

  .content {
    /* padding-top: 0 0 .625em; */
    position: fixed;
    width: 100%;
    /*overflow:auto;*/
    top: 17%;
    bottom: 17%;
  }
  /* Footer
-----------------------------------------------------------------------------*/

  .footer {
    width: 100%;
    height: 17%;
    position: fixed;
    bottom: 0;
  }

  #serverIP{
    margin-bottom: 2em;
  }

  .testOutput {
    color: red;
  }

  .demo {
    color: blue;
  }

  .lightText{
    color: white;
  }

  .label{
    margin-right: 1em;
    width: 10em;
  }

  .content-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    z-index: -10;
  }

  .box {
    /* margin-left: 2em; */
    /* padding: 1em; */
    /* position: absolute; */
    /* left: 5%;
    top: 45%; */
    width: 1.8em;
    height: 1.8em;
    background-color: white;
    border-radius: .3125em;
    border: .1em solid #232323;
    text-align: center;
    color: #232323;
    /* flex-grow: 2; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0 0 16px;
    font-size: 1.9rem;
    font-weight: 600;
  }
  .histogram {
    height:6em;
    width:14em;
    border:1px black solid;
    background:#fefefe;
    margin:20% 20% 20% 30%;
  }

  .dot {
    width: 1em;
    height: 1em;
    background: #eeeeee;
    border-radius: 1em;
    margin: 0.2em;
  }

  .dot-active{
    background-color: black;
  }

  .pageIndicator {
    display: inline-flex;
    /* flex-grow: 1; */
    margin-left: auto;
    padding: 1em;
  }
  .coloumn-flex-layout {
    display: flex;
    height: 100%;
  }
  /* .point-a {
      margin: 1em auto;
      padding: 1em;
      position: absolute;
      right: 5%;
      top: 45%;
      width: .015em auto;
      height: .015em auto;
      background-color: white;
      border-radius: 3em;
  }

  .point-b {
      margin: 1em auto;
      padding: 1em;
      position: absolute;
      right: 7%;
      top: 45%;
      width: .015em auto;
      height: .015em auto;
      background-color: white;
      border-radius: 3em;
  }

  .point-c {
      margin: 1em auto;
      padding: 1em;
      position: absolute;
      right: 9%;
      top: 45%;
      width: .015em auto;
      height: .015em auto;
      background-color: white;
      border-radius: 3em;
  } */
  small {
    font-size:0.7em!important;
    margin:0.1em 0 0 0.1em;
  }
  .menu {
    display: flex;
    /*height: 3rem;*/
  }
  .menuBottom {
    display: flex;
    height: 100%;
    align-items: flex-end;
  }
  .menuButton {
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 0.5em;
    margin-right: 0.5em;
    text-align: center;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    background-color:#3D3B39;
    color:#d5d5d5;
  }
  .RadioBtn-label{
    display:inline-block;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
  input[type=radio] {
    position: absolute;
    visibility: hidden;
    display: none;
  }
  label.radiogrp {
    color: #3D3B39;
    display: inline-block;
    cursor: pointer;
    font-weight: bold;
    padding: 0.5rem 2rem;
  }
  input[type=radio]:checked + label.radiogrp{
    color: #d5d5d5;
    background: #3D3B39;
  }
  label.radiogrp + input[type=radio] + label.radiogrp {
    border-left: solid 3px #3D3B39;
  }
  .radio-group {
    border: solid 3px #3D3B39;
    display: inline-block;
    border-radius: 0.5rem;
    overflow: hidden;
    top: 0.8rem;
    position: relative;
    margin-left: 1rem;
  }
  .menuButtonInverted {
    /* align-items: flex-end; */
    /*height: 75%;*/
    margin-top: auto;
    font-size: 1rem;
    justify-content: center;
  }
  .menuButton:active {
    background-color:#FA8756;
    color: #3D3B39;
  }
  .menuButton-currentvalue  {
    background-color:#7ebcc6 !important;
    color: #171615 !important;
  }
  .roundedTop {
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    /*margin-bottom: -8px;
    padding-bottom: 20px;*/
    padding-top: 5px;
  }
  .roundedBottom {
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    /*margin-bottom: -8px;
    padding-bottom: 20px;*/
    padding-bottom: 5px;
  }
  .Value {
    display:inline;
  }
  .Home-Value {
    background: white;
    color:#3D3B39;
    font-size: 2.5rem;
    /*margin-top:0.5rem;
    height: 60%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
  }

  .buttonCaption {
    /*background: #3D3B39;
    color:#d5d5d5;*/
    margin:0.5rem;
    font-weight: bold;
    font-size: 1.4rem;
    /* height: 1.7em; */
    /* line-height: 1.7em; */
    /* flex-grow: 1; */
  }

  #ShutterBtnList {
    overflow: auto;
    flex-grow: 1;

  }

  .buttonIcons {
    width: 100%;
    height: 100%;
    align-self: center;
    object-fit: contain;
  }
  #menu-page{
  }
  #shutter-page {
    display: none;
  }
  #iso-page {
    display: none;
  }
  #shutter-preferences-page {
    display: none;
  }
  .row-option{
    background:white;
    color: #3D3B39;
    text-align: left;
    border-radius: 0.2em;
    padding:0.2rem;
    margin:0.5rem;
    z-index: -10;
  }
  .row-option:active {
    color:#3D3B39;
    background-color: #FA8756;
  }
  .row-option-label{
    display:inline;
    overflow:auto;
  }
  .row-option-option{
    float: right;
  }
  .row-option-item {
    text-align: center;
    font-size: 1.1rem;
  }
  input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label.toggle {
    cursor: pointer;
    text-indent: -9999px;
    /*width: 90px;
      height: 50px;
      border-radius: 100px;*/
    width: 2.2rem;
    height: 1.1rem;
    border-radius: 3rem;
    background: grey;
    display: inline-block;
    position: relative;
    margin:0.2rem;
  }

  label.toggle:after {
    content: '';
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: 0.9rem;
    height: 0.9rem;
    background: #ffffff;
    border-radius: 0.9rem;
    transition: 0.3s;
  }

  input:checked + label {
    background: #FA8756;
  }

  input:checked + label:after {
    left: calc(100% - 0.1rem);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 0.8rem;
  }
</style>
