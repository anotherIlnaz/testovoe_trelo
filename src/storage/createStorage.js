export const createStorage = (nameOfStorage, initialState) => {
   let data = initialState;
   let subscribers = [];

   const watch = (callback) => {
      const id = Date.now();

      subscribers.push({ callback, id });

      return {
         unsubscribe() {
            subscribers = subscribers.filter((subscriber) => subscriber.id);
         },
      };
   };

   const handleUpdate = () => {
      subscribers.forEach(({ callback }) => callback(data));
   };

   setInterval(() => {
      const localStorageDataString = localStorage.getItem(nameOfStorage);

      if (JSON.stringify(data) === localStorageDataString) return;

      if (!localStorageDataString) {
         localStorage.setItem(nameOfStorage, JSON.stringify(data));

         return;
      }

      if (localStorageDataString !== JSON.stringify(data)) {
         data = JSON.parse(localStorageDataString);

         handleUpdate();
      }
   }, 1000);

   const setData = (callback) => {
      data = callback(data);

      handleUpdate();

      localStorage.setItem(nameOfStorage, JSON.stringify(data));
   };

   return {
      watch,
      setData,
      getState: () => {
         return data;
      },
   };
};
