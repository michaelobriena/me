var colors = require('./colors');

var Palettes = {
    _palettes: {},
    getPalette: function(name) {
       return this._palettes[name];
    },
    registerPalette: function(name, colorData) {

    }
};

module.exports = Palettes;