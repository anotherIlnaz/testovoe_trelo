import "./ColumnHeader.css";

export const ColumnHeader = ({ columnName }) => {
   return (
      <div className="columnHeaderContainer">
         <div className="columnName">{columnName}</div>
         <div className="columnDelete">X</div>
      </div>
   );
};
