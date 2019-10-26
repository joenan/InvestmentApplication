import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './security/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ApplyloanComponent } from './components/applyloan/applyloan.component';
import { InterestComponent } from './components/settings/interest/interest.component';
import { LoanStatusComponent } from './components/settings/loan-status/loan-status.component';
import { LoanTypeComponent } from './components/settings/loan-type/loan-type.component';
import { SettingsLandingComponent } from './components/settings/settings-landing/settings-landing.component';
import { InvestComponent } from './components/invest/invest.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'applyloan', component: ApplyloanComponent },
      { path: 'interestrate', component: InterestComponent },
      { path: 'loanstatus', component: LoanStatusComponent },
      { path: 'loantype', component: LoanTypeComponent },
      { path: 'settings', component: SettingsLandingComponent },
      { path: 'investment', component: InvestComponent },
    
    ]
  },
 
  
 
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
