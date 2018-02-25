import {
  LocalStorage
} from 'quasar'
// import common from '../../components/common.vue'
import axios from 'axios'

export const Mutator = (state, payload) => {
  // payload : [index, value]
  // this.setAxiom = common.setAxiom
  state.preferences[payload[0]] = payload[1]
  LocalStorage.set(payload[0], payload[1])
  // this.setAxiom(payload[0], payload[1])
  let URL = state.prefix +
    state.preferences.ip +
    ':' +
    state.preferences.port +
    '/api/' +
    state.api +
    '/settings'
  axios({
    method: 'post',
    url: URL,
    data: {
      id: payload[0],
      value: payload[1]
    }
  })
    .then(function (response) {
      console.log(payload[0] + ' ' + response.data.res)
    })
}

// we do these because they are not part of the general user interface
export const fullScreen = (state, payload) => {
  state.fullscreen = payload
  LocalStorage.set('fullscreen', payload)
}
export const setUUID = (state, payload) => {
  state.uuid = payload
  LocalStorage.set('uuid', payload)
}

/* About the Mutator

      This is an example from settings.vue
      <div class="row" v-for="(setting, index) in $store.state.settings.preferences" :key="index">
        <q-input
          hide-underline
          :value="setting"
          type="text"
          :float-label="$t('system.' + index )"
          @keyup.enter=":value => { $store.commit('settings/Mutator', [index, :value])}"
          @change="val => { $store.commit('settings/Mutator', [index, val])}"
        />
      </div>

 */
