import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class FirebaseService {

  stories: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  registerUser(email, password){
    console.log(email);
    return this.af.auth.createUser({
      email: email,
      password: password
    });
  }

  saveUserInfo(uid, name, email, job, hobby){
    return this.af.database.object('registeredUsers/'+ uid).set({
      name: name,
      email: email,
      job: job,
      hobby: hobby
    });
  }

  loginUsingEmai(email, password){
    return this.af.auth.login({
      email: email,
      password: password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

  getStories(){
    this.stories = this.af.database.list('/listings') as FirebaseListObservable<Story[]>
    return this.stories;
  }

}

interface Story{
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
}
