import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.css']
})
export class LoanTypeComponent implements OnInit {


  loanTypeList: any;
  loanTypeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllLoanTypes();

    this.loanTypeForm = this.formBuilder.group({
      loanTypeId: [''],
      description: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loanTypeForm.valid) {
      this.service.saveLoanType(this.loanTypeForm.value).subscribe(res => {
        this.loanTypeForm.reset();
        this.getAllLoanTypes();
        this.toastr.success(res.message, 'Success');
      },
        error => {
          console.log(error.error.message)
        });
    }
  }
  getAllLoanTypes() {
    this.service.getLoanTypes().subscribe(res => {
      this.loanTypeList = res;
    }, error => {
      console.log(error.error.message)
    });
  }

  editLoanType(data: any) {
      this.loanTypeForm.patchValue(data);
  }
  deleteLoanType(id: any) {
      this.service.deleteLoanTypes(id).subscribe(res=> {
        this.getAllLoanTypes();
      }, error => {
        console.log(error.error.message)
      });
  }


}
