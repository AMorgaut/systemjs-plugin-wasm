
[![NPM version](https://badge.fury.io/js/systemjs-plugin-wasm.svg)](http://badge.fury.io/js/systemjs-plugin-wasm)
[![ISC Licensed](http://img.shields.io/badge/license-ISC-blue.svg?style=flat)](#license)

# systemjs-plugin-wasm

SystemJS plugin for loading and instanciating [Web Assembly](http://webassembly.org/) modules


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

## Usage

### With package config and an extension:

```javascript
const myApi = (await System.import('myWebAssemblyModule.wasm!')).default;

myApi.myFunction();
```

