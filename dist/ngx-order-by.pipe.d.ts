/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Order by pipe.
 */
import { PipeTransform } from '@angular/core';
export declare class NgxOrderByPipe implements PipeTransform {
    private value;
    private iterations;
    private HEALTHY_MAXIMUM_ITERATIONS_NUMBER;
    private thePipeIsOverloadingTheView;
    private overloadWarningHasBeenShown;
    static _orderByComparator(a: any, b: any): number;
    transform(input: any, config?: string): any;
    order(input: any, orderBy?: any): any;
}
export declare let ORDERBY_PROVIDERS: (typeof NgxOrderByPipe)[];
