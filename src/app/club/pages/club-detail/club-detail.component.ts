import {Component, OnInit} from '@angular/core';
import {Club} from '../../models/club.model';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ClubService} from '../../services/club.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.scss']
})
export class ClubDetailComponent implements OnInit {
  club$: Observable<Club>;

  constructor(
    private route: ActivatedRoute,
    private clubService: ClubService,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.club$ =
      this.route.paramMap.switchMap(
        (params: ParamMap) => {
          return this.clubService.read(params.get('id'));
        }
      );
  }

  addUser(club: Club) {
    this.clubService.addUser(club, '5a93e17fcba3dd0014f37e5a').subscribe(r => {
      this.snackbar.open('Message archived');
    });
  }
}
