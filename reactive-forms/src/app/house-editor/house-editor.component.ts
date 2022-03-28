import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
    })
  })

  constructor(private fb: FormBuilder) {
    console.log(this.locationForm)
   }

  ngOnInit(): void {
  }

  updateLocation() {
    this.locationForm.patchValue({
      country: 'Brazil',
      address: {
        street: 'Rua Nilda Lima'
      }
    })
  }

  onSubmit() {
    console.log(this.locationForm.value)
  }

}
