import * as fs from "node:fs/promises";
import path from "path";

const copy = async () => {
    
  try {
    await fs.mkdir(path.join("src/fs/files_copy"), { recursive: true });
    console.log("папка успешно создана");

    const files = await fs.readdir(path.join("src/fs/files"), {
      withFileTypes: true,
    });
    files.forEach(async (file) => {
      if (file.isFile()) {
        await fs.copyFile(
          path.join("src/fs/files", file.name),
          path.join("src/fs/files_copy", file.name)
        );
      }
    });
  } catch (error) {
    if (error.code === "EEXIST" || error.code === "ENOENT") {
      console.log("FS operation failed");
    } else {
      console.log("Произошла ошибка:", error);
    }
  }
};

await copy();