import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ColumnContainer } from "../ColumnService/ColumnService.container";
import { DislplayTaskContainer } from "../DisplayTaskService/DisplayTaskService.container";
import { CreateTaskContainer } from "../TaskService/CreateTaskService/CreateTaskService.container";
import { useColumnsListService } from "./columnsListService.hook";

export const ColumnsListContainer = () => {
   const [openedModalColumnId, setOpenedModalColumnId] = useState(null);

   const isCreateTaskModalOpen = Boolean(openedModalColumnId);

   const [openedDisplayTaskPayload, setOpenedDisplayTaskPayload] =
      useState(null);

   const isDisplayTaskModalOpen = Boolean(openedDisplayTaskPayload);

   const navigate = useNavigate();

   const { taskId } = useParams();

   const {
      events: { handleMoveTask },
      data: { columns },
   } = useColumnsListService();

   useEffect(() => {
      if (!taskId || !columns) return;

      const column = columns.find((column) => {
         const neededTask = column.tasks.find((task) => {
            return Number(task.id) === Number(taskId);
         });

         return Boolean(neededTask);
      });

      if (!column?.id) return;

      setOpenedDisplayTaskPayload({
         taskId: Number(taskId),
         columnId: column?.id,
      });
   }, [taskId, columns]);

   return (
      <>
         <DislplayTaskContainer
            isOpen={isDisplayTaskModalOpen}
            handleCloseModal={() => {
               setOpenedDisplayTaskPayload(null);
               navigate("/desk");
            }}
            openedDisplayTaskPayload={openedDisplayTaskPayload}
         />
         <CreateTaskContainer
            openedModalColumnId={openedModalColumnId}
            isOpen={isCreateTaskModalOpen}
            handleCloseModal={() => {
               setOpenedModalColumnId(null);
            }}
         />
         {columns?.map((column) => (
            <ColumnContainer
               handleOpenCreateTaskModal={setOpenedModalColumnId}
               key={column.id}
               column={column}
               handleClickOnTask={(taskId) => {
                  if (taskId) navigate(`/desk/${taskId}`);
               }}
               handleMoveTask={handleMoveTask}
            />
         ))}
      </>
   );
};
