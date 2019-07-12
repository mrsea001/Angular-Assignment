import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CurrencyComponent = class CurrencyComponent {
    constructor(_sharedService) {
        this._sharedService = _sharedService;
        this.id_currency = "";
    }
    ngOnInit() {
    }
    callCurrencyService() {
        this._sharedService.getCurrencyExchRate(this.id_currency.toUpperCase())
            .subscribe(lstresult => {
            this.my_result = JSON.stringify(lstresult);
        }, error => {
            console.log("Error. The callCurrencyService result JSON value is as follows:");
            console.log(error);
        });
    }
};
CurrencyComponent = tslib_1.__decorate([
    Component({
        selector: 'app‑currency',
        templateUrl: './currency.component.html',
        styles: []
    })
], CurrencyComponent);
export { CurrencyComponent };
//# sourceMappingURL=currency.component.js.map