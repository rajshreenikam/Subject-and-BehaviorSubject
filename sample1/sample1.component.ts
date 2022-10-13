import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {
   
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
