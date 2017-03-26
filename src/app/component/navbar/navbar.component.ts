import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FirebaseService } from '../../service/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public error: any;

  constructor(
    public af: AngularFire,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(event, name, email, password, job, hobby){
    event.preventDefault();
    this.firebaseService.registerUser(email, password).then((user) => {
      this.firebaseService.saveUserInfo(user.uid, name, email, job, hobby).then(() => {
        this.router.navigate(['']);
      }).catch((error) => {
        this.error = error;
      });
    }).catch((error) => {
      this.error = error;
      console.log(error);
      
    })
  }

  login(){
    this.af.auth.login();
  }

  logout(){
    this.af.auth.logout();
  }

}
