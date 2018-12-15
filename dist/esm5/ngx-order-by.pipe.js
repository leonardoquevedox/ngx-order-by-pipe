/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var NgxOrderByPipe = /** @class */ (function () {
    function NgxOrderByPipe() {
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
    NgxOrderByPipe._orderByComparator = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
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
    };
    /**
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */
    NgxOrderByPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */
    function (input, config) {
        if (config === void 0) { config = '+'; }
        if (!input)
            return input;
        this.iterations++;
        this.thePipeIsOverloadingTheView = this.iterations > this.HEALTHY_MAXIMUM_ITERATIONS_NUMBER;
        if (this.thePipeIsOverloadingTheView && !this.overloadWarningHasBeenShown)
            console.warn(NgxOrderByPipe.name + ": the change detection strategy is making the pipe run too many times in a row. \n            Please, consider changing it to ChangeStrategy.OnPush in order to make change detections only when necessary.");
        this.value = tslib_1.__spread(input);
        /** @type {?} */
        var value = this.value;
        if (!Array.isArray(value))
            return value;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            /** @type {?} */
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            /** @type {?} */
            var desc_1 = propertyToCheck.substr(0, 1) == '-';
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc_1 ? value.sort() : value.sort().reverse();
            }
            else {
                /** @type {?} */
                var property_1 = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    /** @type {?} */
                    var aValue = a[property_1];
                    /** @type {?} */
                    var bValue = b[property_1];
                    /** @type {?} */
                    var propertySplit = property_1.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc_1
                        ? NgxOrderByPipe._orderByComparator(aValue, bValue)
                        : -NgxOrderByPipe._orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    /** @type {?} */
                    var desc = config[i].substr(0, 1) == '-';
                    /** @type {?} */
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    /** @type {?} */
                    var aValue = a[property];
                    /** @type {?} */
                    var bValue = b[property];
                    /** @type {?} */
                    var propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    /** @type {?} */
                    var comparison = !desc
                        ? NgxOrderByPipe._orderByComparator(aValue, bValue)
                        : -NgxOrderByPipe._orderByComparator(aValue, bValue);
                    if (comparison != 0)
                        return comparison;
                }
                return 0;
            });
        }
    };
    /**
     * @param {?} input
     * @param {?=} orderBy
     * @return {?}
     */
    NgxOrderByPipe.prototype.order = /**
     * @param {?} input
     * @param {?=} orderBy
     * @return {?}
     */
    function (input, orderBy) {
        if (orderBy === void 0) { orderBy = '+'; }
        return this.transform(input, orderBy);
    };
    NgxOrderByPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'orderBy',
                    pure: false
                },] }
    ];
    return NgxOrderByPipe;
}());
export { NgxOrderByPipe };
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
export var ORDERBY_PROVIDERS = [
    NgxOrderByPipe
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW9yZGVyLWJ5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmFuay1hY2NvdW50LWJyLyIsInNvdXJjZXMiOlsibmd4LW9yZGVyLWJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQTtBQUVuRDtJQUFBO1FBTVksVUFBSyxHQUFhLEVBQUUsQ0FBQTtRQUNwQixlQUFVLEdBQVcsQ0FBQyxDQUFBO1FBQ3RCLHNDQUFpQyxHQUFHLEdBQUcsQ0FBQTtRQUN2QyxnQ0FBMkIsR0FBRyxLQUFLLENBQUE7UUFDbkMsZ0NBQTJCLEdBQUcsS0FBSyxDQUFBO0lBdUgvQyxDQUFDOzs7Ozs7SUFySFUsaUNBQWtCOzs7OztJQUF6QixVQUEwQixDQUFNLEVBQUUsQ0FBTTtRQUVwQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssV0FBVztZQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFdBQVc7WUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRWpELElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtpQkFDZixJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFBOztnQkFDbkIsT0FBTyxDQUFDLENBQUE7U0FDaEI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENB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RixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsS0FBSztpQkFDZDs7SUE4SEQscUJBQUM7Q0FBQSxBQWpJRCxJQWlJQztTQTdIWSxjQUFjOzs7Ozs7SUFFdkIsK0JBQTRCOzs7OztJQUM1QixvQ0FBOEI7Ozs7O0lBQzlCLDJEQUErQzs7Ozs7SUFDL0MscURBQTJDOzs7OztJQUMzQyxxREFBMkM7OztBQXlIL0MsTUFBTSxLQUFLLGlCQUFpQixHQUFHO0lBQzNCLGNBQWM7Q0FDakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIE9yZGVyIGJ5IHBpcGUuXG4gKi9cblxuLypcbiAqIEV4YW1wbGUgdXNlXG4gKlx0XHRCYXNpYyBBcnJheSBvZiBzaW5nbGUgdHlwZTogKm5nRm9yPSdsZXQgdG9kbyBvZiB0b2RvU2VydmljZS50b2RvcyB8IG9yZGVyQnkgOiAnLScnXG4gKlx0XHRNdWx0aWRpbWVuc2lvbmFsIEFycmF5IFNvcnQgb24gc2luZ2xlIGNvbHVtbjogKm5nRm9yPSdsZXQgdG9kbyBvZiB0b2RvU2VydmljZS50b2RvcyB8IG9yZGVyQnkgOiBbJy1zdGF0dXMnXSdcbiAqXHRcdE11bHRpZGltZW5zaW9uYWwgQXJyYXkgU29ydCBvbiBtdWx0aXBsZSBjb2x1bW5zOiAqbmdGb3I9J2xldCB0b2RvIG9mIHRvZG9TZXJ2aWNlLnRvZG9zIHwgb3JkZXJCeSA6IFsnc3RhdHVzJywgJy10aXRsZSddJ1xuICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ29yZGVyQnknLFxuICAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE5neE9yZGVyQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBwcml2YXRlIHZhbHVlOiBzdHJpbmdbXSA9IFtdXG4gICAgcHJpdmF0ZSBpdGVyYXRpb25zOiBudW1iZXIgPSAxXG4gICAgcHJpdmF0ZSBIRUFMVEhZX01BWElNVU1fSVRFUkFUSU9OU19OVU1CRVIgPSAyMDBcbiAgICBwcml2YXRlIHRoZVBpcGVJc092ZXJsb2FkaW5nVGhlVmlldyA9IGZhbHNlXG4gICAgcHJpdmF0ZSBvdmVybG9hZFdhcm5pbmdIYXNCZWVuU2hvd24gPSBmYWxzZVxuXG4gICAgc3RhdGljIF9vcmRlckJ5Q29tcGFyYXRvcihhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XG5cbiAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnKSBhID0gMFxuICAgICAgICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcpIGIgPSAwXG5cbiAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBpZiAoYSA8IGIpIHJldHVybiAtMVxuICAgICAgICAgICAgZWxzZSBpZiAoYSA+IGIpIHJldHVybiAxXG4gICAgICAgICAgICBlbHNlIHJldHVybiAwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKGlzTmFOKHBhcnNlRmxvYXQoYSkpIHx8ICFpc0Zpbml0ZShhKSkgfHwgKGlzTmFOKHBhcnNlRmxvYXQoYikpIHx8ICFpc0Zpbml0ZShiKSkpIHtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYS50b0xvd2VyQ2FzZSgpIDwgYi50b0xvd2VyQ2FzZSgpKSByZXR1cm4gLTFcbiAgICAgICAgICAgIGlmIChhLnRvTG93ZXJDYXNlKCkgPiBiLnRvTG93ZXJDYXNlKCkpIHJldHVybiAxXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQoYSkgPCBwYXJzZUZsb2F0KGIpKSByZXR1cm4gLTFcbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KGEpID4gcGFyc2VGbG9hdChiKSkgcmV0dXJuIDFcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDAgXG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGNvbmZpZzogc3RyaW5nID0gJysnKTogYW55IHtcblxuICAgICAgICBcbiAgICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuIGlucHV0XG5cbiAgICAgICAgdGhpcy5pdGVyYXRpb25zKytcbiAgICAgICAgdGhpcy50aGVQaXBlSXNPdmVybG9hZGluZ1RoZVZpZXcgPSB0aGlzLml0ZXJhdGlvbnMgPiB0aGlzLkhFQUxUSFlfTUFYSU1VTV9JVEVSQVRJT05TX05VTUJFUlxuICAgICAgICBpZiAodGhpcy50aGVQaXBlSXNPdmVybG9hZGluZ1RoZVZpZXcgJiYgIXRoaXMub3ZlcmxvYWRXYXJuaW5nSGFzQmVlblNob3duKVxuICAgICAgICAgICAgY29uc29sZS53YXJuKE5neE9yZGVyQnlQaXBlLm5hbWUgKyBgOiB0aGUgY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneSBpcyBtYWtpbmcgdGhlIHBpcGUgcnVuIHRvbyBtYW55IHRpbWVzIGluIGEgcm93LiBcbiAgICAgICAgICAgIFBsZWFzZSwgY29uc2lkZXIgY2hhbmdpbmcgaXQgdG8gQ2hhbmdlU3RyYXRlZ3kuT25QdXNoIGluIG9yZGVyIHRvIG1ha2UgY2hhbmdlIGRldGVjdGlvbnMgb25seSB3aGVuIG5lY2Vzc2FyeS5gKVxuXG4gICAgICAgIFxuICAgICAgICB0aGlzLnZhbHVlID0gWy4uLmlucHV0XVxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlXG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbmZpZykgfHwgKEFycmF5LmlzQXJyYXkoY29uZmlnKSAmJiBjb25maWcubGVuZ3RoID09IDEpKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGVydHlUb0NoZWNrOiBzdHJpbmcgPSAhQXJyYXkuaXNBcnJheShjb25maWcpID8gY29uZmlnIDogY29uZmlnWzBdXG4gICAgICAgICAgICBsZXQgZGVzYyA9IHByb3BlcnR5VG9DaGVjay5zdWJzdHIoMCwgMSkgPT0gJy0nXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eVRvQ2hlY2sgfHwgcHJvcGVydHlUb0NoZWNrID09ICctJyB8fCBwcm9wZXJ0eVRvQ2hlY2sgPT0gJysnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFkZXNjID8gdmFsdWUuc29ydCgpIDogdmFsdWUuc29ydCgpLnJldmVyc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5OiBzdHJpbmcgPSBwcm9wZXJ0eVRvQ2hlY2suc3Vic3RyKDAsIDEpID09ICcrJyB8fCBwcm9wZXJ0eVRvQ2hlY2suc3Vic3RyKDAsIDEpID09ICctJ1xuICAgICAgICAgICAgICAgICAgICA/IHByb3BlcnR5VG9DaGVjay5zdWJzdHIoMSlcbiAgICAgICAgICAgICAgICAgICAgOiBwcm9wZXJ0eVRvQ2hlY2tcblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zb3J0KGZ1bmN0aW9uIChhOiBhbnksIGI6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYVZhbHVlID0gYVtwcm9wZXJ0eV1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJWYWx1ZSA9IGJbcHJvcGVydHldXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5U3BsaXQgPSBwcm9wZXJ0eS5zcGxpdCgnLicpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhVmFsdWUgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBiVmFsdWUgPT09ICd1bmRlZmluZWQnICYmIHByb3BlcnR5U3BsaXQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYVZhbHVlID0gYVxuICAgICAgICAgICAgICAgICAgICAgICAgYlZhbHVlID0gYlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9wZXJ0eVNwbGl0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVZhbHVlID0gYVZhbHVlW3Byb3BlcnR5U3BsaXRbal1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYlZhbHVlID0gYlZhbHVlW3Byb3BlcnR5U3BsaXRbal1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWRlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gTmd4T3JkZXJCeVBpcGUuX29yZGVyQnlDb21wYXJhdG9yKGFWYWx1ZSwgYlZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAtTmd4T3JkZXJCeVBpcGUuX29yZGVyQnlDb21wYXJhdG9yKGFWYWx1ZSwgYlZhbHVlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zb3J0KGZ1bmN0aW9uIChhOiBhbnksIGI6IGFueSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2MgPSBjb25maWdbaV0uc3Vic3RyKDAsIDEpID09ICctJ1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBjb25maWdbaV0uc3Vic3RyKDAsIDEpID09ICcrJyB8fCBjb25maWdbaV0uc3Vic3RyKDAsIDEpID09ICctJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb25maWdbaV0uc3Vic3RyKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ1tpXVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhVmFsdWUgPSBhW3Byb3BlcnR5XVxuICAgICAgICAgICAgICAgICAgICBsZXQgYlZhbHVlID0gYltwcm9wZXJ0eV1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlTcGxpdCA9IHByb3BlcnR5LnNwbGl0KCcuJylcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGJWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgcHJvcGVydHlTcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhVmFsdWUgPSBhXG4gICAgICAgICAgICAgICAgICAgICAgICBiVmFsdWUgPSBiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb3BlcnR5U3BsaXQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhVmFsdWUgPSBhVmFsdWVbcHJvcGVydHlTcGxpdFtqXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVmFsdWUgPSBiVmFsdWVbcHJvcGVydHlTcGxpdFtqXV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21wYXJpc29uID0gIWRlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gTmd4T3JkZXJCeVBpcGUuX29yZGVyQnlDb21wYXJhdG9yKGFWYWx1ZSwgYlZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAtTmd4T3JkZXJCeVBpcGUuX29yZGVyQnlDb21wYXJhdG9yKGFWYWx1ZSwgYlZhbHVlKVxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyaXNvbiAhPSAwKSByZXR1cm4gY29tcGFyaXNvblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9yZGVyKGlucHV0OiBhbnksIG9yZGVyQnk6IGFueSA9ICcrJykge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oaW5wdXQsIG9yZGVyQnkpXG4gICAgfVxufVxuXG5leHBvcnQgbGV0IE9SREVSQllfUFJPVklERVJTID0gW1xuICAgIE5neE9yZGVyQnlQaXBlXG5dXG4iXX0=