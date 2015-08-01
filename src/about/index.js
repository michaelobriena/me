import Node from 'famous/core/Node';
import DOMElement from 'famous/dom-renderables/DOMElement';

export class About extends Node {
    constructor(options) {
        super(options);

        this.root = this.addChild();
        this.root.setProportionalSize(.7, 1, 1);

        this.el = new DOMElement(this.root, {
            properties: {
                backgroundColor: 'red'
            }
        })

    }

}