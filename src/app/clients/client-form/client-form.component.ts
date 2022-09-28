import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  // create a new Form Group first
  clientForm: FormGroup;
  // creating new form comntrols with validation fopr each form element
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  telephoneNumber = new FormControl('');
  companyName = new FormControl('', Validators.required);

  /*
  here we are creating a new formbuilder instance and settingthe form controls as properties of the new group we created using the
  form builder object and then we make clinetForm equivalent to the formgroup
   */
  constructor(fb: FormBuilder) {
    this.clientForm = fb.group({
        firstname: this.firstname,
        lastname: this.lastname,
      email: this.email,
      telephoneNumber: this.telephoneNumber,
      companyName: this.companyName
      });
  }
  ngOnInit() {
  }
  saveClient() {
    console.log(this.clientForm);
  }

}
