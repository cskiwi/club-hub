import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserService } from './services/user.service';
import { MaterialModule } from '../material-module/material-module.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'user', component: UserListComponent},
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/:id', component: UserDetailComponent}
];

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule
  ],
  providers: [UserService],
  exports: [RouterModule]
})
export class UserModule {
}
