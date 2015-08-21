import Node from 'famous/src/core/Node';
import MountPoint from 'famous/src/components/MountPoint';
import Align from 'famous/src/components/Align';
import Size from 'famous/src/components/Size';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import Transitionable from 'famous/src/transitions/Transitionable';
import colors from '../helpers/colors';
import {Tentacles} from '../sandbox/Tentacles';
import {Tunnels} from '../sandbox/Tunnels';
import {SlidingGrid} from '../sandbox/slidingGrid';

export class Sandbox extends Node {
    constructor(options) {
        super(options);

        this.addChild(new Tunnels());
        // this.addChild(new Tentacles());
        // this.addChild(new SlidingGrid());
    }
}