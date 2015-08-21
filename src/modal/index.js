import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import Transitionable from 'famous/src/transitions/Transitionable';
import colors from '../helpers/colors';
import {Layer} from '../layers/';

export class Modal extends Node {
    constructor(options) {
        super(options);

        this.root = this.addChild();
        this.root.setOpacity(0);

        this.background = this.root.addChild(new Layer({ 
            id: 'modalBackground',
            zIndex: 1
        }));

        this.background.setOpacity(.8);
        this.backgroundEl = new DOMElement(this.background, {
            properties: {
                'pointer-events': 'none',
                backgroundColor: '#212121'
            }
        });

        this.foreground = this.root.addChild(new Layer({ 
            zIndex: 2,
            perspective: '2000px'
        }));

        this.square = this.foreground.addChild();
        this.square.setSizeMode(1, 1, 0);
        this.square.setAbsoluteSize(500, 500);
        this.square.setAlign(.5, .5);
        this.square.setMountPoint(.5, .5);
        new DOMElement(this.square, {
            properties: {
                'pointer-events': 'none',
                backgroundColor: colors.lightBlue[500],
                borderRadius: '20px'
            }
        });

        this.exit = this.square.addChild();
        this.exit.setAlign(1, 0);
        this.exit.setMountPoint(.5, .5);
        this.exit.setSizeMode(1, 1, 0);
        this.exit.setAbsoluteSize(50, 50);
        new DOMElement(this.exit, {
            content: 'X',
            properties: {
                'pointer-events': 'none',
                color: 'white',
                backgroundColor: colors.deepOrange[500],
                lineHeight: '50px',
                borderRadius: '25px',
                textAlign: 'center',
                fontFamily: 'futura',
                fontSize: '24px',
            }
        });
    }

    show() {
        this.root.setOpacity(1);
    }

    hide() {
        this.root.setOpacity(0);
    }
}