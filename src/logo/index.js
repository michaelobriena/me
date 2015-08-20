import Node from 'famous/src/core/Node';
import MountPoint from 'famous/src/components/MountPoint';
import Align from 'famous/src/components/Align';
import Size from 'famous/src/components/Size';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import Transitionable from 'famous/src/transitions/Transitionable';
import colors from '../helpers/colors';

export class Logo extends Node {
    constructor(options) {
        super(options);

        this.root = this.addChild();
        this.root.setOrigin(.5, .5);
        var logoAlign = new Align(this.root);
        logoAlign.set(.5, .5);
        var logoMountPoint = new MountPoint(this.root);
        logoMountPoint.set(.5, .5);
        var logoSize = new Size(this.root);
        logoSize.setAbsolute(300, 70, 0);
        this.root.setSizeMode(1, 1, 1);

        setTimeout(function() {
            logoAlign.set(.05, .05, 0, {curve: 'easeOut', duration: 0});
            logoMountPoint.set(0, 0, 0, {curve: 'easeOut', duration: 0});
            logoSize.setAbsolute(50, 70, 0, {curve: 'easeOut', duration: 0});
        }, 1);

        this.el = new DOMElement(this.root, {
            content: 'M',
            properties: {
                color: 'white',
                fontSize: '48px',
                fontFamily: 'futura',
                lineHeight: '60px',
                textAlign: 'center',
                cursor: 'pointer'
            }
        });

        this.bottom = this.root.addChild();
        this.bottom.setAbsoluteSize(null, 8, null);
        this.bottom.setSizeMode(0, 1, 0);
        this.bottom.setAlign(0, 1, 0);
        this.bottom.setMountPoint(0, 1, 0);
        this.createBar();

        this.animateOut();
    }

    createBar() {
        var node;
        var barColors = ['pink', 'orange', 'yellow', 'green', 'lightBlue', 'purple'];

        for (var i = 0; i < 6; i++) {
            node = this.bottom.addChild();
            node.setAlign(i/6, 0, 0);
            node.setProportionalSize(1/6, 1, 1);
            new DOMElement(node, {
                properties: {
                    backgroundColor: colors[barColors[i]][500]
                }
            });
        }
    }

    animateOut() {

    }
}
