import styled from "styled-components";

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  /* styled-components의 props 조건문 */
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

const Card = (props) => {
  return (
    <CardDiv className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      <div>{props.children}</div>
    </CardDiv>
  );
};

const SettingCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};

// 컴포넌트 선언
const ShareCard = () => {
  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam et praesentium nostrum dolores culpa cupiditate unde doloremque labore beatae accusamus.</p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};

// 컴포넌트 합성
// 컴포넌트 사용하는 부분에서 다른 컴포넌트를 자식으로 끼워넣으면 자동으로 컴포넌트 선언부의 props에 children이라는 키 값으로 들어간다
// 동일한 틀은 유지하면서 다른 컴포넌트를 가져올 수 있다
function App() {
  return (
    <>
      <Card
        className="setting"
        value="챌린지 설정"
      ></Card>
      <Card
        className="share"
        value="서비스 공유하기"
      ></Card>

      <Card
        className="setting"
        value="챌린지 설정"
      >
        <SettingCard />
      </Card>
      <Card
        className="share"
        value="서비스 공유하기"
      >
        <ShareCard />
      </Card>
    </>
  );
}

export default App;
