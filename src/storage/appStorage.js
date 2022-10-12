import { createStorage } from "./createStorage";

export const appStorage = createStorage("tasks-app", {
   desk: {
      columns: [],
   },
});
