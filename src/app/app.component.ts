import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel';
  // collection = [];
  // constructor() {
  //   for (let i = 1; i <= 100; i++) {
  //     let Obj = { 'name': `name ${i}` }
  //     this.collection.push(Obj);
  //   }
  // }
}