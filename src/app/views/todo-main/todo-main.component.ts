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
    currentDate = new Date().toLocaleString();
    payload_delete = 0;
    payload_edit = {};
    payload_view = {};
    win = { create: false, edit: false, tester: true };
    modal = {delete: false};

    constructor(private apiService: ApiService,
                private store: StoreService) { }

    ngOnInit() {
        this.createStores();
        this.store.stream('loading').subscribe(res => this.loading = res);

        this.loadTodoListing();
    }

    createStores() {
        this.store.createSubject('loading');
        this.store.createSubject('list_all');
    }

    loadTodoListing() {
        this.store.add('loading', true);
        this.apiService.getAllTodos().subscribe((res) => {
            this.store.add('list_all', res);
            this.store.add('loading', false);
        });
    }

    toggleDone($event) {
        const id = +$event.id;
        const done = +$event.done === 0 ? 1 : 0
        const payload = {id: id, done: done};
        
        this.store.add('loading', true);
        this.apiService.toggleDone(payload).subscribe((res) => {
            this.store.add('loading', false);
            this.loadTodoListing();
        },
        (err) => { 
            this.store.add('loading', false);
        });
    }

    deleteItem($event) {
        this.store.add('loading', true);
        this.apiService.deleteTodoItem($event).subscribe((res) => {
            this.store.add('loading', false);
            this.loadTodoListing();
            this.closeModalDelete();
        },
        (err) => { 
            this.store.add('loading', false);
        });
    }

    saveItem($event) {
        this.store.add('loading', true);
        this.apiService.saveTodoItem($event).subscribe((res) => {
            this.store.add('loading', false);
            this.loadTodoListing();
            this.closeWinCreate();
        },
        (err) => { 
            this.store.add('loading', false);
        });
    }

    updateItem($event) {
        this.store.add('loading', true);
        this.apiService.updateTodoItem($event).subscribe((res) => {
            this.store.add('loading', false);
            this.loadTodoListing();
            this.closeWinEdit();
        },
        (err) => { 
            this.store.add('loading', false);
        });
    }

    ctrlModal(name, todo) {
        this.modal[name] = todo;
    }

    ctrlWin(name, todo) {
        this.win[name] = todo;
    }

    openModalDelete($event) {
        this.payload_delete = $event;
        this.ctrlModal('delete', true);
    }

    openWinView($event) {
        this.payload_view = $event;
        this.ctrlWin('view', true);
    }

    openWinCreate() {
        this.ctrlWin('create', true);
    }

    openWinEdit($event) {
        this.payload_edit = $event;
        this.ctrlWin('edit', true);
    }

    closeModalDelete() {
        this.ctrlModal('delete', false);
    }

    closeWinView() {
        this.ctrlWin('view', false);
    }

    closeWinCreate() {
        this.ctrlWin('create', false);
    }

    closeWinEdit() {
        this.ctrlWin('edit', false);
    }

}
