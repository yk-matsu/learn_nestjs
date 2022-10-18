"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.DatabaseConnection = void 0;
const app_controller_1 = require("./app.controller");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
class MockClass extends app_service_1.AppService2 {
    all() {
        return ["asdfa"];
    }
    getHello() {
        return "hell";
    }
}
class DatabaseConnection {
    constructor(options) {
        this.options = options;
    }
    get() {
        return "this is connection";
    }
}
exports.DatabaseConnection = DatabaseConnection;
const connectionProvider = {
    provide: 'CONNECTION',
    useFactory: (optionsProvider, optionalProvider) => {
        const options = optionsProvider.get();
        return new DatabaseConnection(options);
    },
    inject: [app_service_1.OptionsProvider, { token: 'SomeOptionalProvider', optional: true }],
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: app_service_1.AppService,
                useValue: {
                    getHello: () => {
                        return "hello";
                    },
                    all: () => {
                        return ["hello", "saygoodby"];
                    },
                },
            },
            {
                provide: app_service_1.AppService2,
                useClass: MockClass
            },
            app_service_1.OptionsProvider,
            connectionProvider
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map