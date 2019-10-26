import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.loadExternalScripts('assets/js/jquery.min.js').then(() => { }).catch(() => { });
    // this.loadExternalScripts('assets/js/fastclick.js').then(() => { }).catch(() => { });
    // this.loadExternalScripts('assets/js/jquery.core.js').then(() => { }).catch(() => { });
    // this.loadExternalScripts('assets/js/jquery.app.js').then(() => { }).catch(() => { });

  }



  private loadExternalScripts(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }



  


}
