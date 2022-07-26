import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }
  onBtnClick(){
    this.router.navigate([]).then(result => { window.open("home-page/" , "_blank"); });
  }
  ngOnInit(): void {
  }

}
