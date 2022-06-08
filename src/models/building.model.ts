import { Elevator } from "./elevator.model";

export class Building {
  protected name: string;
  private elevatorList: Elevator[] = [];
  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
  public addElevator(elevator: Elevator) {
    this.elevatorList.push(elevator);
  }
  public removeElevator(elevator: Elevator) {
    this.elevatorList.filter((n) => n !== elevator);
  }

  public toString(): string {
    let elevators: string = "";
    this.elevatorList.map((elevator) => elevators= elevators+'['+elevator.toString()+']\n')
    console.log(elevators);
    return "Building:" + this.getName() + "\nElevators:\n" + elevators;
  }
}
