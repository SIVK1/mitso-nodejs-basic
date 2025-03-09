import * as fs from "node:fs/promises";
import path from "path";
const rename = async () => {
  try {
    await fs.rename(
      path.join("src/fs/files", "wrongFilename.txt"),
      path.join("src/fs/files", "properFilename.md")
    );
    console.log("файл успешно переименован");
  } catch (error) {
    {
      if (error.code === "EEXIST" || error.code === "ENOENT") {
        console.log("FS operation failed");
      } else {
        console.log("Произошла ошибка:", error);
      }
    }
  }
};

await rename();