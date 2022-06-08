import { Building } from "./building.model";
import { Door } from "./door.model";
import { Status } from "./status.model";

export class Elevator {
  protected serialNumber: string;
  private currentFloor: number;
  private distanceFloors: number;
  /*----------------------------------------------------------------*/
  private door: Door = new Door();
  private building: Building;
  private status: Status;
  constructor(
    serialNumber: string,
    distanceFloors: number,
    building: Building
  ) {
    this.serialNumber = serialNumber;
    this.distanceFloors = distanceFloors;
    this.building = building;
    this.currentFloor = 0;
    this.status = 0;
  }

  getSerialNumber(): string {
    return this.serialNumber;
  }
  setSerialNumber(value: string) {
    this.serialNumber = value;
  }
  getCurrentFloor(): number {
    return this.currentFloor;
  }
  getDistanceFloors(): number {
    return this.distanceFloors;
  }
  private setDistanceFloors(value: number) {
    this.distanceFloors = value;
  }
  isOpen(): boolean {
    return this.door.isOpen();
  }
  getBuilding(): Building {
    return this.building;
  }
  getStatus(): Status {
    return this.status;
  }
  private setStatus(value: Status) {
    this.status = value;
  }

  private getDoor(): Door {
    return this.door;
  }

  private async openDoor() {
    this.setStatus(Status.OPENING);
    console.log(this.status);

    await new Promise(() => {
      setTimeout(() => {
        this.door.setOpen(true);
      }, 3000);
    });
    this.setStatus(Status.IDLE);
    console.log(this.status);
  }

  private async closeDoor() {
    this.setStatus(Status.CLOSING);
    console.log(this.status);

    await new Promise(() => {
      setTimeout(() => {
        this.door.setOpen(false);
      }, 3000);
    });
    this.setStatus(Status.IDLE);
    console.log(this.status);
  }
  async request(nextFloor: number) {
    if (this.getCurrentFloor() == nextFloor) {
   console.log(this.openDoor())   ;
    } else {
      if (!this.isOpen()) {
        this.closeDoor();
      }
      await new Promise(() => {
        this.move(nextFloor);
      });
      console.log(this.openDoor());
    }
  }

  private move(nextFloor: number) {
    const move = nextFloor > this.getCurrentFloor() ? "move up" : "move down";
    let distance =
      Math.abs(this.getCurrentFloor() - nextFloor) * this.getDistanceFloors();
    this.setStatus(Status.MOVING);
    for (let index = 0; index < distance; index++) {
      setTimeout(() => {
        console.log(move);
      }, 1000);
    }
  }

  reset() {
    this.currentFloor = this.getCurrentFloor();
    this.closeDoor();
  }

  public toString(): String {
    return (
      "serialNumber: " +
      this.getSerialNumber() +
      "\nCurrentFloor: " +
      this.getCurrentFloor() +
      "\nDistanceFloor: " +
      this.getDistanceFloors()
    );
  }
}
