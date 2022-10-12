import { useEffect, useState } from "react";

export const useStore = (storage) => {
   const [state, setState] = useState(storage.getState());

   useEffect(() => {
      return storage.watch((data) => setState(data)).unsubscribe;
   }, []);

   return {
      state,
      setState: (callback) => {
         if (typeof callback === "function") {
            storage.setData(callback);

            return;
         }
      },
   };
};
