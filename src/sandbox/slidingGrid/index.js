import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import Transitionable from 'famous/src/transitions/Transitionable';
import colors from '../../helpers/colors';

export class SlidingGrid extends Node {
    constructor(options) {
        super(options);

        this.perspectiveWindow = this.addChild();
        this.perspectiveWindow.setProportionalSize(1,1, 0)
        new DOMElement(this.perspectiveWindow, {
            properties: {
                perspective: '1000px'
                // background: 'rgba(255, 0, 0, .5)'
            }
        });


        this.root = this.perspectiveWindow.addChild();
        this.root.setAbsoluteSize(4000, 10000, 0);
        this.root.setSizeMode(1, 1, 1); 
        this.root.setOrigin(.5, 1, 0);
        this.root.setAlign(.5, 1, 0);
        this.root.setMountPoint(.5, 1, 0);
        this.root.setRotation(Math.PI/2, 0, 0)
        new DOMElement(this.root, {
            properties: {
                background: 'green'
            }
        });

        setTimeout(function() {
            console.log(this.root.getSize())
        }.bind(this), 100)
    }

    _createTree() {

    }

    getSidebar() {

    }
}
