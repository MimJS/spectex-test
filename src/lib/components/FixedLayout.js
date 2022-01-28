const FixedLayout = ({ children, vertical = "top" }) => {
  return (
    <div className={`FixedLayout FixedLayout--${vertical}`}>{children}</div>
  );
};

export default FixedLayout;
