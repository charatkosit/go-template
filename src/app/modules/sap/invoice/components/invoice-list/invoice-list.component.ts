import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    var data = [
      {
          "name":       "Tiger Nixon",
          "position":   "System Architect",
          "salary":     "$3,120",
          "start_date": "2011/04/25",
          "office":     "Edinburgh",
          "extn":       "5421"
      },
      {
          "name":       "Garrett Winters",
          "position":   "Director",
          "salary":     "$5,300",
          "start_date": "2011/07/25",
          "office":     "Edinburgh",
          "extn":       "8422"
      }
  ]
    $(function () {
      $("#example1").DataTable({
        "data": data,
        columns: [
          { data: 'name' },
          { data: 'position' },
          { data: 'salary' },
          { data: 'office' }
      ],
        "responsive": true,
        "lengthChange": false,
        "autoWidth": false,
        "searching": false,
        "paging": true,
        "info":true,
        // "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
      }).buttons().container().appendTo('#example1_wrapper .col-md:eq(0)');
      // $('#example2').DataTable({
      //   "paging": true,
      //   "lengthChange": false,
      //   "searching": false,
      //   "ordering": true,
      //   "info": true,
      //   "autoWidth": false,
      //   "responsive": true,
      // });
    });
  }


}
