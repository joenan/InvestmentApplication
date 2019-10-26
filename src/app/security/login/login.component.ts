import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.loadExternalScripts('assets/js/bootstrap.min.js').then(() => { console.log('success in loading')}).catch((r) => { console.log(r) });
    this.loadExternalScripts('assets/js/jquery.appear.min.js').then(() => { }).catch(() => { });
    this.loadExternalScripts('assets/js/jquery.incremental-counter.js').then(() => { }).catch(() => { });
    this.loadExternalScripts('assets/js/script.js').then(() => { }).catch(() => { });

  }

  private loadExternalScripts(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  login()  {
    this.router.navigate(['home']);
  }



}
