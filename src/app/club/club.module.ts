import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClubListComponent} from './pages/club-list/club-list.component';
import {ClubDetailComponent} from './pages/club-detail/club-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ClubService} from './services/club.service';
import { ClubCreateComponent } from './pages/club-create/club-create.component';


const routes: Routes = [
  {path: 'club', component: ClubListComponent},
  {path: 'club/create', component: ClubCreateComponent},
  {path: 'club/:id', component: ClubDetailComponent},
  // {path: 'user/:id/edit', component: UserEditComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [ClubListComponent, ClubDetailComponent, ClubCreateComponent],
  providers: [ClubService],
  exports: [RouterModule]
})
export class ClubModule {
}
