import "./Button.css";

export const Button = ({ onClick, children }) => {
   return (
      <div className="buttonStyles" onClick={onClick}>
         {children}
      </div>
   );
};
