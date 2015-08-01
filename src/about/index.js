import Node from 'famous/core/Node';
import DOMElement from 'famous/dom-renderables/DOMElement';
import colors from '../helpers/colors';

export class About extends Node {
    constructor(options) {
        super(options);

        this.root = this.addChild();
        this.root.setAbsoluteSize(400, null, null);
        this.root.setSizeMode(1, 0, 0);
        this.root.setAlign(.5, 0, 0);
        this.root.setMountPoint(.5, 0, 0);

        // this.sequentialLayout = new SequentialLayout();
        this.titleNode = this.root.addChild();
        this.titleNode.setPosition(0, 100, 0);
        this.titleNode.setAbsoluteSize(null, 100, null);
        this.titleNode.setSizeMode(0, 1, 0);
        this.titleEl = new DOMElement(this.titleNode, {
            content: 'ABOUT',
            properties: {
                color: 'white',
                font: 'futura',
                fontSize: '48px',
                lineHeight: '100px',
                textAlign: 'right'
            }
        });

        this.blurbNode = this.titleNode.addChild();
        this.blurbNode.setPosition(0, 100, 0);
        this.blurbEl = new DOMElement(this.blurbNode, {
            content: '',
            properties: {
                color: 'white',
                font: 'futura',
                fontSize: '18px',
            }
        });
    }
}
