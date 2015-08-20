import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import Transitionable from 'famous/src/transitions/Transitionable';
import colors from '../../helpers/colors';

export class Tunnels extends Node {
    constructor() {
        super();

        this.perspectiveWindow = this.addChild();
        new DOMElement(this.perspectiveWindow, {
            properties: {
                perspective: '5000px'
            }
        });

        this.root = this.perspectiveWindow.addChild();
        this.root.setAbsoluteSize(400, 400, 0);
        this.root.setOrigin(.5, .5, .5);
        this.root.setMountPoint(.5, .5, .5);
        this.root.setAlign(.5, .5, .5);
        this.root.setSizeMode(1, 1, 1);

        this.minSpacing = 5;
        this.maxSpacing = 20;
        this.borderRadius = 40;
        this.spacing = new Transitionable(0);
        this.torque = new Transitionable(0); 

        this.slices = [];

        var _this = this;
        var id = this.root.addComponent({
            onUpdate: function(time) {
                _this.root.setRotation(time/2000, time/2000, 0);
                _this.root.requestUpdateOnNextTick(id);

                var len = _this.slices.length;
                var torque = _this.torque.get();
                var spacing = _this.spacing.get();
                for (var i = 0; i < len; i++) {
                    _this.slices[i].setPosition(0, 0, (i * spacing) - 25 * spacing);
                    _this.slices[i].setRotation(0, 0, torque * -i / len);
                }
            }
        });
        this.root.requestUpdate(id);

        this._createTree();
        this.startBreath();
        this.startTorqueAnimation();
    }

    _createTree() {
        var node;
        var myColors = ['green', 'yellow', 'purple'];

        for (var i = 0; i < 50; i++) {
            node = this.root.addChild();
            node.setPosition(0, 0, (-10 * i) + 250);
            node.setOrigin(.5, .5, .5);
            new DOMElement(node, {
                properties: {
                    border: '10px solid ' + colors[myColors[i % 3]]['500'],
                    borderRadius: this.borderRadius + 'px'
                }
            });
            this.slices.push(node);
        }
    }

    startTorqueAnimation() {
        this.torque.set(4*Math.PI, {
            curve: 'easeInOut',
            duration: 5000
        }, function() {
            this.torque.set(0, {
                curve: 'easeInOut',
                duration: 5000
            }, function() {
                this.startTorqueAnimation()
            }.bind(this));
        }.bind(this));
    }
    

    startBreath() {
        this.spacing.set(this.maxSpacing, {
            curve: 'easeInOut',
            duration: 7000
        }, function() {
            this.spacing.set(this.minSpacing, {
                curve: 'easeInOut',
                duration: 7000
            }, function() {
                this.startBreath();
            }.bind(this));
        }.bind(this));
    }
}
