import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MovieComponent = class MovieComponent {
    constructor(_sharedService) {
        this._sharedService = _sharedService;
        this.id_movie = "";
        this.mv_Title = "";
        this.mv_Rated = "";
        this.mv_Released = "";
        this.mv_Director = "";
        this.mv_Actors = "";
        this.mv_Plot = "";
    }
    ngOnInit() {
    }
    callMovieService() {
        this._sharedService.findMovie(this.id_movie)
            .subscribe(lstresult => {
            this.mv_Title = lstresult["Title"];
            this.mv_Rated = lstresult["Rated"];
            this.mv_Released = lstresult["Released"];
            this.mv_Director = lstresult["Director"];
            this.mv_Actors = lstresult["Actors"];
            this.mv_Plot = lstresult["Plot"];
        }, error => {
            console.log("Error. The findMovie result JSON value is as follows");
            console.log(error);
        });
    }
};
MovieComponent = tslib_1.__decorate([
    Component({
        selector: 'app-movie',
        templateUrl: './movie.component.html',
        styles: []
    })
], MovieComponent);
export { MovieComponent };
//# sourceMappingURL=movie.component.js.map