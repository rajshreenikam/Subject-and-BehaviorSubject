import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.css']
})
export class Sample3Component implements OnInit {

  username: any;
  constructor(private _demo: DemoService) { 
    this._demo.userName.subscribe(res => {
      this.username = res;
    })
  }

  ngOnInit() {
  }
  updateUserName(uname) {
    this._demo.userName.next(uname.value);
   }
}
