import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UrlDatasGridComponent } from '../url-datas-grid/url-datas-grid.component';


@Component({
  selector: 'app-request-input',
  templateUrl: './request-input.component.html',
  styleUrls: ['./request-input.component.scss']
})
export class RequestInputComponent implements OnInit {

  @ViewChild(UrlDatasGridComponent) urlsGrid: UrlDatasGridComponent;
  url: string = '';
  sendingGridData: any = [];

  requestForm = this.fb.group({
    inputUrl: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('form ', this.requestForm);
    // this.sendingGridData.push(this.requestForm.value);
    this.sendingGridData = [
      { make: 'Toyota' },
      { make: 'Ford' },
      { make: 'Porsche' }
    ];

  }

}
