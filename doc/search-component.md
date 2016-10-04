#Search Component
##Advanced usage
```typescrip
@Component({
    selector: 'my-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],

})
export class ItemsComponent implements OnInit {
    private searchTermStream = new Subject<string>();
    private terms: string = '';
    
    constructor(private itemService: ItemService) {}

    ngOnInit() {    
        const searchSource = this.searchTermStream
            .debounceTime(1000)
            .distinctUntilChanged()
            .map(searchTerm => {
                return {search: searchTerm};
            });
        
        searchSource
            //you can merge more subjects
            //.merge(pageSource)
            .startWith({search: this.terms})
            .subscribe((params: {search: string}) => {
                let query = {query: params.search};
                this.itemService.loadAll(query);
                this.items$ = this.itemService.entities$;
            });
    }

    search(query: string) {
        this.terms.next(query);
    }
}
```
```html
<vardius-search (search)="search($event)"></vardius-search>
```
If you want to use Search Box in other component
set up you terms as an input
```typescrip
@Input() terms: string = '';
```
and then inplement `OnChanges` interface
```typescrip
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if (changes['terms']) {
            let chng = changes['terms'];
            if (chng.currentValue !== chng.previousValue) {
                this.searchTermStream.next(chng.currentValue);
            }
        }
    }
```
