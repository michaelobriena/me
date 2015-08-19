import Node from 'famous/src/core/Node';
import DOMElement from 'famous/src/dom-renderables/DOMElement';
import colors from '../helpers/colors';
import Grid from '../layouts/Grid';

export class ListeningTo extends Node {
    constructor(options) {
        super(options);

        var test = [[0, 0], [1, 0], [0, 1], [1, 1]];
        var youtubeUrls = [
            '<iframe style="width: 100%; height: 100%" src="https://www.youtube.com/embed/r4G0nbpLySI" frameborder="0" allowfullscreen></iframe>',
            '<iframe style="width: 100%; height: 100%" src="https://www.youtube.com/embed/x2AOjb9HW2E" frameborder="0" allowfullscreen></iframe>',
            '<iframe style="width: 100%; height: 100%" src="https://www.youtube.com/embed/H7bqZIpC3Pg" frameborder="0" allowfullscreen></iframe>',
            '<iframe style="width: 100%; height: 100%" src="https://www.youtube.com/embed/spUcxBFEpBM" frameborder="0" allowfullscreen></iframe>'
        ];

        for (var i = 0; i < 4; i++) {
            var node = this.addChild();
            node.setDifferentialSize(-20, -20, 0);
            node.setProportionalSize(.5, .5, 0);
            node.setMountPoint(test[i][0], test[i][1]);
            node.setAlign(test[i][0], test[i][1]);
            var el = new DOMElement(node, {
                content: youtubeUrls[i]
            });
        }
    }
}
