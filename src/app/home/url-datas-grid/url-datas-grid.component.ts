import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-url-datas-grid',
  templateUrl: './url-datas-grid.component.html',
  styleUrls: ['./url-datas-grid.component.scss']
})
export class UrlDatasGridComponent implements OnInit, OnChanges {

  @Input() sendingGridData: any = [];
  // columnDefs: any = [];
  rowData: any = [];

  columnDefs = [
    { field: 'make' },
  ];

  // rowData = [
  //   { make: 'Toyota' },
  //   { make: 'Ford' },
  //   { make: 'Porsche' }
  // ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.rowData);
    console.log(this.columnDefs);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      const data = changes.data.currentValue;
    }
    console.log('on changes');
    console.log('url data ', this.sendingGridData);
    this.rowData = this.sendingGridData;
    console.log(this.rowData);
    console.log(this.columnDefs);
  }

}
