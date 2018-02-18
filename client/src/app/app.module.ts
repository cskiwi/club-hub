import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from './material-module/material-module.module';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserDetailComponent } from './user/components/user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    UserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
