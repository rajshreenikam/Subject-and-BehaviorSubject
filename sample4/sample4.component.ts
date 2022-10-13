import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-sample4',
  templateUrl: './sample4.component.html',
  styleUrls: ['./sample4.component.css']
})
export class Sample4Component implements OnInit {

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
