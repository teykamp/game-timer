export default class PlayerArch { 
    private id:number;	
    name:string;
    time:number;
    color:string;
    textColor:string;
    isActive:boolean;

    constructor(id:number, name:string, time:number, color:string, isActive:boolean) {
        this.id = id;
        this.name = name;
        this.time = time;
        this.color = color;
        this.textColor = "";
        this.isActive = isActive;
        this.checkTypes();
    }

    checkTypes():void {
        if (this.name == undefined || this.name == "") {
            this.name = `Player ${this.id}`
        }
        
        if (!(this.time >= 0)) {
            this.time = 600;
        }
    }

    setID(id:number):void {
        this.id = id;
    }

    getID():number {
        return this.id;
    }
};