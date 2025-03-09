import * as fs from "node:fs/promises";
import path from "path";
const remove = async () => {
  try {
    await fs.unlink(path.join("src/fs/files", "fileToRemove.txt"));
    console.log("файл успешно удален");
  } catch (error) {
    {
      {
        if (error.code === "EEXIST" || error.code === "ENOENT") {
          console.log("FS operation failed");
        } else {
          console.log("Произошла ошибка:", error);
        }
      }
    }
  }
};

await remove();