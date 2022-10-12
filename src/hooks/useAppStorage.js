import { appStorage } from "../storage/appStorage";
import { useStore } from "../storage/hooks";

export const useAppStorage = () => {
   return useStore(appStorage);
};
