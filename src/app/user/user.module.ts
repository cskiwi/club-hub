import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './pages/user-list/user-list.component';
import {UserDetailComponent} from './pages/user-detail/user-detail.component';
import {UserCreateComponent} from './pages/user-create/user-create.component';
import {UserService} from './services/user.service';
import {MaterialModule} from '../material-module/material-module.module';
import {FormsModule} from '@angular/forms';
import {UserFormGeneralComponent} from './components/user-form-general/user-form-general.component';
import {UserDetailSportInfoComponent} from './pages/user-detail/user-detail-sport-info/user-detail-sport-info.component';
import {UserDetailSportTimelineComponent} from './pages/user-detail/user-detail-sport-timeline/user-detail-sport-timeline.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserEditComponent} from './pages/user-edit/user-edit.component';

const routes: Routes = [
  {path: 'user', component: UserListComponent},
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'user/:id/edit', component: UserEditComponent}
];

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserFormGeneralComponent,
    UserDetailSportInfoComponent,
    UserDetailSportTimelineComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [UserService],
  exports: [RouterModule]
})
export class UserModule {
}
