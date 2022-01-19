import { ShippingContainer } from "./shippingcontainer";

export interface Transporter {
    maxWeight: number;

    
    addContainer(container: ShippingContainer[]):void ;

    getTotalWeight():number

    isOverWeight():boolean

}




 