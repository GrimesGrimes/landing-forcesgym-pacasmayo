// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Railway te pasa PORT, y si no existe usamos 4173 en local
const port = process.env.PORT ? Number(process.env.PORT) : 4173;

// Servimos los archivos estáticos compilados por Vite (carpeta dist)
app.use(express.static(path.join(__dirname, "dist")));

// Para cualquier ruta, devolvemos index.html (SPA / landing)
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ ForcesGym landing escuchando en el puerto ${port}`);
});
