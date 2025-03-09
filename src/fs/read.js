import * as fs from "node:fs/promises";
import path from "path";

const read = async () => {
  try {
    const data = await fs.readFile(
      path.join("src/fs/files", "fileToRead.txt"),
      "utf8"
    );
    console.log(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("FS operation failed");
    } else {
      console.log("Произошла ошибка:", error);
    }
  }
};

await read();