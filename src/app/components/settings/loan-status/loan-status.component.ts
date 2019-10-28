import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.css']
})
export class LoanStatusComponent implements OnInit {
  loanStatusList: any;
  loanStatusForm: FormGroup;
  loanList: any = [];

  constructor(private formBuilder: FormBuilder, private service: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllLoanStatus();

    this.loanStatusForm = this.formBuilder.group({
      loanStatusId: [''],
      description: ['', [Validators.required]],
    });
  }
  onSubmit() {
    if (this.loanStatusForm.valid) {
      this.service.saveLoanStatus(this.loanStatusForm.value).subscribe(res => {
        this.loanStatusForm.reset();
        this.toastr.success(res.message, 'Success');
        this.getAllLoanStatus();
      },
        error => {
          console.log(error.error.message)
        });
    }
  }
  getAllLoanStatus() {
    this.service.getAllLoanStatus().subscribe(res => {
      this.loanList = res;
     
    }, error => {
      console.log(error.error.message)
    });
  }

  editLoanStatus(data: any) {
    this.loanStatusForm.patchValue(data);
  }
  deleteLoanType(id: any) {
    this.service.deleteLoanStatus(id).subscribe(res => {
      this.getAllLoanStatus();
    }, error => {
      console.log(error.error.message)
    });
  }


}