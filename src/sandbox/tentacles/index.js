import Node from 'famous/core/Node';
import {Box} from '../../helpers/box/Box';
import {MiddleBox} from '../../helpers/box/MiddleBox';

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

        this._createMiddleBoxes();
    }

    _createMiddleBoxes() {
        var directions = ['+z', '-z', '-x', '+x', '-y', '+y'];
        var i = 0;
        var numDirections = directions.length;

        this.middleRotationNode = this.addChild();
        this.middleRotationNode.setAbsoluteSize(60, 60, 60);
        this.middleRotationNode.setOrigin(.5, .5, .5);
        this.middleRotationNode.setMountPoint(.5, .5, .5);
        this.middleRotationNode.setAlign(.5, .5, .5);
        this.middleRotationNode.setSizeMode(1, 1, 1);

        for (; i < numDirections; i++) {
            this.middleRotationNode.addChild(new MiddleBox({ direction: directions[i] }));
        }
    }
}
