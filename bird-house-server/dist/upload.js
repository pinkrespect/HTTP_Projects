"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formidable_1 = require("formidable");
function upload(req, res) {
    const form = new formidable_1.IncomingForm();
    form.on('file', (field, file) => {
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path
        console.log('file', file.name);
    });
    form.on('end', () => {
        res.json();
    });
    form.parse(req);
}
exports.upload = upload;
//# sourceMappingURL=upload.js.map