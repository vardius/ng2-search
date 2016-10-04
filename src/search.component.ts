import {Component, Output, EventEmitter, Optional, Input} from '@angular/core';
import {Config} from "./config";

@Component({
    selector: 'vardius-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    @Input() placeholder: string = '';
    @Output() search: EventEmitter<string> = new EventEmitter<string>();

    constructor(@Optional() config: Config) {
        if (config && this.placeholder.length > 0) {
            this.placeholder = config.placeholder;
        }
    }

    find(terms: string) {
        this.search.next(terms);
    }
}
