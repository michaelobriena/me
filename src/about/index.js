import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import Sequential from 'famous/src/layouts/Sequential';
import colors from '../helpers/colors';
import Blurb from './Blurb';
import Reading from './Reading';
import Playing from './Playing';
import {ListeningTo} from './ListeningTo';

export class About extends Node {
    constructor(options) {
        super(options);

        this.root = this.addChild();
        this.rootEl = new DOMElement(this.root, {
            properties: {
                overflow: 'scroll'
            }
        });
        
        this.root = this.root.addChild();
        this.root.setAbsoluteSize(600, null, null);
        this.root.setSizeMode(1, 0, 0);
        this.root.setAlign(.5, 0, 0);
        this.root.setMountPoint(.5, 0, 0);

        this.sequential = new Sequential();
        this.sequential.setPosition(0, 100, 0);

        this.titleNode = this.sequential.addChild();
        this.titleNode.setAbsoluteSize(null, 100, null);
        this.titleNode.setSizeMode(0, 1, 0);
        this.titleEl = new DOMElement(this.titleNode, {
            content: 'ABOUT',
            properties: {
                color: 'white',
                fontFamily: 'futura',
                fontSize: '48px',
                lineHeight: '100px',
                textAlign: 'right'
            }
        });

        this.blurbNode = this.sequential.addChild();
        this.blurbNode.setAbsoluteSize(null, 200, null);
        this.blurbNode.setSizeMode(0, 1, 0);
        this.blurbEl = new DOMElement(this.blurbNode, {
            content: 'Hi, I\'m Mike O\'Brien, and I love to find patterns in everything.  I am currently a Software Engineer at Famous where I work on the rendering engine and using it to build great experiences.<br><br>Hope you enjoy my site and see the progress that gets made here as I continue my efforts to learn all I can.  Live your life unapologetically.',
            properties: {
                color: 'white',
                fontFamily: 'futura',
                fontSize: '18px',
                fontSpacing: '2px',
                lineHeight: '22px',
                textAlign: 'left'
            }
        });

        this.listeningToTitle = this.sequential.addChild();
        this.listeningToTitle.setAbsoluteSize(null, 100, null);
        this.listeningToTitle.setSizeMode(0, 1, 0);
        this.listeningToTitleEl = new DOMElement(this.listeningToTitle, {
            content: 'What I am listening to',
            properties: {
                color: 'white',
                fontFamily: 'futura',
                fontSize: '32px',
                fontSpacing: '2px',
                lineHeight: '22px',
                textAlign: 'right'
            }
        });

        this.listeningTo = this.sequential.addChild(new ListeningTo());
        this.listeningTo.setSizeMode(0, 1, 0);
        this.listeningTo.setAbsoluteSize(null, 400, null);
    }
}
