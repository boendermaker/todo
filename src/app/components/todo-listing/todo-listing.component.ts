import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-todo-listing',
  templateUrl: './todo-listing.component.html',
  styleUrls: ['./todo-listing.component.less']
})
export class TodoListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
