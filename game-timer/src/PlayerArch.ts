export default class PlayerArch { 
    private id:number;	
    name:string;
    time:number;
    color:string;
    isActive:boolean;

    constructor(id:number, name:string, time:number, color:string, isActive:boolean) {
        this.id = id;
        this.name = name;
        this.time = time;
        this.color = color;
        this.isActive = isActive;
        console.log(id, time);
        this.checkTypes();
    }

    checkTypes():void {
        if (typeof this.name == "string") {
            this.name = `Player ${this.id}`
        }
        
        if (typeof this.time == "number") {
            console.log("hdfgjkghkd")
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