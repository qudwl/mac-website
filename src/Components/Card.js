const Card = (props) => {
  return (
    <div className="class-card">
      <span>{props.title}</span>
      <span>{props.professor}</span>
    </div>
  );
};

export default Card;
