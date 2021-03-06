"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
// initialize configuration
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Primer API con ExpressJS y TypeScript");
});
// start the Express server
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
//# sourceMappingURL=index.js.map