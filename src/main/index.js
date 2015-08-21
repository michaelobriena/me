import Node from 'famous/src/core/Node';
import Opacity from 'famous/src/components/Opacity';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import Transitionable from 'famous/src/transitions/Transitionable';
import colors from '../helpers/colors';
import {Sandbox} from '../sandbox/';
import {About} from '../about/';

export class MainController extends Node {
    constructor(options) {
        super(options);

        var _this = this;
        var myUpdaterComponentID = this.addComponent({
            onUpdate: function(time) {
                //Do logic

                // Repeat next frame
                _this.requestUpdateOnNextTick(myUpdaterComponentID)
            }
        });
        this.requestUpdate(myUpdaterComponentID);

        this.currentSection;
        this.currNode = this.addChild();
        this.nextNode = this.addChild();
        this.nextNodeOpacity = new Opacity(this.nextNode);
        this.nextNodeOpacity.set(0);
        this.currNodeOpacity = new Opacity(this.currNode);

        this.sections = {
            about: About,
            sandbox: Sandbox
        };

        this.show('sandbox');
    }

    show(section, options) {
        var _this = this;

        if (section !== this.currentSection)  {
            this.currentSection = section;

            this.nextNode.addChild(new (this.sections[section])());

            this.nextNodeOpacity.set(1, {curve: 'easeInOut', duration: 1000}, function() {
                // var temp = _this.currNode;
                // _this.currNode = _this.nextNode;
                // _this.nextNode = temp;
                // _this.nextNode.removeAllChildren();
            });

            this.currNodeOpacity.set(0, {curve: 'easeInOut', duration: 1000})
        }
    }
}



