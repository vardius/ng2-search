import {Component, Output, EventEmitter, Optional} from '@angular/core';
import {Config} from "./config";

@Component({
    selector: 'vardius-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    @Output() search: EventEmitter<string> = new EventEmitter<string>();

    protected placeholder:string = 'Search...';

    constructor(@Optional() config: Config) {
        if (config) {
            this.placeholder = config.placeholder;
        }
    }

    find(terms: string) {
        this.search.next(terms);
    }
}
