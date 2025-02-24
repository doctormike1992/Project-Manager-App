

// eslint-disable-next-line react/prop-types
function Inputs({ ref, text, width, label, ...props }) {

 
  
  return (
    <>
      <p className="flex flex-col space-y-2">
        <label className="uppercase text-xl text-bold text-stone-500">{label}</label>
        {text ? (
          <textarea {...props} ref={ref} className={width} />
        ) : (
          <input ref={ref} {...props} className={width} />
        )}
      </p>
    </>
  );
}

export default Inputs;
