import { CommonModule } from '@angular/common';
import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxOrderByPipe {
    constructor() {
        this.value = [];
        this.iterations = 1;
        this.HEALTHY_MAXIMUM_ITERATIONS_NUMBER = 200;
        this.thePipeIsOverloadingTheView = false;
        this.overloadWarningHasBeenShown = false;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    static _orderByComparator(a, b) {
        if (a === null || typeof a === 'undefined')
            a = 0;
        if (b === null || typeof b === 'undefined')
            b = 0;
        if (a instanceof Date && b instanceof Date) {
            if (a < b)
                return -1;
            else if (a > b)
                return 1;
            else
                return 0;
        }
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0;
    }
    /**
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */
    transform(input, config = '+') {
        if (!input)
            return input;
        this.iterations++;
        this.thePipeIsOverloadingTheView = this.iterations > this.HEALTHY_MAXIMUM_ITERATIONS_NUMBER;
        if (this.thePipeIsOverloadingTheView && !this.overloadWarningHasBeenShown)
            console.warn(NgxOrderByPipe.name + `: the change detection strategy is making the pipe run too many times in a row. 
            Please, consider changing it to ChangeStrategy.OnPush in order to make change detections only when necessary.`);
        this.value = [...input];
        /** @type {?} */
        let value = this.value;
        if (!Array.isArray(value))
            return value;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            /** @type {?} */
            let propertyToCheck = !Array.isArray(config) ? config : config[0];
            /** @type {?} */
            let desc = propertyToCheck.substr(0, 1) == '-';
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? value.sort() : value.sort().reverse();
            }
            else {
                /** @type {?} */
                let property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    /** @type {?} */
                    let aValue = a[property];
                    /** @type {?} */
                    let bValue = b[property];
                    /** @type {?} */
                    let propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (let j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc
                        ? NgxOrderByPipe._orderByComparator(aValue, bValue)
                        : -NgxOrderByPipe._orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            return value.sort(function (a, b) {
                for (let i = 0; i < config.length; i++) {
                    /** @type {?} */
                    let desc = config[i].substr(0, 1) == '-';
                    /** @type {?} */
                    let property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    /** @type {?} */
                    let aValue = a[property];
                    /** @type {?} */
                    let bValue = b[property];
                    /** @type {?} */
                    let propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (let j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    /** @type {?} */
                    let comparison = !desc
                        ? NgxOrderByPipe._orderByComparator(aValue, bValue)
                        : -NgxOrderByPipe._orderByComparator(aValue, bValue);
                    if (comparison != 0)
                        return comparison;
                }
                return 0;
            });
        }
    }
    /**
     * @param {?} input
     * @param {?=} orderBy
     * @return {?}
     */
    order(input, orderBy = '+') {
        return this.transform(input, orderBy);
    }
}
NgxOrderByPipe.decorators = [
    { type: Pipe, args: [{
                name: 'orderBy',
                pure: false
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxOrderByPipeModule {
}
NgxOrderByPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NgxOrderByPipe],
                exports: [NgxOrderByPipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxOrderByPipeModule, NgxOrderByPipe as ɵa };

//# sourceMappingURL=ngx-bank-account-br.js.map