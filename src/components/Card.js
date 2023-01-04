function Card({ children, className, ...rest }) {
    const classes = `p-2 flex flex-col gap-3 items-center justify-center text-lg font-semibold border rounded-md shadow-lg`;
  return (
    <div {...rest} className={`${classes} ${className}`}>
        {children}
    </div>
  );
}

export default Card;
