import Node from 'famous/src/core/Node';
import MountPoint from 'famous/src/components/MountPoint';
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
                boxShadow: '2px 0px 5px rgba(0,0,0,0.26)'
            }
        });

        this.root.addUIEvent('mouseenter');
        this.root.addUIEvent('mouseleave');
        this.root.addUIEvent('touchstart');
        this.root.addUIEvent('click');
        this.root.addComponent({
            onReceive: function(e) {
                if (e === 'mouseenter') {
                    mountPoint.set(1, 0, 0, {curve: 'easeIn', duration: 300});
                }
                else if (e === 'mouseleave') {
                    mountPoint.set(0, 0, 0, {curve: 'easeIn', duration: 300});
                }
            }
        });

        this.panelNode = this.root.addChild();
        this.panelNode.setPosition(40, 0, 0);
        var mountPoint = new MountPoint(this.panelNode);
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
        this.panelBody.setDifferentialSize(0, -300, 0);
        this.panelBody.setPosition(0, 300, 0);
    }
}