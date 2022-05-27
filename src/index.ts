import express from "express";
import cors from "cors";
import { DB } from "./firebase/index";
import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, where } from "firebase/firestore";
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.listen(process.env.PORT || 3333);

app.get("/", async (req, res) => {
  try {
    const docs = await getDocs(collection(DB, "Projects"));
    const result: DocumentData[] = [];
    docs.forEach((doc) => {
      result.push(doc.data());
    });
    res.status(200);
    res.json({
      projects: result,
    });
  } catch (e) {
    res.status(400);
    res.json({
      error: e,
    });
  }
});
