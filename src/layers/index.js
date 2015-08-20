import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';

export class Layer extends Node {
    constructor(options) {
        super(options)
        new DOMElement(this, {
            id: options.id,
            properties: {
                backgroundColor: options.backgroundColor,
                transformStyle: 'flat',
                overflow: 'hidden',
                zIndex: options.zIndex,
                'pointer-events': 'none'
            }
        });

        this.exposedNode = Node.prototype.addChild.call(this);
        new DOMElement(this.exposedNode, {
            properties: {
                transformStyle: 'preserve-3d',
                perspective: options.perspective,
                'pointer-events': 'none'
            }
        });
    }

    addChild(node) {
        return this.exposedNode.addChild(node);
    }
}

