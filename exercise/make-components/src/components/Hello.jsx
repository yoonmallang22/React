// 라이캣 모음
function Hello(props) {
  const name = "라이캣!";
  const someStyle = { backgroundColor: "black", color: "white" };

  return (
    <div>
      <p style={someStyle}>안녕, {props.name} 1호</p>
      <p>안녕, {props.name} 2호!</p>
      <div className="newClass" />
    </div>
  );
}

export default Hello;
