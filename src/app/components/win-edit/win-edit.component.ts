import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'app-win-edit',
    templateUrl: './win-edit.component.html',
    styleUrls: ['./win-edit.component.less']
})
export class WinEditComponent implements OnInit {

    @Input() payload_edit;
    @Output() ondelete: EventEmitter<any> = new EventEmitter<any>();
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

    emitDeleteItem($event) {
        this.ondelete.emit($event);
    }

    ngOnDestroy() {
        this.innerHeight$.unsubscribe();
    }

}
