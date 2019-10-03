import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-todo-listing',
  templateUrl: './todo-listing.component.html',
  styleUrls: ['./todo-listing.component.less']
})
export class TodoListingComponent implements OnInit {

    @Output() ontoggledone: EventEmitter<any> = new EventEmitter<any>();
    @Output() ondelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() oneditwin: EventEmitter<any> = new EventEmitter<any>();
    @Output() onviewwin: EventEmitter<any> = new EventEmitter<any>();

    list_all = [];

    constructor(private apiService: ApiService,
        private store: StoreService) { }

    ngOnInit() {
        this.store.stream('list_all').subscribe(res => this.list_all = res);
    }

    emitOpenViewWin($event) {
        this.onviewwin.emit($event);
    }

    emitOpenEditWin($event) {
        this.oneditwin.emit($event);
    }

    emitDeleteItem($event) {
        this.ondelete.emit($event);
    }

    emitToggleDone($event) {
        this.ontoggledone.emit($event);
    }

}
