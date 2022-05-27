"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./firebase/index");
const firestore_1 = require("firebase/firestore");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.listen(process.env.PORT || 3333);
app.get("/", async (req, res) => {
    try {
        const docs = await (0, firestore_1.getDocs)((0, firestore_1.collection)(index_1.DB, "Projects"));
        const result = [];
        docs.forEach((doc) => {
            result.push(doc.data());
        });
        res.status(200);
        res.json({
            projects: result,
        });
    }
    catch (e) {
        res.status(400);
        res.json({
            error: e,
        });
    }
});
