export default function DateInput({
  labelDescription = "Descrição do Label",
  inputValue = "Valor do Input",
  onInputChange = null,
  id = "input-date",
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={id} className="text-sm mb-1">
        {labelDescription}
      </label>
      <input
        id={id}
        className="border p-1"
        type="date"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
