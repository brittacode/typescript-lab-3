import { ShippingContainer } from "./shippingcontainer";
import { Transporter } from "./transporter";


export class Truck implements Transporter{
    maxWeight:number;
    container?: ShippingContainer | null;

    constructor(maxWeight:number){
        this.maxWeight = maxWeight
    }


    addContainer(container:ShippingContainer):void{
        this.container = container

    }

//     getTotalWeight():number {
//         if (this.container == null) {
//             return 0;
//         } else {
//             return 
//         }
//     }

//     isOverWeight():boolean{
//         if(this.getTotalWeight() > this.maxWeight) 
//     }
// }

