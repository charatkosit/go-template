import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GoPart } from 'src/app/interfaces/goPart';
import { GoDatum } from 'src/app/interfaces/goDatum';
import { RestService } from 'src/app/services/rest.service';
import { ShareService } from 'src/app/services/share.service';
import { GoPartApi, PartList } from 'src/app/interfaces/goPartApi';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { MyPart, PartListA } from 'src/app/interfaces/myPart';


declare var $: any;




@Component({
    selector: 'app-shop-table-api',
    templateUrl: './shop-table-api.component.html',
    styleUrls: ['./shop-table-api.component.css']
})
export class ShopTableApiComponent implements OnInit {


    partList?: PartList[]
    mycart: number[] = [];



    partlista: PartListA[] = [];
    myData!: MyPart;

    brandForm = new FormControl();
    numberForm = new FormControl();
    itemnameForm = new FormControl();
    modelForm = new FormControl();

    keyword:string = '';
    var1:string = '';
    var2:string = '';
    var3:string = '';
    var4:string = '';


    constructor(private http: HttpClient, private rest: RestService, private share: ShareService) { }



    ngOnInit(): void {

       
     



        $(function () {
            $("#example1").DataTable({
                "responsive": true, "lengthChange": false, "autoWidth": false,
                // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
            }).buttons().container().appendTo('#example1_wrapper .col-md:eq(0)');
            $('#example2').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "responsive": true,
            });
        });
    }




    onGetGoApi_local(): any {
        this.rest.getPartlistApiLocal()
            .subscribe((res: MyPart) => {
                this.myData = res;
                this.partlista = this.myData.data
                console.log(this.partlista[0])
            })
        return this.partlista
    }

    
    onSearchPartlist() {
  
       this.var1= this.itemnameForm.value;
       this.var2= this.numberForm.value;
       this.var3= this.brandForm.value;
       this.var4= this.modelForm.value;
        // keyword = ItemName=&ItemCode=&Brand=&Model=
        this.keyword = `ItemName=${this.var1}&ItemCode=${this.var2}&Brand=${this.var3}&Model=${this.var4}`
        this.keyword = this.keyword.replace(/null/g, '');
        this.rest.getPartlistByKeyword(this.keyword)
           .subscribe( (res:MyPart) => {
            this.myData = res;
            this.partlista = this.myData.data
            console.log(this.partlista[0])
           })
        return this.partlista;
    }



    onSelect(selectedItem: any) {
        console.log("Selected Product Id: ", selectedItem.id); // You get the Id of the selected item here
        this.mycart.push(selectedItem.id);
        console.log("Data in Cart:", this.mycart);
        this.share.count++;
        this.onAlert();
    }

    onAlert() {
        $(function () {
            var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1600
            });


            Toast.fire({
                icon: 'success',
                title: 'เพิ่มสินค้า ลงในตระกร้า'
            });


        });
    }


}
