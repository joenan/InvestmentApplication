import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  pendingReview: any;
  pendingApproval: any;

  constructor(private router: Router, private service: ApiService) { }

  ngOnInit() {
     
  }

  gotoDashboard() {
    this.router.navigate(['home']);
  }
  gotoApplyLoan() {
    this.router.navigate(['home/applyloan']);
  }

  gotoSettings() {
    this.router.navigate(['home/settings']);
  }

  gotoInvest() {
    this.router.navigate(['home/investment']);
  }


   



}
