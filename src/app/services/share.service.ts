import { Injectable } from '@angular/core';
import { SumOrder } from '../interfaces/SumOrder';

@Injectable({
  providedIn: 'root'
})



// interface Cart {
//   User: string;
//   Cart: { [key: string]: number }[];
// }


// interface CartWoName {
//     productId: number;
//     qty: number
// }

export class ShareService {

  
  count:number = 0;
  grandTotal:number = 0;
  sumCart:SumOrder[] =[]
//   newCart:Cart[]=[{
//     "User": "Charat",
//     "Cart": [ {"producId": 15, "qty":1},
//             {"producId": 17, "qty":1},
//             {"producId": 9, "qty":2},
//             {"producId": 2, "qty":3} ] 
    
// }
//    ] 


  constructor() { }


  // หา qty รวมทั้งหมด

}
