import "./Button.css";

export const ButtonType = {
   default: "btn-default",
   danger: "btn-danger",
};

export const Button = ({ onClick, children, type = ButtonType.default }) => {
   return (
      <div className={`buttonStyles ${type}`} onClick={onClick}>
         {children}
      </div>
   );
};
