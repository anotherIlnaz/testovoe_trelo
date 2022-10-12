export const createColumn = (name) => {
   return {
      name,
      id: Date.now(),
      tasks: [],
   };
};

export const updateColumnById = (columns, id, callback) => {
   return columns.map((column) =>
      column.id === id ? callback(column) : column
   );
};

export const removeColumnById = (columns, id) => {
   return columns.filter((column) => column.id !== id);
};
