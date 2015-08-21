import Node from 'famous/src/core/Node';
import FamousEngine from 'famous/src/core/FamousEngine';
import {Logo} from '../logo/';
import {Sidebar} from '../sidebar/';
import {MainController} from '../main/';
import {Modal} from '../modal/';
import {Layer} from '../layers/';

export class App extends Node {
    constructor(options) {
        super(options);

        this.modal = this.addChild(new Layer({ 
            id: 'modal',
            zIndex: 5
        })).addChild(new Modal());

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
            // perspective: '2000px'
        })).addChild(new MainController());

        this.backgroundLayer = this.addChild(new Layer({
            id: 'background',
            zIndex: 1
        }));
    }
}
