This is the vue.js / quasar version of the webgui for apertus. 

## Just using the pre-built stuff - /dist/spa-mat

If you just want to test it out locally, download / git clone this repo and then:

```
$ cd /dist/spa-mat && $ python -m SimpleHTTPServer
```
or
```
$ cd /dist/spa-mat && php -S 127.0.0.1:8000
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

Make sure you have the latest node.js and npm installed. Seriously.  On Ubuntu this will work:

```
$ npm install -g vue
$ npm install -g quasar-cli
$ git clone git@github.com:KinoKabaret/AXIOM-WebRemote.git
$ npm install
$ quasar dev
```

You can read more about `vue-cli` here: https://github.com/vuejs/vue-cli/tree/dev/docs

## Using Downstream

To use downstream (such as in https://github.com/apertus-open-source-cinema/beta-software/tree/master/software/control_daemon/ ) use the following submodule install command from the root folder of apertus-open-source-cinema/beta-software

```
$ git submodule add -b master git@github.com:KinoKabaret/apertus-webgui.git /software/control_daemon/

```

## Contributing

We recommend the following. It saves a lot of git headaches when working in a team.

```
$ git config --global branch.autosetuprebase always

// or if you forget to do it at the beginning, you can do this at any time: 

$ git config branch.YOUR_BRANCH_NAME.rebase true

```

Please fork this repo and make pull requests.

## License
GPL-3
