import { ColumnContainer } from "../ColumnService/ColumnService.container";
import { useColumnsListService } from "./columnsListService.hook";

export const ColumnsListContainer = () => {
   const {
      data: { columns },
   } = useColumnsListService();

   return (
      <>
         {columns?.map((column) => (
            <ColumnContainer key={column.id} column={column} />
         ))}
      </>
   );
};
