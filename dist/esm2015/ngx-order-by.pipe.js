/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Order by pipe.
 */
/*
 * Example use
 *		Basic Array of single type: *ngFor='let todo of todoService.todos | orderBy : '-''
 *		Multidimensional Array Sort on single column: *ngFor='let todo of todoService.todos | orderBy : ['-status']'
 *		Multidimensional Array Sort on multiple columns: *ngFor='let todo of todoService.todos | orderBy : ['status', '-title']'
 */
import { Pipe } from '@angular/core';
export class NgxOrderByPipe {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxOrderByPipe.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NgxOrderByPipe.prototype.iterations;
    /**
     * @type {?}
     * @private
     */
    NgxOrderByPipe.prototype.HEALTHY_MAXIMUM_ITERATIONS_NUMBER;
    /**
     * @type {?}
     * @private
     */
    NgxOrderByPipe.prototype.thePipeIsOverloadingTheView;
    /**
     * @type {?}
     * @private
     */
    NgxOrderByPipe.prototype.overloadWarningHasBeenShown;
}
/** @type {?} */
export let ORDERBY_PROVIDERS = [
    NgxOrderByPipe
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW9yZGVyLWJ5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmFuay1hY2NvdW50LWJyLyIsInNvdXJjZXMiOlsibmd4LW9yZGVyLWJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFBO0FBTW5ELE1BQU0sT0FBTyxjQUFjO0lBSjNCO1FBTVksVUFBSyxHQUFhLEVBQUUsQ0FBQTtRQUNwQixlQUFVLEdBQVcsQ0FBQyxDQUFBO1FBQ3RCLHNDQUFpQyxHQUFHLEdBQUcsQ0FBQTtRQUN2QyxnQ0FBMkIsR0FBRyxLQUFLLENBQUE7UUFDbkMsZ0NBQTJCLEdBQUcsS0FBSyxDQUFBO0lBdUgvQyxDQUFDOzs7Ozs7SUFySEcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQU0sRUFBRSxDQUFNO1FBRXBDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxXQUFXO1lBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssV0FBVztZQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFakQsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO2lCQUNmLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUE7O2dCQUNuQixPQUFPLENBQUMsQ0FBQTtTQUNoQjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FB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QUFLO2FBQ2Q7Ozs7Ozs7SUFHRywrQkFBNEI7Ozs7O0lBQzVCLG9DQUE4Qjs7Ozs7SUFDOUIsMkRBQStDOzs7OztJQUMvQyxxREFBMkM7Ozs7O0lBQzNDLHFEQUEyQzs7O0FBeUgvQyxNQUFNLEtBQUssaUJBQWlCLEdBQUc7SUFDM0IsY0FBYztDQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gT3JkZXIgYnkgcGlwZS5cbiAqL1xuXG4vKlxuICogRXhhbXBsZSB1c2VcbiAqXHRcdEJhc2ljIEFycmF5IG9mIHNpbmdsZSB0eXBlOiAqbmdGb3I9J2xldCB0b2RvIG9mIHRvZG9TZXJ2aWNlLnRvZG9zIHwgb3JkZXJCeSA6ICctJydcbiAqXHRcdE11bHRpZGltZW5zaW9uYWwgQXJyYXkgU29ydCBvbiBzaW5nbGUgY29sdW1uOiAqbmdGb3I9J2xldCB0b2RvIG9mIHRvZG9TZXJ2aWNlLnRvZG9zIHwgb3JkZXJCeSA6IFsnLXN0YXR1cyddJ1xuICpcdFx0TXVsdGlkaW1lbnNpb25hbCBBcnJheSBTb3J0IG9uIG11bHRpcGxlIGNvbHVtbnM6ICpuZ0Zvcj0nbGV0IHRvZG8gb2YgdG9kb1NlcnZpY2UudG9kb3MgfCBvcmRlckJ5IDogWydzdGF0dXMnLCAnLXRpdGxlJ10nXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnb3JkZXJCeScsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTmd4T3JkZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHByaXZhdGUgdmFsdWU6IHN0cmluZ1tdID0gW11cbiAgICBwcml2YXRlIGl0ZXJhdGlvbnM6IG51bWJlciA9IDFcbiAgICBwcml2YXRlIEhFQUxUSFlfTUFYSU1VTV9JVEVSQVRJT05TX05VTUJFUiA9IDIwMFxuICAgIHByaXZhdGUgdGhlUGlwZUlzT3ZlcmxvYWRpbmdUaGVWaWV3ID0gZmFsc2VcbiAgICBwcml2YXRlIG92ZXJsb2FkV2FybmluZ0hhc0JlZW5TaG93biA9IGZhbHNlXG5cbiAgICBzdGF0aWMgX29yZGVyQnlDb21wYXJhdG9yKGE6IGFueSwgYjogYW55KTogbnVtYmVyIHtcblxuICAgICAgICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcpIGEgPSAwXG4gICAgICAgIGlmIChiID09PSBudWxsIHx8IHR5cGVvZiBiID09PSAndW5kZWZpbmVkJykgYiA9IDBcblxuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIGlmIChhIDwgYikgcmV0dXJuIC0xXG4gICAgICAgICAgICBlbHNlIGlmIChhID4gYikgcmV0dXJuIDFcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIDBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoaXNOYU4ocGFyc2VGbG9hdChhKSkgfHwgIWlzRmluaXRlKGEpKSB8fCAoaXNOYU4ocGFyc2VGbG9hdChiKSkgfHwgIWlzRmluaXRlKGIpKSkge1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhLnRvTG93ZXJDYXNlKCkgPCBiLnRvTG93ZXJDYXNlKCkpIHJldHVybiAtMVxuICAgICAgICAgICAgaWYgKGEudG9Mb3dlckNhc2UoKSA+IGIudG9Mb3dlckNhc2UoKSkgcmV0dXJuIDFcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChhKSA8IHBhcnNlRmxvYXQoYikpIHJldHVybiAtMVxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQoYSkgPiBwYXJzZUZsb2F0KGIpKSByZXR1cm4gMVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMCBcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgY29uZmlnOiBzdHJpbmcgPSAnKycpOiBhbnkge1xuXG4gICAgICAgIFxuICAgICAgICBpZiAoIWlucHV0KSByZXR1cm4gaW5wdXRcblxuICAgICAgICB0aGlzLml0ZXJhdGlvbnMrK1xuICAgICAgICB0aGlzLnRoZVBpcGVJc092ZXJsb2FkaW5nVGhlVmlldyA9IHRoaXMuaXRlcmF0aW9ucyA+IHRoaXMuSEVBTFRIWV9NQVhJTVVNX0lURVJBVElPTlNfTlVNQkVSXG4gICAgICAgIGlmICh0aGlzLnRoZVBpcGVJc092ZXJsb2FkaW5nVGhlVmlldyAmJiAhdGhpcy5vdmVybG9hZFdhcm5pbmdIYXNCZWVuU2hvd24pXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oTmd4T3JkZXJCeVBpcGUubmFtZSArIGA6IHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5IGlzIG1ha2luZyB0aGUgcGlwZSBydW4gdG9vIG1hbnkgdGltZXMgaW4gYSByb3cuIFxuICAgICAgICAgICAgUGxlYXNlLCBjb25zaWRlciBjaGFuZ2luZyBpdCB0byBDaGFuZ2VTdHJhdGVneS5PblB1c2ggaW4gb3JkZXIgdG8gbWFrZSBjaGFuZ2UgZGV0ZWN0aW9ucyBvbmx5IHdoZW4gbmVjZXNzYXJ5LmApXG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMudmFsdWUgPSBbLi4uaW5wdXRdXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWVcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29uZmlnKSB8fCAoQXJyYXkuaXNBcnJheShjb25maWcpICYmIGNvbmZpZy5sZW5ndGggPT0gMSkpIHtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVRvQ2hlY2s6IHN0cmluZyA9ICFBcnJheS5pc0FycmF5KGNvbmZpZykgPyBjb25maWcgOiBjb25maWdbMF1cbiAgICAgICAgICAgIGxldCBkZXNjID0gcHJvcGVydHlUb0NoZWNrLnN1YnN0cigwLCAxKSA9PSAnLSdcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5VG9DaGVjayB8fCBwcm9wZXJ0eVRvQ2hlY2sgPT0gJy0nIHx8IHByb3BlcnR5VG9DaGVjayA9PSAnKycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWRlc2MgPyB2YWx1ZS5zb3J0KCkgOiB2YWx1ZS5zb3J0KCkucmV2ZXJzZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHk6IHN0cmluZyA9IHByb3BlcnR5VG9DaGVjay5zdWJzdHIoMCwgMSkgPT0gJysnIHx8IHByb3BlcnR5VG9DaGVjay5zdWJzdHIoMCwgMSkgPT0gJy0nXG4gICAgICAgICAgICAgICAgICAgID8gcHJvcGVydHlUb0NoZWNrLnN1YnN0cigxKVxuICAgICAgICAgICAgICAgICAgICA6IHByb3BlcnR5VG9DaGVja1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNvcnQoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhVmFsdWUgPSBhW3Byb3BlcnR5XVxuICAgICAgICAgICAgICAgICAgICBsZXQgYlZhbHVlID0gYltwcm9wZXJ0eV1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlTcGxpdCA9IHByb3BlcnR5LnNwbGl0KCcuJylcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGJWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgcHJvcGVydHlTcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhVmFsdWUgPSBhXG4gICAgICAgICAgICAgICAgICAgICAgICBiVmFsdWUgPSBiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb3BlcnR5U3BsaXQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhVmFsdWUgPSBhVmFsdWVbcHJvcGVydHlTcGxpdFtqXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVmFsdWUgPSBiVmFsdWVbcHJvcGVydHlTcGxpdFtqXV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhZGVzY1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBOZ3hPcmRlckJ5UGlwZS5fb3JkZXJCeUNvbXBhcmF0b3IoYVZhbHVlLCBiVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IC1OZ3hPcmRlckJ5UGlwZS5fb3JkZXJCeUNvbXBhcmF0b3IoYVZhbHVlLCBiVmFsdWUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNvcnQoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGNvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IGNvbmZpZ1tpXS5zdWJzdHIoMCwgMSkgPT0gJy0nXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IGNvbmZpZ1tpXS5zdWJzdHIoMCwgMSkgPT0gJysnIHx8IGNvbmZpZ1tpXS5zdWJzdHIoMCwgMSkgPT0gJy0nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ1tpXS5zdWJzdHIoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY29uZmlnW2ldXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFWYWx1ZSA9IGFbcHJvcGVydHldXG4gICAgICAgICAgICAgICAgICAgIGxldCBiVmFsdWUgPSBiW3Byb3BlcnR5XVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eVNwbGl0ID0gcHJvcGVydHkuc3BsaXQoJy4nKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYVZhbHVlID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYlZhbHVlID09PSAndW5kZWZpbmVkJyAmJiBwcm9wZXJ0eVNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFWYWx1ZSA9IGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGJWYWx1ZSA9IGJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvcGVydHlTcGxpdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFWYWx1ZSA9IGFWYWx1ZVtwcm9wZXJ0eVNwbGl0W2pdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJWYWx1ZSA9IGJWYWx1ZVtwcm9wZXJ0eVNwbGl0W2pdXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXBhcmlzb24gPSAhZGVzY1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBOZ3hPcmRlckJ5UGlwZS5fb3JkZXJCeUNvbXBhcmF0b3IoYVZhbHVlLCBiVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IC1OZ3hPcmRlckJ5UGlwZS5fb3JkZXJCeUNvbXBhcmF0b3IoYVZhbHVlLCBiVmFsdWUpXG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJpc29uICE9IDApIHJldHVybiBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3JkZXIoaW5wdXQ6IGFueSwgb3JkZXJCeTogYW55ID0gJysnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybShpbnB1dCwgb3JkZXJCeSlcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgT1JERVJCWV9QUk9WSURFUlMgPSBbXG4gICAgTmd4T3JkZXJCeVBpcGVcbl1cbiJdfQ==