import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'u-table',
  templateUrl: './u-table.component.html',
  styleUrls: ['./u-table.component.css']
})
export class UTableComponent implements OnInit {

  constructor(private Tableservice: TableService ) { 

  }

  ngOnInit() {
    this.Tableservice.getAllEmployee().then( (funcionario)=>{
      console.log(funcionario);
    })
  }

}
