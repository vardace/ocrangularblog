import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [{
    title: "J'apprends à programmer",
    content: "Ceci est un test",
    loveIts: 0,
    created_at: new Date()
  }, {
    title: "Je persiste !",
    content: "Même si c'est dur",
    loveIts: 1,
    created_at: new Date()
  }, {
    title: "Il le faut !",
    content: "Je taf bientot dessus et ils pensent que je sais faire.",
    loveIts: -1,
    created_at: new Date()
  }, {
    title: "Liste de course",
    content: "Lait en poudre. C'est tout. 150 paquets de lait en poudre",
    loveIts: 3,
    created_at: new Date()
  }
  ]
}