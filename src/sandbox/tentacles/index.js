import Node from 'famous/core/Node';
import DOMElement from 'famous/dom-renderables/DOMElement';
import {colors} from '../../helpers/colors';
import {Box} from '../../helpers/box/Box';
import {Breather} from '../../helpers/box/Breather';

export class Tentacles extends Node {
    constructor() {
        super();

        this.setAbsoluteSize(120, 120, 120);
        this.setOrigin(.5, .5, .5);
        this.setMountPoint(.5, .5, .5);
        this.setAlign(.5, .5, .5);
        this.setSizeMode(1, 1, 1);

        var self = this;
        var id = this.addComponent({
            onUpdate: function(time) {
                self.setRotation(time/1000, time/600, 0);
                self.requestUpdateOnNextTick(id)
            }
        });
        self.requestUpdate(id);

        this.addChild(new Box({
            colors: [],
            type: 'dom'
        }));

        this.middleRotationNode = this.addChild();
        this.middleRotationNode.setAbsoluteSize(60, 60, 60);
        this.middleRotationNode.setOrigin(.5, .5, .5);
        this.middleRotationNode.setMountPoint(.5, .5, .5);
        this.middleRotationNode.setAlign(.5, .5, .5);
        this.middleRotationNode.setSizeMode(1, 1, 1);
        this.middleChildrenNodes = this._createMiddleBoxes();
    }

    _createMiddleBoxes() {
        var result = [];

        result.push(this.middleRotationNode.addChild());
        new Breather(result[0], {direction: '+z'});
        result[0].addChild(new Box({
            colors: [],
            type: 'dom'
        }));


        result.push(this.middleRotationNode.addChild());
        new Breather(result[1], {direction: '-z'});
        result[1].addChild(new Box({
            colors: [],
            type: 'dom'
        }));

        result.push(this.middleRotationNode.addChild());
        new Breather(result[2], {direction: '-x'});
        result[2].addChild(new Box({
            colors: [],
            type: 'dom'
        }));

        result.push(this.middleRotationNode.addChild());
        new Breather(result[3], {direction: '+x'});
        result[3].addChild(new Box({
            colors: [],
            type: 'dom'
        }));

        result.push(this.middleRotationNode.addChild());
        new Breather(result[4], {direction: '-y'});
        result[4].addChild(new Box({
            colors: [],
            type: 'dom'
        }));

        result.push(this.middleRotationNode.addChild());
        new Breather(result[5], {direction: '+y'});
        result[5].addChild(new Box({
            colors: [],
            type: 'dom'
        }));

        return result;
    }
}
