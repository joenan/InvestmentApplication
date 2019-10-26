import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-landing',
  templateUrl: './settings-landing.component.html',
  styleUrls: ['./settings-landing.component.css']
})
export class SettingsLandingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  interestSettingsClicked() {
   this.router.navigate(['home/interestrate']);
  }
  loanTypeSettingsClicked() {
    this.router.navigate(['home/loantype']);
  }
  loanStatusSettingsClicked() {
    this.router.navigate(['home/loanstatus']);
  }

}
