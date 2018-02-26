<script>
import {
  uid,
  openURL
} from 'quasar'

export default {
  openURL,
  ping: function () {
    let _this = this
    let STORE = this.$store.state.settings
    let URL = STORE.prefix +
      STORE.preferences.ip +
      ':' +
      STORE.preferences.port +
      '/api/' +
      STORE.api +
      '/ping'
    this.$axios({
      method: 'get',
      url: URL
    })
      .then(function (response) {
        _this.$q.notify({
          message: _this.$t('actions.' + response.data.res),
          timeout: 2000,
          color: 'primary',
          textColor: 'black',
          position: 'left',
          icon: 'fa-wifi fa-lg'
        })
      })
  },
  getUUID: function () {
    let UUID = this.$q.localStorage.get.item('uuid')
    if (UUID == null) {
      UUID = uid()
    }
    this.$store.commit('settings/setUUID', UUID)
  },
  reset: function () {
    this.$q.localStorage.clear()
    window.location = '/'
  },
  sendSettings (settingName, value) {
    console.log('sending')
    this.settings[settingName] = value
    alert(this.settings[settingName])
    /*
    this.axios({
      method: 'post',
      url: '',
      data: {
        id: settingName,
        value: value,
        uuid: this.uuid
      }
    })
      .then(function (response) {
        // toast
        // set localStorage
      })
    /* // from original

      var JSONObject = {
          id: settingName,
          value: value
      };

      $.ajax({
        url: 'http://' + this.settings.ip + '/api/v1/settings',
        type: 'PUT',
        data: JSON.stringify(JSONObject),
        crossDomain: true,
        dataType: 'json',
        success: function (responseData, textStatus, jqXHR) {
            console.log(responseData);
        },
     */
  }
}
</script>
