export class Door {
  protected open: boolean = false;

  constructor() {}

   isOpen(): boolean {
      return this.open
  }
  setOpen(open: boolean) {
      this.open = open
  }

   toString(): string {
    return "the door is "+(this.open ? 'close': 'open');
  }
}
