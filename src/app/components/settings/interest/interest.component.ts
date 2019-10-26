import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { isEmpty } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  loanInterestRate: any;
  investmentInterestRate: any;

  loanInterestRateList: any = [];
  investmentInterestRateList: any = [];

  constructor(private service: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getLoanInterestRate();
    this.getInvestmentInterestRate();
  }
  getInvestmentInterestRate() {
    this.service.getInvestmentInterestRate().subscribe(res => {
      
      this.investmentInterestRateList = res;
    },
      error => {
        console.log(error.error.message)
      });
  }
  getLoanInterestRate() {
    this.service.getLoanInterestRate().subscribe(res => {
     
      this.loanInterestRateList = res;
    },
      error => {
        console.log(error.error.message)
      });
  }

  setLoanInterestRate() {

    let loanObjectToSave = {
      loanInterestRate: this.loanInterestRate
    }

    this.service.saveLoanInterestRate(loanObjectToSave).subscribe(res => {
     this.getLoanInterestRate();
      this.toastr.success(res.message, 'Success');

    }, error => {
      console.log(error.error.message);
    });


  }

  setInvestmentInterestRate() {
    let investmentObjectToSave = {
      investmentInterestRate: this.investmentInterestRate
    }

    this.service.saveInvestmentInterestRate(investmentObjectToSave).subscribe(res => {
     
      this.getInvestmentInterestRate();
      this.toastr.success(res.message, 'Success');
      

    }, error => {
      console.log(error.error.message);
    });
  }

}
