import Node from 'famous/core/Node';
import DOMElement from 'famous/dom-renderables/DOMElement';
import colors from '../../helpers/colors';
import {Breather} from '../../helpers/box/Breather';
import {Box} from '../../helpers/box/Box';
import {OuterBox} from '../../helpers/box/OuterBox';

export class MiddleBox extends Node {
    constructor(options) {
        super(options);
        this.options = options || {};

        new Breather(this, {direction: options.direction});
        this.addChild(new Box({
            colors: [],
            type: 'dom'
        }));

        this.outerRotationNode = this.addChild();
        this.outerRotationNode.setProportionalSize(.5, .5, .5);
        this.outerRotationNode.setAlign(.5, .5, .5);
        this.outerRotationNode.setOrigin(.5, .5, .5);
        this.outerRotationNode.setMountPoint(.5, .5, .5);
        this.outerRotationNode.addChild(new Box({colors: [], type: 'dom'}));
    }

    onSizeChange(width,height, depth) {
        switch (this.options.direction) {
            case '+x':
                this.outerRotationNode.setPosition();
        }
    }
}   