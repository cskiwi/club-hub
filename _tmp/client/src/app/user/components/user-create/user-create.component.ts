import { Component, OnInit } from '@angular/core';
import User from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
    this.userService.createUser(this.user).subscribe(r => {
      this.router.navigate([`user`, {id: r.data._id}])
    });
  }

}
