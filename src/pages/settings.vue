<template>
  <q-layout>

    <div id="menu-page">
      <div class="header">
        <div class="layout-padding" style="margin:60px;z-index:10">
          <q-btn-group outline class="fixed-top-left" style="margin:13px 0 0 -2px; border:none!important">
            <q-btn outline class="bg-primary" @click="debug = !debug">
              <q-item-main v-html="$t('actions.hide') + ' ' + $t('actions.debug')" v-show="debug"></q-item-main>
              <q-item-main v-html="$t('actions.show') + ' ' + $t('actions.debug')" v-show="!debug"></q-item-main>
            </q-btn>
            <q-btn outline class="bg-primary"  v-show="debug" @click="reset()" :label="$t('actions.reset')"></q-btn>
            <q-btn outline v-show="debug" class="bg-primary"  @click="ping()" :label="$t('actions.ping')"></q-btn>
            <q-btn outline round class="bg-primary" @click="$q.fullscreen.toggle()">

              <q-icon class="fa fa-fw fa-compress fa-lg" v-show="$q.fullscreen.isActive"></q-icon>
              <q-icon class="fa fa-fw fa-expand fa-lg" v-show="!$q.fullscreen.isActive"></q-icon>
            </q-btn>
          </q-btn-group>
        </div>
      </div>
      <div class="content">
        <div class="row-option" id="Test1SwitchBtn">
          <div class="row-option-label">Test1</div>
          <div class="row-option-option">
            <input type="checkbox" id="Test1Switch" />
            <label for="Test1Switch" class="toggle">Test1</label>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="menuBottom">
          <div class="menuButton roundedTop" id="MenuBtnClose" @click="$router.push('/Main')">
            <div class="buttonCaption">{{ $t('actions.close')}}</div>
          </div>
          <div class="menuButton">
          </div>
          <div class="menuButton">
          </div>
          <div class="menuButton">
          </div>
        </div>
      </div>
    </div>

    <small v-show="debug" class="fixed-top-right text-right" style="width:100%">{{ $store.state.settings.uuid }}<br/>{{ $store.state.settings.preferences.ip }}:{{ $store.state.settings.preferences.port }}</small>
    <div v-show="debug" style="position:absolute;top:0;bottom:0;right:0;margin:0 0 0 30%;width:50%">
      <div class="scroll">
        <div v-for="(setting, index) in $store.state.settings.preferences" :key="index" style="background:#ededed;padding:1em">
          <q-input
            style="font-size:1.2em"
            :value="setting"
            type="text"
            :float-label="$t('system.' + index )"
            @change="val => { $store.commit('settings/Mutator', [index, val])}"
            v-show="index != 'uuid'"
          />
        </div>
      </div>
    </div>
  </q-layout>
</template>
<script>
import common from '../components/common.vue'
export default {
  name: 'settings',
  data () {
    return {
      debug: false
    }
  },
  mounted: function () {
    this.openURL = common.openURL
    this.getUUID = common.getUUID
    this.reset = common.reset
    this.ping = common.ping
    this.defaultSettings = common.defaultSettings
  },
  methods: {

  }
}
</script>

<style>
</style>
