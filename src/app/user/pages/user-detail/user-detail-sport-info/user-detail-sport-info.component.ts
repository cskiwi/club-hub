import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-detail-sport-info',
  templateUrl: './user-detail-sport-info.component.html',
  styleUrls: ['./user-detail-sport-info.component.scss']
})
export class UserDetailSportInfoComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
