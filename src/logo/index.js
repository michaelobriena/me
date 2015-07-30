import Node from 'famous/core/Node';
import MountPoint from 'famous/components/MountPoint';
import Align from 'famous/components/Align';
import Size from 'famous/components/Size';
import DOMElement from 'famous/dom-renderables/DOMElement';
import Transitionable from 'famous/transitions/Transitionable';
import colors from '../helpers/colors';

export class Logo extends Node {
    constructor(options) {
        super(options);

        this.el = new DOMElement(this, {
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
        this.addUIEvent('mouseover');
        this.addUIEvent('click');
        this.addComponent({
            onReceive: function(e) {
                if (e === 'click') {
                    console.log('click')
                }
            }
        })

        this.bottom = this.addChild();
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
