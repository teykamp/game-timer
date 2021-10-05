export default class PlayerArch { 
    private id:number;	
    name:string;
    time:number;
    color:string;

    constructor(id:number, name:string, time:number, color:string) {
        this.id = id;
        this.name = name;
        this.time = time;
        this.color = color;
    }

    setID(id:number):void {
        this.id = id;
    }

    getID():number {
        return this.id;
    }
};