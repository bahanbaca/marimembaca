import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PoststoriesComponent } from './component/poststories/poststories.component';
import { StoryComponent } from './component/story/story.component';
import { HomeComponent } from './component/home/home.component';
import { StoriesComponent } from './component/stories/stories.component';
import { FirebaseService } from './service/firebase.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyBL6Z8YtgxjZGDrrHwNyiF4j7JzlgtIWuk',
  authDomain: 'projectweb-f3b16.firebaseapp.com',
  databaseURL: 'https://projectweb-f3b16.firebaseio.com',
  storageBucket: 'projectweb-f3b16.appspot.com',
  messagingSenderId: '211093886245'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'poststories', component: PoststoriesComponent },
  { path: 'story', component: StoryComponent },
  { path: 'stories', component: StoriesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PoststoriesComponent,
    StoryComponent,
    HomeComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
    

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
