import {ShippingContainer} from "./shippingcontainer";


export class LightContainer implements ShippingContainer {

    destination: string;
    cargoWeight: number = 0;

    constructor (destination:string, cargoWeight:number){
        this.destination = destination;
        this.cargoWeight = cargoWeight
    }

    getGrossWeight() {
        return this.cargoWeight
    }

}