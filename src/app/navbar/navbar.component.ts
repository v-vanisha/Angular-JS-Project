import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  onBtnClick(){
    this.router.navigate([]).then(result => { window.open("data-table/" , "_blank"); });
  }
  onHomeClick(){
    this.router.navigate([]).then(result => { window.open("home-page/" , "_blank"); });
  }
  ngOnInit(): void {
  }

}
