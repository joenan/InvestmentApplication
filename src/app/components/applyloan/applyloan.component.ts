import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {
  isLinear = false;
  clientInformationFormGroup: FormGroup;
  witnessFormGroup: FormGroup;
  guarantorFormGroup: FormGroup;
  loanApplicationFormGroup: FormGroup;
  stepperValue:any = 'matStepperNext';


  constructor(private _formBuilder: FormBuilder, private service:ApiService) { }

  ngOnInit() {
    this.createFormControls();
  }

  

  createFormControls() {
    this.clientInformationFormGroup = this._formBuilder.group({
      clientId: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      residentialAddress: ['', [Validators.required]],
      town: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nokName: ['', [Validators.required]],
      nokAddress: ['', [Validators.required]],
      nokPhone: ['', [Validators.required]],
      nokEmail: ['', [Validators.required]],
      nokRelationship: ['', [Validators.required]],
    });

    this.witnessFormGroup = this._formBuilder.group({
      witnessId: [''],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      residentialAddress: ['', [Validators.required]],
      contactAddress: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      signature: ['', [Validators.required]],
      clientId: this.clientInformationFormGroup.value
    });



    this.guarantorFormGroup = this._formBuilder.group({
      guarantorId: [''],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      residentialAddress: ['', [Validators.required]],
      contactAddress: ['', [Validators.required]],
      signature: ['', [Validators.required]],
      // dateCreated: ['', [Validators.required]],
      date: ['', [Validators.required]],
      clientId: this.clientInformationFormGroup.value,

    });

    this.loanApplicationFormGroup = this._formBuilder.group({
      applicationId: ['', [Validators.required]],
      amountInWords: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      dateRequested: ['', [Validators.required]],
      periodCycle: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      statusId: ['', [Validators.required]],
      loanTypeId: ['', [Validators.required]],
      interestId: ['', [Validators.required]],
      guarantorId: this.guarantorFormGroup.value,
      witnessId: this.witnessFormGroup.value,
      clientId: this.clientInformationFormGroup.value,

    });
  }

  saveApplicationInformation() {
    this.loanApplicationFormGroup.value.clientId = this.clientInformationFormGroup.value;
    this.loanApplicationFormGroup.value.guarantorId = this.guarantorFormGroup.value;
    this.loanApplicationFormGroup.value.witnessId = this.witnessFormGroup.value;

    this.service.saveApplicationInformation(this.loanApplicationFormGroup.value).subscribe(res => {
        console.log(res)
    },
      error => {
        console.log(error.error.message)
      });
    }

}