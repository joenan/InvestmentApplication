import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  isLinear = false;
  clientFormGroup: FormGroup;
  investmentFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private service: ApiService) {

  }


  ngOnInit() {
    this.clientFormGroup = this._formBuilder.group({
      clientId: [''],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      nokAddress: ['', [Validators.required]],
      nokEmail: ['', [Validators.required]],
      nokName: ['', [Validators.required]],
      nokPhone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      nokRelationship: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      residentialAddress: ['', [Validators.required]],
      // signature:['', [Validators.required]],
      surname: ['', [Validators.required]],
      town: ['', [Validators.required]],


    });

    this.investmentFormGroup = this._formBuilder.group({
      investmentId: ['', [Validators.required]],
      amountInWords: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      dateInvested: ['', [Validators.required]],
      periodCycle: ['', [Validators.required]],
      // dueDate: ['', [Validators.required]],
      // statusId: ['', [Validators.required]],
      // interestId: ['', [Validators.required]],
      clientId: this.clientFormGroup.value,

    });


  }

  saveInvestmentInformation() {

    this.investmentFormGroup.value.clientId = this.clientFormGroup.value;
    this.service.saveInvestmentInformation(this.investmentFormGroup.value).subscribe(res => {
      console.log(res);
    },
      error => {
        console.log(error.error.message)
      });

  }

}
