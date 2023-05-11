import { useState } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Modal from "./components/Modal";

function App() {
  const user = {
    idUser: "mallang@naver.com",
    pwUser: "1234",
  };

  // 상태 끌어올리기
  const [login, setLogin] = useState(false);
  // console.log(login);

  const [modalShow, setModalShow] = useState(true);
  // console.log(modalShow);

  // setModalShow() 함수를 사용하는 함수
  // 모달을 여러 개 사용할 경우 부모 컴포넌트에 두고 전달하여 재사용성을 높인다
  function modalClose() {
    setModalShow(false);
  }

  return (
    <>
      {login ? (
        <Homepage />
      ) : (
        <Login
          infoUser={user}
          setLogin={setLogin}
        />
      )}
      {modalShow && (
        <Modal modalClose={modalClose}>
          <h2>사용약관에 대해 말씀드리겠습니다.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum laborum, quo facilis eaque quam optio aliquam nam provident. Laboriosam delectus, atque doloremque nam harum molestias ab quisquam! Quis, pariatur.</p>
          <a href="#none">더 보기</a>
        </Modal>
      )}
    </>
  );
}

export default App;
