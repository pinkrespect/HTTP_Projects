"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const User_1 = require("./entity/User");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    // create express app
    const app = express_1.default();
    app.use(body_parser_1.default.json());
    // register express routes from defined application routes
    routes_1.Routes.forEach(route => {
        app[route.method](route.route, (req, res, next) => {
            const result = (new route.controller)[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            }
            else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });
    // setup express app here
    // ...
    // start express server
    app.listen(3000);
    // insert new users for test
    yield connection.manager.save(connection.manager.create(User_1.User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    yield connection.manager.save(connection.manager.create(User_1.User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map