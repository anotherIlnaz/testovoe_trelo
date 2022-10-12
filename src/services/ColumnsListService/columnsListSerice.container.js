import { useState } from "react";
import { ColumnContainer } from "../ColumnService/ColumnService.container";
import { DislplayTaskContainer } from "../DisplayTaskService/DisplayTaskService.container";
import { CreateTaskContainer } from "../TaskService/CreateTaskService/CreateTaskService.container";
import { useColumnsListService } from "./columnsListService.hook";

export const ColumnsListContainer = () => {
   const [openedModalColumnId, setOpenedModalColumnId] = useState(null);

   const isCreateTaskModalOpen = Boolean(openedModalColumnId);

   const [openedDisplayTaskId, setOpenedDisplayTaskId] = useState(null);

   const isDisplayTaskModalOpen = Boolean(openedDisplayTaskId);

   const {
      data: { columns },
   } = useColumnsListService();

   return (
      <>
         <DislplayTaskContainer
            isOpen={openedDisplayTaskId}
            handleCloseModal={() => setOpenedDisplayTaskId(null)}
         />
         <CreateTaskContainer
            openedModalColumnId={openedModalColumnId}
            isOpen={isCreateTaskModalOpen}
            handleCloseModal={() => setOpenedModalColumnId(null)}
         />
         {columns?.map((column) => (
            <ColumnContainer
               handleOpenCreateTaskModal={setOpenedModalColumnId}
               key={column.id}
               column={column}
            />
         ))}
      </>
   );
};
