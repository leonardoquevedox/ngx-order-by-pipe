/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxOrderByPipe } from './ngx-order-by.pipe'

@NgModule({
    imports: [CommonModule],
    declarations: [NgxOrderByPipe],
    exports: [NgxOrderByPipe]
})
export class NgxOrderByPipeModule { }