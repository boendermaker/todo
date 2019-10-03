import { Component, HostListener } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'todolist';

    @HostListener('window:resize', ['$event']) onResize($event) {
        this.store.add('innerheight', $event.target.innerHeight);
    }

    constructor(private store: StoreService) {}

    ngOnInit() {
        this.store.createSubject('innerheight');
    }

}
