/**
 * This file is part of the ng2-search package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {SearchModule} from "ng2-vardius-search";

@NgModule({
    imports: [
        BrowserModule,
        SearchModule.forRoot({
            placeholder: 'Search items...'
        })
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
