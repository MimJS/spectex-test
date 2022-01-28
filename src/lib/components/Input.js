const Input = (props, { type }) => {
  return (
    <div className={`Input`}>
      <input className={`Input--in`} type={type ? type : "text"} {...props} />
    </div>
  );
};

export default Input;
