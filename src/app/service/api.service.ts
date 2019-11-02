import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  public subject = new Subject<any>();

  // baseGetUrl: string = '/RemitaStatus.aspx';
  // basePostUrl: string = '/RemitaPostStatus.aspx';

  baseUrl: string = '/InvestmentApplicationApi/api/v1/loan'


  constructor(private http: HttpClient) { }

  sendMessage(message: any) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }


  saveLoanInterestRate(value: any): any {
    return this.http.post(this.baseUrl + '/loanInterestRate', value);
  }
  getLoanInterestRate() {
    return this.http.get(this.baseUrl + '/loanInterestRate');
  }
  saveInvestmentInterestRate(value: any): any {
    return this.http.post(this.baseUrl + '/investmentInterestRate', value);
  }
  getInvestmentInterestRate() {
    return this.http.get(this.baseUrl + '/investmentInterestRate');
  }

  saveLoanType(value: any): any {
    return this.http.post(this.baseUrl + '/loanType', value);
  }
  getLoanTypes() {
    return this.http.get(this.baseUrl + '/loanType');
  }
  deleteLoanTypes(id: any) {
    return this.http.delete(this.baseUrl + '/loanType/'+id);
  }

  saveLoanStatus(value: any): any {
    return this.http.post(this.baseUrl + '/loanStatus', value);
  }
  
  getAllLoanStatus() {
    return this.http.get(this.baseUrl + '/loanStatus');
  }
  deleteLoanStatus(id: any) {
    return this.http.delete(this.baseUrl + '/loanStatus/'+id);
  }

}
