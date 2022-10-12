import { MainLayout } from "../layouts/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DeskContainer } from "../services/DesksService/DeskService.container";

export const Router = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<MainLayout />}>
                  <Route path="/" element={<DeskContainer />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
};
