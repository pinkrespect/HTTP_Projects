"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = require("./upload");
const cors_1 = __importDefault(require("cors"));
const server = express_1.default();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
server.use(cors_1.default(corsOptions));
server.post('/upload', upload_1.upload);
server.listen(3000, () => {
    console.log('Server started!');
});
//# sourceMappingURL=server.js.map