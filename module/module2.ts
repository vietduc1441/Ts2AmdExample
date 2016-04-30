import DrawGroup= require("./drawing/module1");

export function view(){
    var graph;
    var drawer= new DrawGroup(graph);
    var drawer2= new DrawGroup(graph, true);
    drawer.drawAGroup(graph);
}