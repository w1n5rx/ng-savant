"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var project_service_1 = require('../project-center/project.service');
var DataSummaryComponent = (function () {
    function DataSummaryComponent(projectService) {
        this.projectService = projectService;
    }
    DataSummaryComponent.prototype.ngOnInit = function () {
        this.projects = this.projectService.getProjects();
        console.log('Hello from Preview');
        console.log('Your projects are:');
        console.log(this.projects);
    };
    DataSummaryComponent = __decorate([
        core_1.Component({
            template: "\n        <h3>Data set summary</h3>\n    "
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], DataSummaryComponent);
    return DataSummaryComponent;
}());
exports.DataSummaryComponent = DataSummaryComponent;
//# sourceMappingURL=data-summary.component.js.map