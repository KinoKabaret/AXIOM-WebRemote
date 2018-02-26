![AXIOM](https://raw.githubusercontent.com/KinoKabaret/AXIOM-WebRemote/master/src/assets/AXIOM_Logo_Trans.png)

This is the vue.js / quasar version of the webgui for APERTUS° AXIOM BETA.

## Just use the pre-built stuff - /dist/spa-mat

If you just want to test it out locally, download / git clone this repo and then:

```
$ cd AXIOM-WebRemote/dist/spa-mat && python -m SimpleHTTPServer
```
or
```
$ cd AXIOM-WebRemote/dist/spa-mat && php -S 127.0.0.1:8000
```

**WARNING:** You can't just plop the built html into a browser with the "file://" protocol - we're not in the 90's anymore. This is very important.

**FYI:** This is intended for modern browsers, I have tested only on Chrome / Mac.

## Running the DEV API Server

``` 
$ cd dist/spa-mat
$ npm install 
$ node app.js
```

It might run on older versions of node, but I used node v9.4.0 to build and run this project. Run `node --version` to find out which one you are using - and you should really update it. The normal repos for Ubuntu will always provide very outdated packages. Pick something here to get it to work on your system: https://nodejs.org/en/download/

```
# Example for Ubuntu
$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

## Building the QUASAR Package

Make sure you have the latest node.js and npm installed. Seriously.  On Ubuntu this will work (I know because I used these instructions to build a VM using a fresh Ubuntu Mint 16.4.3):

```
$ npm install -g vue
$ npm install -g quasar-cli
$ git clone git@github.com:KinoKabaret/AXIOM-WebRemote.git
$ cd AXIOM-WebRemote
$ npm install
$ cd api
$ npm install && node app.js
$ cd ..
$ quasar dev
```

## Using Downstream

To use downstream (such as in https://github.com/apertus-open-source-cinema/beta-software/tree/master/software/control_daemon/ ) use the following submodule install command from the root folder of apertus-open-source-cinema/beta-software

```
$ git submodule add -b master git@github.com:KinoKabaret/apertus-webgui.git /software/control_daemon/

```

## Contributing

We recommend the following. It saves a lot of git headaches when working in a team. To contribute code suggestions, please fork this repo and make pull requests. If you choose to file issues, please be specific about platform and reproducing your issues.

```
$ git config --global branch.autosetuprebase always

// or if you forget to do it at the beginning, you can do this at any time: 

$ git config branch.YOUR_BRANCH_NAME.rebase true

```

You can read more about `vue-cli` here: https://github.com/vuejs/vue-cli/tree/dev/docs

## Todo
- [X] Create a VM for web development (available now on Syncthing)
- [ ] Create a VM for AXIOM development
- [ ] Create a ["Dictionary Importer"](https://github.com/KinoKabaret/AXIOM-WebRemote/issues/5)
- [ ] Finish the internal routes for different settings
- [ ] Pipe all events into a "console" wrapper in the DEBUG section
- [ ] Integrate websocket connectivity or regular polling of the Camera to get status updates
- [ ] Show things like battery, storage etc.
- [ ] Add Histogram Interpreter (needs websocket)
- [ ] Make a test-runner

## License
This code is ©D.C. Thompson 2018 and licensed under GPL-3. Development sponsored by the [KINOÏT Platform](https://kinokabaret.com) and using the utterly amazing [Quasar Framework](http://quasar-framework.org/).

