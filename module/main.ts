/// <reference path="../typings/tsd.d.ts" />
import dom= require("dojo/dom")
import dojoConstruct= require('dojo/dom-construct'); 
import viewFunc=require("./module2");            
export = function(){
    viewFunc.view();
    var greetingNode = dom.byId('greeting');
    dojoConstruct.place('<em> Dojo!</em>', greetingNode);
}
