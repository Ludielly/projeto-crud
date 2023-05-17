const FormInput = ({
  handleChange,
  label,
  inputValue,
  placeholder,
  required,
}) => {
  const handleType = (e) => {
    handleChange(e.target.value);
  };

  return (
    <div className="flex flex-col w-9/10">
      <label className="block mb-1 font-bold tracking-wide">{label}</label>
      <input
        value={inputValue}
        onChange={handleType}
        placeholder={placeholder}
        required={required}
        className="border border-slate-400 rounded w-full p-1 mb-2"
      />
    </div>
  );
};

export default FormInput;
