import * as fs from "node:fs/promises";
import path from "path";

const list = async () => {
  try {
    const files = await fs.readdir(path.join("src/fs/files"), {
      withFileTypes: true,
    });
    files.forEach((file) => {
      if (file.isFile()) {
        console.log(file.name);
      }
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("FS operation failed");
    } else {
      console.log("Произошла ошибка:", error);
    }
  }
};

await list();