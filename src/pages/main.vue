<template>
  <q-layout>
    <div id="home-page">
      <img src="/statics/600px-Axiom-beta-webgui-concept-01.jpg" style="width:100%;position:absolute;top:0;left:0;z-index:1;display:none"/>
      <div class="header" style="opacity:1">
        <div class="menu">
          <div class="menuButton roundedBottom" id="ShutterBtn">
            <div class="buttonCaption">{{ $t('system.shutter') }}</div>
            <div class="Home-Value" id="shutterValue" v-html="$store.state.settings.preferences.shutter"></div>
          </div>
          <div class="menuButton roundedBottom" id="ISOBtn">
            <div class="buttonCaption">{{ $t('system.iso') }}</div>
            <div class="Home-Value" id="isoValue" v-html="$store.state.settings.preferences.iso"></div>
          </div>
          <div class="menuButton roundedBottom">
            <div class="buttonCaption">{{ $t('system.hdr') }}</div>
            <div class="Home-Value" id="hdrValue" v-html="$store.state.settings.preferences.hdr + '<small>' + $t('system.stops') + '</small>'"></div>
          </div>
          <div class="menuButton roundedBottom">
            <div class="buttonCaption">{{ $t('system.guides') }}</div>
            <div class="Home-Value" id="guidesValue" v-html="$store.state.settings.preferences.guides">
            </div>
          </div>
        </div>
      </div>
      <div class="content">
            <div class="content-box" style="opacity:0.8">
              <div class="box">?</div>
              <div class="histogram">
              </div>
              <div class="pageIndicator">
                <div class="dot dot-active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          </div>
      <div class="footer">
        <div class="menuBottom">
          <div class="menuButton roundedTop" id="MenuBtn" @click="$router.push('/Settings')">
            <div class="buttonCaption" style="font-size: 1.8rem; padding-bottom:0rem;color:#fdfdfd">
              <b v-html="$t('system.menu')"></b>
              <br />
            </div>
          </div>
          <div class="menuButton roundedTop">
            <div class="Home-Value" v-html="$store.state.settings.preferences.colour"></div>
            <div class="buttonCaption">{{ $t('system.colour') }}</div>
          </div>
          <div class="menuButton roundedTop" id="fpsValue">
            <div class="Home-Value" v-html="$store.state.settings.preferences.fps"></div>
            <div class="buttonCaption">{{ $t('system.fps') }}</div>
          </div>
          <div class="menuButton roundedTop">
            <div class="Home-Value" v-html="$store.state.settings.preferences.wb"></div>
            <div class="buttonCaption">{{ $t('system.wb') }}</div>
          </div>
        </div>
      </div>
    </div>

    <div id="iso-page">
      <div class="header">
        <div class="menu"></div>
      </div>
      <div class="content">
        <div class="row-option menuButton" id="ISOBtn200">
          <div class="row-option-item">ISO 200</div>
        </div>
        <div class="row-option menuButton" id="ISOBtn400">
          <div class="row-option-item">ISO 400</div>
        </div>
        <div class="row-option menuButton" id="ISOBtn800">
          <div class="row-option-item">ISO 800</div>
        </div>
      </div>
      <div class="footer">
        <div class="menuBottom">
          <div class="menuButton menuButtonInverted" id="ISOMenuBtnClose">
            <div class="buttonCaption roundedTop">Close</div>
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
    <div id="shutter-preferences-page">
      <div class="header">
        <div class="menu"></div>
      </div>
      <div class="content">
        <div class="RadioBtn-label">Shutter Values:</div>
        <div class="radio-group">
          <input type="radio" id="option-one" name="selector">
          <label for="option-one" class="radiogrp">Fractions</label><input type="radio" id="option-two" name="selector"><label for="option-two" class="radiogrp">Degrees</label><input type="radio" id="option-three" name="selector"><label for="option-three" class="radiogrp">Percentages</label>
        </div>
      </div>
      <div class="footer">
        <div class="menuBottom">
          <div class="menuButton roundedTop" id="ShutterPreferencesCloseBtn">
            <div class="buttonCaption">Close</div>
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
    <div id="shutter-page">
      <div class="header">
        <div class="menu">
          <div class="menuButton roundedBottom" id="ShutterPreset1Btn">
            <div class="buttonCaption">P1:
              <div class="Value">empty</div>
            </div>
          </div>
          <div class="menuButton roundedBottom" id="ShutterPresetBtn1_100">
            <div class="buttonCaption">P2: 1/100</div>
          </div>
          <div class="menuButton roundedBottom" id="ShutterPresetBtn1_200">
            <div class="buttonCaption">P3:
              <div class="Value">1/200</div>
            </div>
          </div>
          <div class="menuButton roundedBottom" id="ShutterIncEV">
            <div class="buttonCaption" id="">+ 1/3 EV</div>
          </div>

        </div>
      </div>
      <div class="content">
        <div class="coloumn-flex-layout">
          <div id="ShutterBtnList"></div>
          <div class="" style="flex-grow: 1;">
            <div class="menuButton roundedBottom roundedTop" id="SetPresetBtn">Set Preset</div>
            <br />
            <div class="menuButton roundedBottom roundedTop" id="ShutterPreferencesBtn">Preferences</div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer">
          <div class="menuBottom">
            <div class="menuButton roundedTop" id="ShutterMenuBtnClose">
              <div class="buttonCaption">Close</div>
            </div>
            <div class="menuButton roundedTop" id="ShutterSetAndCloseBtn">
              <div class="buttonCaption">Set &amp; Close:
                <div class="Value" id="ShutterSetAndCloseValue">Loading...</div>
              </div>
            </div>

            <div class="menuButton roundedTop" id="ShutterCustomBtn">
              <div class="buttonCaption">Custom Value</div>
            </div>
            <div class="menuButton roundedTop" id="ShutterDecEV">
              <div class="buttonCaption">- 1/3 EV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
