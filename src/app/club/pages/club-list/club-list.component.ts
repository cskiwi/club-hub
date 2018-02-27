import { Component, OnInit } from '@angular/core';
import {User} from '../../../user/models/user.model';
import {MatTableDataSource} from '@angular/material';
import {ClubService} from '../../services/club.service';
import {Club} from '../../models/club.model';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent implements OnInit {

  clubList: MatTableDataSource<Club>;
  displayedColumns = ['id', 'name'];

  constructor(public clubService: ClubService) {
  }

  ngOnInit() {
    this.clubList = new MatTableDataSource<User>();
    this.clubService.list().subscribe(r => this.clubList.data = r);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.clubList.filter = filterValue;
  }
}
