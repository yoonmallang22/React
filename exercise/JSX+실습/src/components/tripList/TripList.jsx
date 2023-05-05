import "./TripList.css";

function TripList() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  // Warning: Each child in a list should have a unique "key" prop.
  // item을 구별해주는 식별자로 no, id를 전달해준다. 키의 값으로 사용한다
  // 최적화와 관련있다
  let areas = list.map((item) => {
		return (
			<li key={item.no} className={item.visited ? "list-area-item active" : "list-area-item"}>{item.area}</li>
			);
		});
		
	// JSX의 배열은 쉼표가 제거돼서 화면에 그려진다
  return <ul className="list-area">{areas}</ul>;
}

export default TripList;
