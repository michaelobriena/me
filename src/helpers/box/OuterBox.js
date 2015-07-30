import Node from 'famous/core/Node';
import {Box} from '../../helpers/box/Box';

export class OuterBox extends Node {
    constructor(options) {
        super(options);
        this.options = options || {};

        this.rotationNode = this.addChild();
        this.rotationNode.setPosition();
        this.rotationNode.setProportionalSize(.5, .5, .5);

        this.rotationNode.addChild(new Box({
            colors: [],
            type: 'dom'
        }));
    }
}   