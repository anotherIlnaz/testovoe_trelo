import { useState } from "react";
import { ColumnContainer } from "../ColumnService/ColumnService.container";
import { DislplayTaskContainer } from "../DisplayTaskService/DisplayTaskService.container";
import { CreateTaskContainer } from "../TaskService/CreateTaskService/CreateTaskService.container";

export const ColumnsListContainer = () => {
   const [openedModalColumnId, setOpenedModalColumnId] = useState(null);

   const isCreateTaskModalOpen = Boolean(openedModalColumnId);

   const [openedDisplayTaskId, setOpenedDisplayTaskId] = useState(null);

   const isDisplayTaskModalOpen = Boolean(openedDisplayTaskId);

   return (
      <>
         <DislplayTaskContainer
            isOpen={isDisplayTaskModalOpen}
            handleCloseModal={() => setOpenedDisplayTaskId(null)}
            openedDisplayTaskId={openedDisplayTaskId}
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
               handleClickTask={setOpenedDisplayTaskId}
            />
         ))}
      </>
   );
};
