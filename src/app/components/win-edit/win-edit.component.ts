import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { StoreService } from '../../services/store.service';

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
    currentDate = new Date().toISOString().slice(0, 10);

    constructor(private store: StoreService) { }

    ngOnInit() {
        this.innerHeight$ = this.store.stream('innerheight').subscribe(res => this.innerHeight = res);
        this.innerHeight = window.innerHeight;
    }

    emitCloseEditWindow() {
        this.onclose.emit();
    }

    emitUpdateItem($event) {
        $event.id = this.payload_edit.id;
        $event.datum = this.currentDate;
        this.onupdate.emit($event);
    }

    ngOnDestroy() {
        this.innerHeight$.unsubscribe();
    }

}
