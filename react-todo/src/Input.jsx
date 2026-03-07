const Input = ({ textRef, dateRef, addBtnRef, handleTodo }) => {
  const handleTextInput = (e) => {
    if (e.key === "Enter") {
      if (textRef.current.value === "") {
        alert("Your Task input is empty");
      } else {
        dateRef.current.focus();
      }
    }
  };
  const handleDateInput = (e) => {
    if (e.key === "Enter") {
      if (dateRef.current.value === "") {
        alert("Your data input is empty");
      } else {
        e.preventDefault();
        addBtnRef.current.focus();
      }
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        onKeyDown={handleTextInput}
        className="input-text "
        ref={textRef}
      />
      <input
        type="date"
        onKeyDown={handleDateInput}
        className="input-date "
        ref={dateRef}
      />
      <button
        className="addBtn btn btn-success"
        onClick={handleTodo}
        ref={addBtnRef}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
