import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  
  stories: any;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.getStories().subscribe(stories => {
      this.stories = stories;
    })
  }

}
