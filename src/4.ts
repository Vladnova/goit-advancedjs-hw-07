class Key {
  private signature: number = Math.round(Math.random() * 10);

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  public door: boolean = false;

  constructor(public key: Key) {}

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(public key: Key) {
    super(key);
  }

  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is open");
    } else {
      console.log("Key is not correct");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
