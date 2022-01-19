import { ShippingContainer } from "./shippingcontainer";
import { Transporter } from "./transporter";


export class Ship implements Transporter{
    maxWeight : number;
    containers: ShippingContainer[];

    constructor(maxWeight:number){
        this.maxWeight = maxWeight
        this.containers = [] 
        
    }

 addContainer(containers:ShippingContainer[]):void {
     this.containers = containers
 }
    getTotalWeight(){
         this.containers.map(array)  

     return 0
    } 


    isOverWeight(){

    }

}
