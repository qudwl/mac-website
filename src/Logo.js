const Logo = (props) => {
  const width = props.width == undefined ? 100 : props.width;
  const fill = props.fill == undefined ? "white" : props.fill;
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="14.2857" height="100" fill={fill} />
      <rect
        x="57.1429"
        y="100"
        width="14.2857"
        height="42.8571"
        transform="rotate(-90 57.1429 100)"
        fill={fill}
      />
      <rect
        y="100"
        width="14.2857"
        height="50"
        transform="rotate(-90 0 100)"
        fill={fill}
      />
      <rect x="35.7143" y="50" width="14.2857" height="50" fill={fill} />
      <rect x="85.7143" width="14.2857" height="100" fill={fill} />
      <rect
        y="14.2857"
        width="14.2857"
        height="100"
        transform="rotate(-90 0 14.2857)"
        fill={fill}
      />
    </svg>
  );
};

export default Logo;
