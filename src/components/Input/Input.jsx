import "./Input.css";

export const Input = ({ placeholder, value, onChange }) => {
   return (
      <input
         value={value}
         onChange={(e) => onChange(e.target.value)}
         className="inputStyles"
         placeholder={placeholder}
      />
   );
};
