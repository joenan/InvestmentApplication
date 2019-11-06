import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  isLinear = false;
  investorFormGroup: FormGroup;
  applicationFormGroup: FormGroup;
 



  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.investorFormGroup = this._formBuilder.group({
      amount: ['', [Validators.required]],
      amountInWords: ['', [Validators.required]],
      clientId: ['', [Validators.required]],
      dateCreated: ['', [Validators.required]],
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      investmentList: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      nokAddress: ['', [Validators.required]],
      nokEmail: ['', [Validators.required]],
      nokName: ['', [Validators.required]],
      nokPhone: ['', [Validators.required]],
      nokRelationship: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      residentialAddress: ['', [Validators.required]],
      signature: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      town: ['', [Validators.required]],
      dateInvested: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      interestId: ['', [Validators.required]],
      investmentId: ['', [Validators.required]],
      periodCycle:  ['', [Validators.required]]
    });

    this.applicationFormGroup = this._formBuilder.group({
      clientId: ['', [Validators.required]],
      dateCreated: ['', [Validators.required]],
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      investmentList: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      amountInWords: ['', [Validators.required]],
      dateInvested: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      interestId: ['', [Validators.required]],
      investmentId: ['', [Validators.required]],
      periodCycle: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      nokAddress: ['', [Validators.required]],
      nokEmail: ['', [Validators.required]],
      nokName: ['', [Validators.required]],
      nokPhone: ['', [Validators.required]],
      nokRelationship: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      residentialAddress: ['', [Validators.required]],
      signature: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      town: ['', [Validators.required]]
    });
    


  }
}