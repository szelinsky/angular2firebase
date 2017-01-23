import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  cams: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire ) {
    this.cams = af.database.list('/cams');

  }
}
