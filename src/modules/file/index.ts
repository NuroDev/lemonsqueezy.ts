import { listAllFiles, retrieveFile } from "./file.action";

export { listAllFiles, retrieveFile };

export default {
  listAllFiles,
  retrieveFile,
} as const;
