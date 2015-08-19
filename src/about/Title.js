import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import colors from '../helpers/colors';

export class Title extends Node {
    constructor(options) {
        super(options);

        this.setSizeMode(0, 1, 0);
        this.setAbsoluteSize(null, options.lineHeight, null);
        this.el = new DOMElement({
            content: options.content,
            styles: {
                lineHeight: options.lineHeight,
                fontSize: options.fontSize
            }
        });
    }
}
