import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {GetApiService} from "./get-api.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,private api:GetApiService) { }
  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      console.warn("get api data",data);
    })
  }

}
