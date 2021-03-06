import Node from 'famous/src/core/Node';
import MountPoint from 'famous/src/components/MountPoint';
import Position from 'famous/src/components/Position';
import Align from 'famous/src/components/Align';
import Size from 'famous/src/components/Size';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import Transitionable from 'famous/src/transitions/Transitionable';
import colors from '../helpers/colors';

export class Sidebar extends Node {
    constructor(options) {
        super(options);

        this.root = this.addChild();
        this.root.setAlign(1, 0, 0);
        this.root.setPosition(-40, 0, 0);
        this.root.setAbsoluteSize(300, null, null);
        this.root.setSizeMode(1, 0, 0);

        this.containerEl = new DOMElement(this.root, {
            properties: {
                boxShadow: '5px 0px 8px rgba(0,0,0,0.26)'
            }
        });

        this.root.addUIEvent('mouseenter');
        this.root.addUIEvent('mouseleave');
        this.root.addUIEvent('touchstart');
        this.root.addUIEvent('click');
        this.root.addComponent({
            onReceive: function(e) {
                if (e === 'mouseenter') pos.set(-260, 0, 0, {curve: 'linear', duration: 300});
                else if (e === 'mouseleave') pos.set(40, 0, 0, {curve: 'linear', duration: 300});
            }
        });

        this.panelNode = this.root.addChild();
        this.panelNode.setPosition(40, 0, 0);
        var pos = new Position(this.panelNode);
        pos.set(40);
        new DOMElement(this.panelNode, {
            properties: {
                backgroundColor: '#303030'
            }
        });

        this.panelHeader = this.panelNode.addChild();
        this.panelHeader.setAbsoluteSize(null, 200, null);
        this.panelHeader.setSizeMode(0, 1, 0);
        new DOMElement(this.panelHeader, {
            content: 'Tentacles',
            properties: {
                paddingLeft: '20px',
                fontFamily: 'futura',
                fontSize: '40px',
                color: 'black',
                backgroundColor: colors.yellow[500],
                lineHeight: '200px',
                boxShadow: '0px 2px 5px rgba(0,0,0,0.26)'
            }
        })

        this.panelBody = this.panelNode.addChild();
        this.panelBody.setOpacity(.5)
        this.panelBody.setDifferentialSize(0, -300, 0);
        this.panelBody.setPosition(0, 300, 0);
        new DOMElement(this.panelNode, {
            properties: {
                backgroundColor: '#303030'
            }
        });

    }
}