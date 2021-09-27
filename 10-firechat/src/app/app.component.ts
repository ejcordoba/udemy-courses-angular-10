import { Component } from '@angular/core';
<<<<<<< HEAD
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
=======
>>>>>>> cb3893019e98a7a7c70577bd6878a9b0985a2df6

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  public chats: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.chats = firestore.collection('chats').valueChanges();
  }
=======
>>>>>>> cb3893019e98a7a7c70577bd6878a9b0985a2df6
  title = 'firechat';
}
