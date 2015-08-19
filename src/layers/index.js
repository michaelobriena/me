import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';


export class LayerManager extends Node {
    constructor(options) {
        this.layers = [];   
    }

    addLayer() {
        var node = this.addChild();
        new DOMElement(node, {
            properties: {
                transformStyle: 'flat'
            }
        });

        node = node.addChild();
        new DOMElement(node, {
            properties: {
                transformStyle: 'preserve-3d'
            }
        });

        this.layer
    }
}

