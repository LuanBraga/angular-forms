import { Component, OnInit } from '@angular/core';


import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine-form',
  templateUrl: './cine-form.component.html',
  styleUrls: ['./cine-form.component.css']
})
export class CineFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  // email!: FormControl;

  // emailControl!: FormControl;

 

  // defaultLogin = {
  //   email: 'debugmode@gmail.com',
  //   password: '282828282'
  // }

  buyTicketForm!: FormGroup;

  get tickets():FormArray{
    return <FormArray>this.buyTicketForm.get('tickets');
  }

  ngOnInit(): void {
    // this.email = new FormControl('', Validators.required);
    // this.emailControl = new FormControl(this.defaultLogin.email, [Validators.required]);

    this.buyTicketForm = this.fb.group({
      emailControl: [null, [Validators.required]],
      phoneControl: [null],
      address: this.fb.group({
        streetControl: [],
        postalCodeControl: []
      }),
      tickets: this.fb.array([
        // this.createTicket()
      ], Validators.required)
    })

    console.log(this.buyTicketForm);
  }

  createTicket(): FormGroup{
    console.log(this.buyTicketForm);

    return this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required]
    })
  }

  buyTickets(event: Event){
    if(this.buyTicketForm.status == 'VALID') {
      console.log(this.buyTicketForm.value);
      console.log(event.type.valueOf())
    }
  }

  addTicket(){
    this.tickets.push(this.createTicket());
  }

}
