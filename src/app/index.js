import Node from 'famous/src/core/Node';
import FamousEngine from 'famous/src/core/FamousEngine';
import {Tentacles} from '../sandbox/Tentacles';
import {Tunnels} from '../sandbox/Tunnels';
import {Logo} from '../logo/';
import {Sidebar} from '../sidebar/';
import {About} from '../about/';
import {Layer} from '../layers/'

export class App extends Node {
    constructor(options) {
        super(options);

        this.modal = this.addChild(new Layer({ 
            id: 'modal',
            zIndex: 5
        }));

        this.logo = this.addChild(new Layer({
            id: 'logo',
            zIndex: 4
        })).addChild(new Logo());

        this.sidebar = this.addChild(new Layer({
            id: 'sidebar',
            zIndex: 3
        })).addChild(new Sidebar());

        this.main = this.addChild(new Layer({
            id: 'main',
            zIndex: 2,
            backgroundColor: '#212121',
            perspective: '2000px'
        })).addChild(new About());
        // })).addChild(new Tunnels());

        this.backgroundLayer = this.addChild(new Layer({
            id: 'background',
            zIndex: 1
        }));
    }
}
