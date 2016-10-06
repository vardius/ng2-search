/**
 * This file is part of the ng2-search package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from "./search.component";
import {Config} from "./config";

@NgModule({
    imports: [CommonModule],
    declarations: [SearchComponent],
    exports: [SearchComponent]
})
export class SearchModule {
    static forRoot(config: Config): ModuleWithProviders {
        return {
            ngModule: SearchModule,
            providers: [
                {provide: Config, useValue: config }
            ]
        };
    }
}
