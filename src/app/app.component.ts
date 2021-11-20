import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travel-Blog';
  showHeaderFooter: boolean = true;
  currentComponent: any;
  showLoader: boolean = true;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._router.events.subscribe((val) => {
      if(val instanceof NavigationStart) {
        this.showLoader = true;
      }
      if(val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        setTimeout(() => {
          this.showLoader = false;
        }, 2000);
      }
    })
  }

  ngOnInit() {
     this._router.navigate([''])
  }
}
