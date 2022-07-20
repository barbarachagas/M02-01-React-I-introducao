export default function CheckboxInput({
  labelDescription = "Descrição do Label",
  inputValue = "Valor do Input",
  onCheckboxChange = null,
  id = "input-checkbox",
}) {
  function handleInputChange({ currentTarget }) {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }
  return (
    <div className="flex flex-row items-center space-x-2 my-4">
      <input
        id={id}
        className="border p-1"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
      />
      <label htmlFor={id} className="text-sm mb-1">
        {labelDescription}
      </label>
    </div>
  );
}
