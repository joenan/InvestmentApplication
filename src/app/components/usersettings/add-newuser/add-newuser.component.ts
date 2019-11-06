import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-newuser',
  templateUrl: './add-newuser.component.html',
  styleUrls: ['./add-newuser.component.css']
})
export class AddNewuserComponent implements OnInit {

  isLinear = false;
  clientInformationFormGroup: FormGroup;
  
 

  constructor(private formBuilder: FormBuilder, private service:ApiService) {}

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
  }

    saveClientInformation() {
      this.service.saveClientInformation(this.clientInformationFormGroup.value).subscribe(res => {
          console.log(res)
      },
        error => {
          console.log(error.error.message)
        });
      }

}
