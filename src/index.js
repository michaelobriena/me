import FamousEngine from 'famous/core/FamousEngine';
import MountPoint from 'famous/components/MountPoint';
import Align from 'famous/components/Align';
import Size from 'famous/components/Size';
import DOMElement from 'famous/dom-renderables/DOMElement';
import {Tentacles} from './sandbox/Tentacles';
import {Logo} from './logo/';
import {Sidebar} from './sidebar/';

FamousEngine.init();
var root = FamousEngine.createScene().addChild();

new DOMElement(root, {
    properties: {
        backgroundColor: '#212121',
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

var logoNode = root.addChild();
logoNode.setOrigin(.5, .5);
var logoAlign = new Align(logoNode);
logoAlign.set(.5, .5);
var logoMountPoint = new MountPoint(logoNode);
logoMountPoint.set(.5, .5);
var logoSize = new Size(logoNode);
logoSize.setAbsolute(300, 70, 0);
logoNode.setSizeMode(1, 1, 1);
logoNode.addChild(new Logo());

setTimeout(function() {
    logoAlign.set(.05, .05, 0, {curve: 'easeOut', duration: 2000});
    logoMountPoint.set(0, 0, 0, {curve: 'easeOut', duration: 2000});
    logoSize.setAbsolute(50, 70, 0, {curve: 'easeOut', duration: 2000});
}, 3000);

appRoot.addChild(new Tentacles());

root.addChild(new Sidebar())

var JITTER = root.addChild();
JITTER.setSizeMode(1, 1, 1);
JITTER.setAbsoluteSize(1, 1, 1)
var el = new DOMElement(JITTER, {content: ' '});
var id = JITTER.addComponent({
    onUpdate: function(time) {
        JITTER.setPosition(3000 + time % 100, 0, -40000);
        if (time < 2000) JITTER.requestUpdateOnNextTick(id);

    }
});

JITTER.requestUpdate(id);
