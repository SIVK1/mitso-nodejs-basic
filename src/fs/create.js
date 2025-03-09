import * as fs from "node:fs/promises";
import path from "path";

const create = async () => {
  const directoryPath = path.join("src/fs/files");
  const filePath = path.join(directoryPath, "Fresh.txt");
  const data = "I am fresh and young";
  try {
    await fs.writeFile(filePath, data, { flag: "wx" });
    console.log("File created");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("Directory does not exist");
    } else if (err.code === "EEXIST") {
      console.error("Fs operation failed");
    } else {
      console.error("Error creating file", err);
    }
  }
};

await create();