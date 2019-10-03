import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-win-edit',
    templateUrl: './win-edit.component.html',
    styleUrls: ['./win-edit.component.less']
})
export class WinEditComponent implements OnInit {

    @Input() payload_edit;
    @Output() onupdate: EventEmitter<any> = new EventEmitter<any>();
    @Output() onclose: EventEmitter<any> = new EventEmitter<any>();

    innerHeight$ = null;
    innerHeight: Number;

    constructor(private store: StoreService) { }

    ngOnInit() {
        this.innerHeight$ = this.store.stream('innerheight').subscribe(res => this.innerHeight = res);
        this.innerHeight = window.innerHeight;
    }

    emitCloseEditWindow() {
        this.onclose.emit();
    }

    emitUpdateItem(payload) {
        payload.id = this.payload_edit.id;
        payload.datum = new Date().toISOString().slice(0, 10);
        this.onupdate.emit(payload);
    }

    ngOnDestroy() {
        this.innerHeight$.unsubscribe();
    }

}
