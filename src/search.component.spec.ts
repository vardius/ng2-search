/**
 * This file is part of the ng2-search package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import {Component} from "@angular/core";
import {SearchComponent} from "./search.component";

@Component({
    template: `<vardius-search (search)="search($event)"></vardius-search>`
})
class TestHostComponent {
    terms: string = '';

    search(terms: string) {
        this.terms = terms;
    }
}

describe('SearchComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let testHost: TestHostComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, SearchComponent]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should raise search event', () => {
        let query = 'query string';
        let box = fixture.debugElement.query(By.css('.search-box'));
        box.nativeElement.value = query;
        box.triggerEventHandler('input', null);
        expect(testHost.terms).toBe(query);
    });
});
