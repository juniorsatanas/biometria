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
var core_1 = require("@angular/core");
var leitor_1 = require("../.././models/leitor");
var leitor_service_1 = require("../.././services/leitor-service");
var router_1 = require("@angular/router");
var LeitorVisualizarComponent = (function () {
    function LeitorVisualizarComponent(route, leitorService) {
        this.route = route;
        this.leitorService = leitorService;
    }
    LeitorVisualizarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.leitor = new leitor_1.Leitor();
        this.leitorService.buscarPorId(this.id)
            .subscribe(function (leitor) { return _this.leitor = leitor; }, function (error) { return _this.msgErro = error; });
    };
    return LeitorVisualizarComponent;
}());
LeitorVisualizarComponent = __decorate([
    core_1.Component({
        selector: 'leitor-visualizar',
        templateUrl: 'app/views/leitores/visualizar.html',
        providers: [leitor_service_1.LeitorService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        leitor_service_1.LeitorService])
], LeitorVisualizarComponent);
exports.LeitorVisualizarComponent = LeitorVisualizarComponent;
//# sourceMappingURL=leitor-visualizar-component.js.map