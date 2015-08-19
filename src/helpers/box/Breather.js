import Transitionable from 'famous/src/transitions/Transitionable';

var mainTransitionable = new Transitionable(0);

function breathe() {
    mainTransitionable.set(1, {duration: 2000, curve: 'easeInOut'}, function() {
        mainTransitionable.set(0, {duration: 2000, curve: 'easeInOut'}, breathe);
    });    
}
breathe();

export class Breather {
    constructor(node, options) {
        options = options || {};
        this._node = node;
        this.direction = options.direction || '-x';
        this._id = node.addComponent(this);
        this._node.requestUpdate(this._id);
        this._width = 0;
        this._height = 0;
        this._depth = 0;
    }

    onSizeChange(width, height, depth) {
        this._width = width;
        this._height = height;
        this._depth = depth;
    }

    onUpdate(time) {
        switch (this.direction) {
            case '-x':
                this._node.setPosition(-this._width*2 - (this._width * mainTransitionable.get()), 0, 0);
                break;
            case '+x':
                this._node.setPosition(this._width*2 + (this._width * mainTransitionable.get()), 0, 0);
                break;
            case '-y':
                this._node.setPosition(0, -this._height*2 - (this._height * mainTransitionable.get()), 0);
                break;
            case '+y':
                this._node.setPosition(0, this._height*2 + (this._height * mainTransitionable.get()), 0);
                break;
            case '-z':
                this._node.setPosition(0, 0, -this._depth*2- (this._depth * mainTransitionable.get()));
                break;
            case '+z':
                this._node.setPosition(0, 0, this._depth*2 + (this._depth * mainTransitionable.get()));
                break;
        }

        this._node.requestUpdateOnNextTick(this._id);
    }
}
