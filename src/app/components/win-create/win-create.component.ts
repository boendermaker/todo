import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'app-win-create',
    templateUrl: './win-create.component.html',
    styleUrls: ['./win-create.component.less']
})
export class WinCreateComponent implements OnInit {

    @Output() onsave: EventEmitter<any> = new EventEmitter<any>();
    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    innerHeight$ = null;
    innerHeight: Number;

    constructor(private store: StoreService) { }

    ngOnInit() {
        this.innerHeight$ = this.store.stream('innerheight').subscribe(res => this.innerHeight = res);
        this.innerHeight = window.innerHeight;
    }

    emitCloseCreateWindow() {
        this.onclose.emit();
    }

    emitSaveItem(payload) {
        payload.datum = new Date().toISOString().slice(0, 10);
        payload.done = 0;
        this.onsave.emit(payload);
    }
}
