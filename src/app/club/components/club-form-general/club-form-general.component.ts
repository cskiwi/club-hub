import {Component, Input, OnInit} from '@angular/core';
import {Club} from '../../models/club.model';

@Component({
  selector: 'app-club-form-general',
  templateUrl: './club-form-general.component.html',
  styleUrls: ['./club-form-general.component.scss']
})
export class ClubFormGeneralComponent implements OnInit {
  @Input() club: Club;

  constructor() { }

  ngOnInit() {
  }

}
