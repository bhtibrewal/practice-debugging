export const Button = ({ children, ...attributes }) => {
  return (
    <button className="button" {...attributes}>
      {children}
    </button>
  );
};
