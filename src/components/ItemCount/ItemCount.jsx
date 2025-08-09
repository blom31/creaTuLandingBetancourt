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
        <button className="btn-secondary" onClick={handleDed}>
          -
        </button>
        <span className="count"> {contador}</span>
        <button className="btn-secondary" onClick={handleAdd}>
          +
        </button>
      </div>
    </div>
  );
}
