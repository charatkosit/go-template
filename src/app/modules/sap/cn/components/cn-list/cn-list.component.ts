import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-cn-list',
  templateUrl: './cn-list.component.html',
  styleUrls: ['./cn-list.component.css']
})
export class CnListComponent implements OnInit {

  constructor() { }

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
}
