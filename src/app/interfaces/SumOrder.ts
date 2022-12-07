export interface  SumOrder { 
    ItemCode: string;
    ItemName: string;
    RetailPrice: number;
    qty: number;
    total:number;
    checked?:boolean;
}