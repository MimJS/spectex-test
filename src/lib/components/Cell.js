const Cell = ({ before, after, children, active = true }) => {
  return (
    <div
      className={`Cell ${active ? "Cell--active" : null} ${
        before ? "Cell--withBefore" : null
      } ${after ? "Cell--withAfter" : null}`}
    >
      <div className={`Cell--before`}>{before}</div>
      <div className={`Cell--content`}>
        {typeof children === "string" ? (
          <span className="Cell--content-text">{children}</span>
        ) : (
          children
        )}
      </div>
      <div className={`Cell--after`}>{after}</div>
    </div>
  );
};

export default Cell;
