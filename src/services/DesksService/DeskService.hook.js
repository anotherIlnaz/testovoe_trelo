import { useAppStorage } from "../../hooks/useAppStorage";

export const useDeskService = () => {
   const { state, setState } = useAppStorage();

   const desk = state.desk;

   const updateDesk = (callback) => {
      setState((prev) => ({ ...prev, desk: callback(prev.desk) }));
   };

   return { data: { desk }, events: { updateDesk } };
};
