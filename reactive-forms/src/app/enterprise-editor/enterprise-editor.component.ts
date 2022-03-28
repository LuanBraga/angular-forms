import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-enterprise-editor',
  templateUrl: './enterprise-editor.component.html',
  styleUrls: ['./enterprise-editor.component.css']
})
export class EnterpriseEditorComponent implements OnInit {
  //gerate a new formControl instance
  cnpj = new FormControl('')

  constructor() {
    console.log(this.cnpj);
  }


  ngOnInit(): void {
    this.cnpj.valueChanges.subscribe(v => console.log(v));
  }

  handleControlValue(){
    this.cnpj.setValue('12750548705');
  }

}
