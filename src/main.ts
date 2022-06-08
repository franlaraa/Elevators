import { Building } from "./models/building.model";
import { Elevator } from "./models/elevator.model";



let building:Building=new Building('Empire State');
let elevator:Elevator=new Elevator('A123456B',10,building)
let elevator2:Elevator=new Elevator('B123456C',5,building)

console.log(building.getName());
building.addElevator(elevator);
console.log(elevator.getBuilding());
console.log(elevator.getStatus())
console.log(elevator.request(0));
console.log(elevator.toString())
console.log(building.toString())
building.addElevator(elevator2);
console.log(building.toString())


