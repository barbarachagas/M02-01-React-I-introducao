export default function TextInput({
  labelDescription = "Descrição do Label",
  inputValue = "Valor do Input",
  onInputChange = null,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="input-name" className="text-sm mb-1">
        {labelDescription}
      </label>
      <input
        id="input-name"
        autoFocus
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
