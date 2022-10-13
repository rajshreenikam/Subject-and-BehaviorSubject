import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {

  username: any;
  constructor(private _demo: DemoService) { 
    this._demo.userName.subscribe(res => {
      this.username = res;
    })
  }

  ngOnInit(): void {
  }
  updateUserName(uname) {
    this._demo.userName.next(uname.value);
   }
}
