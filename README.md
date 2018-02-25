This is the vue.js / quasar version of the webgui for apertus. You will need a modern version of node.js, npm and quasar to use and build.

We recommend installing the vue development plugin for chrome or firefox. To contribute, please fork this repository and make pull requests against the dev branch.

We also recommend the following. It saves a lot of git headaches.
```
$ git config --global branch.autosetuprebase always

or

$ git config branch.YOUR_BRANCH_NAME.rebase true

```

To use downstream (such as in https://github.com/apertus-open-source-cinema/beta-software/tree/master/software/control_daemon/ ) use the following submodule install command from the root folder of apertus-open-source-cinema/beta-software

```
$ git submodule add -b master git@github.com:KinoKabaret/apertus-webgui.git /software/control_daemon/

// or if you forget to do it at the beginning, you can do this at any time: 

$ git config branch.dev.rebase true

```
To get your development setup ready (I assume you have latest stable node.js and npm):

```
$ npm install -g vue
$ npm install -g quasar-cli
``` 
To get it working:

```
$ git clone 
$ npm install

```

You can read more about `vue-cli` here: https://github.com/vuejs/vue-cli/tree/dev/docs

TODO: implement testing
