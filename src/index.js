import FamousEngine from 'famous/core/FamousEngine';
import DOMElement from 'famous/dom-renderables/DOMElement';
import {App} from './App/';

FamousEngine.init();
var scene = FamousEngine.createScene()
scene.addChild(new App());


var JITTER = scene.addChild();
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
