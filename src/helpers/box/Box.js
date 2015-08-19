import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import colors from '../../helpers/colors';

export class Box extends Node {
	constructor(options) {
		super(options);    
        this.faces = [];
        this.opacity = options.opacity || 1;
        this._width = options.width || 0;
        this._height = options.height || 0;
        this._depth = options.depth || 0;


        this.setOrigin(.5, .5, .5);
        this.setMountPoint(.5, .5, .5);
        this.setAlign(.5, .5, .5);

        var self = this;
        this.addComponent({
            onSizeChange: function(width, height, depth) {
                self._width = width;
                self._height = height;
                self._depth = depth;

                self.resize();
            }
        });

        this._constructFaces();
	}

    _constructFaces() {
        this.faces.push(this.addChild());
        new DOMElement(this.faces[0], {
            properties: {
                opacity: this.opacity,
                backgroundColor: colors.pink[500],
                border: '2px solid black'
            }
        });

        this.faces.push(this.addChild());
        this.faces[1].setRotation(0, Math.PI, 0);
        this.faces[1].setOrigin(.5, .5, .5);
        new DOMElement(this.faces[1], {
            properties: {
                opacity: this.opacity,
                backgroundColor: colors.pink[500],
                border: '2px solid black',
                backfaceVisibility: 'visible'
            }
        });

        this.faces.push(this.addChild());
        this.faces[2].setRotation(0, Math.PI/2, 0);
        this.faces[2].setOrigin(.5, .5, .5);
        new DOMElement(this.faces[2], {
            properties: {
                opacity: this.opacity,
                backgroundColor: colors.yellow[500],
                border: '2px solid black',
                backfaceVisibility: 'visible'
            }
        });

        this.faces.push(this.addChild());
        this.faces[3].setRotation(0, -Math.PI/2, 0);
        this.faces[3].setOrigin(.5, .5, .5);
        new DOMElement(this.faces[3], {
            properties: {
                opacity: this.opacity,
                backgroundColor: colors.yellow[500],
                border: '2px solid black',
                backfaceVisibility: 'visible'
            }
        });

        this.faces.push(this.addChild());
        this.faces[4].setRotation(Math.PI/2, 0, 0);
        this.faces[4].setOrigin(.5, .5, .5);
        new DOMElement(this.faces[4], {
            properties: {
                opacity: this.opacity,
                backgroundColor: colors.deepOrange[500],
                border: '2px solid black',
                backfaceVisibility: 'visible'
            }
        });

        this.faces.push(this.addChild());
        this.faces[5].setRotation(-Math.PI/2, 0, 0);
        this.faces[5].setOrigin(.5, .5, .5);
        new DOMElement(this.faces[5], {
            properties: {
                opacity: this.opacity,
                backgroundColor: colors.deepOrange[500],
                border: '2px solid black',
                backfaceVisibility: 'visible'
            }
        });

        this.resize();
    }

    resize() {
        this.faces[0].setPosition(0, 0, this._depth/2);
        this.faces[1].setPosition(0, 0, -this._depth/2);
        this.faces[2].setPosition(-this._width/2, 0, 0);
        this.faces[3].setPosition(this._width/2, 0, 0);
        this.faces[4].setPosition(0, this._height/2, 0);
        this.faces[5].setPosition(0, -this._height/2, 0);
    }
}
