import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-house-editor',
  templateUrl: './house-editor.component.html',
  styleUrls: ['./house-editor.component.css']
})
export class HouseEditorComponent implements OnInit {
  locationForm = this.fb.group({
    country: ['', Validators.required],
    state: [''],
    code: [''],
    address: this.fb.group({
      city: [''],
      street: [''],
      number: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })

  get aliases() {
    return this.locationForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    console.log(this.locationForm)
   }

  ngOnInit(): void {
    console.log(this.aliases);
  }

  updateLocation() {
    this.locationForm.patchValue({
      country: 'Brazil',
      address: {
        street: 'Rua Nilda Lima'
      }
    })
  }

  addAlias(a: any) {
    this.aliases.push(this.fb.control(''));
    console.log(a);
  }

  onSubmit() {
    console.log(this.locationForm.value)
  }

}
