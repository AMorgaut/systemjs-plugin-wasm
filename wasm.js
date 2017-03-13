console.log('ko');

exports.build = false;

// Note: Sourcemap is not yet supported by WebAssembly tooling
// @see https://github.com/WebAssembly/design/blob/master/Tooling.md

exports.fetch = function(load) {
    return fetch(load.address).then(function (response) {
        load.metadata.source = response.arrayBuffer();
        return '';
    });
};

exports.instantiate = function(load) {
  return WebAssembly.instanciate(load.metadata.source).instance.exports;
};
