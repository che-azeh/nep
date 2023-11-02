import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-check-user-status',
  templateUrl: './check-user-status.page.html',
  styleUrls: ['./check-user-status.page.scss'],
})
export class CheckUserStatusPage implements OnInit {

  constructor(
    public location: Location,

  ) { }

  ngOnInit() {
  }

}
