export = class DrawGroup{
    private name:String ="DrawGroup";
    private _graph:any=null;
    private isEditable:boolean=false;
    constructor(graph:any, isEditable?:boolean){
        this.isEditable=isEditable;
        this._graph=graph;        
    }
    drawAGroup(graph?:any){
        
    }
    draw(){        
    }
}