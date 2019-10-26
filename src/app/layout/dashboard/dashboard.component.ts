import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pendingApproval: any;
  pendingReview: any;

  constructor(private router:Router, private service:ApiService) { }

  ngOnInit() {
    // this.getAllPendingReviews();
  }


  gotoPendingReview() {
    this.router.navigate(['home/review']);
  }

  gotoPendingApproval() {
    this.router.navigate(['home/approve']);
  }





}
