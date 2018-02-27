import {Component, OnInit} from '@angular/core';
import {ClubService} from '../../services/club.service';
import {Router} from '@angular/router';
import {Club} from '../../models/club.model';

@Component({
  selector: 'app-club-create',
  templateUrl: './club-create.component.html',
  styleUrls: ['./club-create.component.scss']
})
export class ClubCreateComponent implements OnInit {

  constructor(
    private clubService: ClubService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit(club: Club) {
    this.clubService.create(club).subscribe(r => {
      this.router.navigate([`/user/`, r.data._id]);
    });
  }

}
