import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  path: any;
  isShowSkip: boolean;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        console.log(location.pathname);
        this.isShowSkip = this.router.url.indexOf('problem') < 0 ? false : true;
      });
  }

}
