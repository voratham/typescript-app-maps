import faker from "faker"

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    color:"blue"

    constructor() {
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    makerContent(): string {
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>CatchPhrase: ${this.catchPhrase}</h3>
        </div>
        `
    }

}