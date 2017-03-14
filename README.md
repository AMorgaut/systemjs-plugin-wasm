
[![NPM version](https://badge.fury.io/js/systemjs-plugin-wasm.svg)](http://badge.fury.io/js/systemjs-plugin-wasm)
[![ISC Licensed](http://img.shields.io/badge/license-ISC-blue.svg?style=flat)](#license)

# systemjs-plugin-wasm

SystemJS plugin for loading and instanciating [Web Assembly](http://webassembly.org/) modules providing native like performances.

Should Work with 

* lastest Firefox (52) and Chrome (57) releases 
* lastest Opera via the `#enable-webassembly` flag
* upcoming MS Edge via the "Experimental JavaScript Features flag"

See [Can I Use Web Assembly](http://caniuse.com/#feat=wasm)

## Usage

### ES6 Static import

Via jspm or Babel + [babel plugin es2015-modules-systemjs](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-systemjs) 

```javascript
import myApi from 'myWebAssemblyModule.wasm!';

myApi.myFunction();
```

### Dynamic Import

```javascript
const myApi = (await System.import('myWebAssemblyModule.wasm!')).default;

myApi.myFunction();
```
## Installation

### npm

```
  npm install systemjs-plugin-wasm
```

### jspm

```
jspm install wasm
```

## Configuration

Create a map configuration to the plugin:

```javascript
System.config({
  map: {
    'wasm': 'node_modules/systemjs-plugin-wasm/wasm.js'
  }
})
```

