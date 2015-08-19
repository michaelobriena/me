import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import colors from '../helpers/colors';

export class Blurb extends Node {
    constructor(options) {
        super(options);

        this.setSizeMode(2, 2, 2);
        this.el = new DOMElement({
            content: options.content,
            styles: options.properties
        });
    }
}
