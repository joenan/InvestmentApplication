import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './security/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule, MatSortModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select';
import * as $ from 'jquery';
import { ApplyloanComponent } from './components/applyloan/applyloan.component'
import {MatStepperModule, MatButtonModule} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanStatusComponent } from './components/settings/loan-status/loan-status.component';
import { LoanTypeComponent } from './components/settings/loan-type/loan-type.component';
import { InterestComponent } from './components/settings/interest/interest.component';
import { InvestComponent } from './components/invest/invest.component';
import { SettingsLandingComponent } from './components/settings/settings-landing/settings-landing.component';
import { TransactionsComponent } from './components/transactions/transactions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    ApplyloanComponent,
    LoanStatusComponent,
    LoanTypeComponent,
    InterestComponent,
    InvestComponent,
    SettingsLandingComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatIconModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
