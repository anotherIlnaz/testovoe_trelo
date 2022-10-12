export const createTask = (title, description, columnId) => {
   const task = {
      title,
      description,
      id: Date.now(),
      creationTime: new Date().toISOString(),
      columnId,
   };

   return task;
};

export const editTask = (task, payload = {}) => {
   if (typeof payload !== "object") return;

   return {
      ...task,
      title: payload.title || task.title,
      description: payload.description || task.description,
      columnId: payload.columnId || task.columnId,
   };
};

export const removeTask = (tasks, taskId) => {
   const filteredTasks = tasks.filter((task) => task.id !== taskId);

   return filteredTasks;
};
