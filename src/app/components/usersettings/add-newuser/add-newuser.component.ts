import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-newuser',
  templateUrl: './add-newuser.component.html',
  styleUrls: ['./add-newuser.component.css']
})
export class AddNewuserComponent implements OnInit {

  isLinear = false;
  clientInformationFormGroup: FormGroup;
  witnessFormGroup: FormGroup;
  guarantorFormGroup: FormGroup;
  loanApplicationFormGroup: FormGroup;
 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.clientInformationFormGroup = this.formBuilder.group({
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

    this.witnessFormGroup = this.formBuilder.group({
      witnessId: ['', [Validators.required]],
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



    this.guarantorFormGroup = this.formBuilder.group({
      guarantorId: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      residentialAddress: ['', [Validators.required]],
      contactAddress: ['', [Validators.required]],
      signature: ['', [Validators.required]],
      dateCreated: ['', [Validators.required]],
      date: ['', [Validators.required]],
      clientId: this.clientInformationFormGroup.value,
      
    });

    this.loanApplicationFormGroup = this.formBuilder.group({
      applicationId: ['', [Validators.required]],
      amountInWords: ['', [Validators.required]],
      amout: ['', [Validators.required]],
      dateRequested: ['', [Validators.required]],
      period: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      statusId: ['', [Validators.required]],
      loanTypeId: ['', [Validators.required]],
      interestId: ['', [Validators.required]],
      guarantorId: this.guarantorFormGroup.value,
      witnessId: this.witnessFormGroup.value,
      clientId: this.clientInformationFormGroup.value,
      
    });

  }

}
