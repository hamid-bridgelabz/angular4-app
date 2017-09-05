import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,MdMenuModule,MdInputModule,MdCardModule,MdIconModule,
         MdCheckboxModule,MdTabsModule,MdToolbarModule,MdSidenavModule,MdGridListModule,MdListModule
        } from '@angular/material';
// import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'home', component: HomeComponent},
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundComponent }
];

//    MdContentModule,
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  exports:[
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdTabsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdMenuModule,
    MdIconModule,
    MdCardModule
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdTabsModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdCardModule,
    MdSidenavModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
