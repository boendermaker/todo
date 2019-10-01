import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'app-todo-main',
    templateUrl: './todo-main.component.html',
    styleUrls: ['./todo-main.component.less']
})

export class TodoMainComponent implements OnInit {

    loading = false;

    constructor(private apiService: ApiService,
                private store: StoreService) { }

    ngOnInit() {
        this.createStores();
        this.store.stream('loading').subscribe(res => this.loading = res);

        this.loadTodoListing();

    }

    createStores() {
        this.store.createSubject('loading');
        this.store.createSubject('todolisting');
    }

    loadTodoListing() {
        this.store.add('loading', true);
        this.apiService.getAllTodos().subscribe((res) => {
            this.store.add('todolisting', res);
            this.store.add('loading', false);
        });        
    }

}
