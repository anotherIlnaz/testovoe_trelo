import { useAppStorage } from "../../hooks/useAppStorage";

export const useColumnsListService = () => {
   const { state, setState } = useAppStorage();

   const columns = state?.desk?.columns;

   const addColumn = (name) => {
      const newColumn = {
         name,
         id: Date.now(),
         tasks: [],
      };

      setState((prev) => ({
         ...prev,
         desk: { ...prev.desk, columns: [...prev.desk.columns, newColumn] },
      }));
   };

   return { data: { columns }, events: { addColumn } };
};
