export function ItemCount({ onSumar, onRestar, contador }) {
  const handleDed = () => {
    onRestar();
  };

  const handleAdd = () => {
    onSumar();
  };

  return (
    <div className="count_container">
      <div className="controls">
        <button onClick={handleDed}>-</button>
        <span className="count"> {contador}</span>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
}
