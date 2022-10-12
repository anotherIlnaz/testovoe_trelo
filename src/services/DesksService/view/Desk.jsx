import { ColumnContainer } from "../../ColumnService/ColumnService.container"
import "./Desk.css"

export const Desk = () => {
        return <div className="DeskWrapper" > 
        <ColumnContainer />
        <ColumnContainer />
        <ColumnContainer />
        <ColumnContainer />
        </div>
}