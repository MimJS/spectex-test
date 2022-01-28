const Avatar = ({ size = 48, overlay, src }) => {
  return (
    <div
      className={`Avatar ${overlay ? "Avatar--overlay" : null}`}
      style={{ height: size, width: size }}
    >
      {overlay ? <span className="Avatar--overlay-text">{overlay}</span> : null}
      {src ? <img src={src} className="Avatar--img" /> : null}
    </div>
  );
};

export default Avatar;
