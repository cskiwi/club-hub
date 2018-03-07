import {NgModule} from '@angular/core';
import {ClubListComponent} from './pages/club-list/club-list.component';
import {ClubDetailComponent} from './pages/club-detail/club-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {ClubService} from './services/club.service';
import {ClubCreateComponent} from './pages/club-create/club-create.component';
import {ClubFormGeneralComponent} from './components/club-form-general/club-form-general.component';
import {SharedModule} from '../_shared/shared.module';


const routes: Routes = [
  {path: 'club', component: ClubListComponent},
  {path: 'club/create', component: ClubCreateComponent},
  {path: 'club/:id', component: ClubDetailComponent},
  // {path: 'user/:id/edit', component: UserEditComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ClubListComponent, ClubDetailComponent, ClubCreateComponent, ClubFormGeneralComponent],
  providers: [ClubService],
  exports: [RouterModule]
})
export class ClubModule {
}
