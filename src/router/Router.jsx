import { MainLayout } from "../layouts/MainLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DeskContainer } from "../services/DesksService/DeskService.container";

export const Router = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/desk" element={<MainLayout />}>
                  <Route index element={<DeskContainer />} />
                  <Route path=":taskId" element={<DeskContainer />} />
               </Route>
               <Route path="*" element={<Navigate to="/desk" />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};
