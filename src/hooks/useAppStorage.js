import { appStorage } from "../storage/appStorage";
import { useStore } from "../storage/hooks";

export const useAppStorage = () => {
   const state = useStore(appStorage);

   return {
      state,
      setState: (payload) => {
         if (typeof payload === "function") {
            appStorage.setData(payload);

            return;
         }
      },
   };
};
