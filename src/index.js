import FamousEngine from 'famous/core/FamousEngine';
import DOMElement from 'famous/dom-renderables/DOMElement';
import {colors} from './helpers/colors';
import {Tentacles} from './sandbox/Tentacles';

FamousEngine.init();
var root = FamousEngine.createScene().addChild();

new DOMElement(root, {
    properties: {
        backgroundColor: '#303030',
        transformStyle: 'flat',
        overflow: 'hidden'
    }
});

var inBetween = root.addChild();
new DOMElement(inBetween, {
    properties: {
        transformStyle: 'preserve-3d',
        perspective: '2000px'
    }
});

var appRoot = inBetween.addChild();

appRoot.addChild(new Tentacles());


