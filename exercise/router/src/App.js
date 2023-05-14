import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      <Link to="/blog/1"> four_1 </Link>
      <Link to="/blog/2"> four_2 </Link>
      <Link to="/blog/3"> four_3 </Link>
      <Routes>
        <Route
          path="/"
          element={<Index />}
        />
        {/* props 전달 */}
        <Route
          path="/one"
          element={<One name="licat" />}
        />
        <Route
          path="/two"
          element={<Two />}
        />
        {/* Router 중첩 */}
        <Route
          path="/three/*"
          element={<Outlet />}
        >
          <Route
            path=""
            element={<MallangIndex />}
          />
          <Route
            path="hojunone/"
            element={<MallangOne />}
          />
          <Route
            path="hojuntwo/"
            element={<MallangTwo />}
          />
        </Route>
        {/* 파라미터 설정 */}
        <Route
          path="/blog/:id"
          element={<Blog />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One({ name }) {
  return <h1>{name} world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

function Blog() {
  const location = useLocation(); // URL 정보
  console.log(location);

  const path = location.pathname.split("/")[2];
  console.log(path);

  // 파라미터만 잘라내주는 훅
  const param = useParams();
  console.log(param);

  // 같은 컴포넌트를 불러와도 다른 모습으로 변경하는 것이 가능하다
  return <h1>hello Blog this is blog page {path}</h1>;
}

function MallangIndex() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Mallang index</h1>;
}

function MallangOne() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Mallang 1</h1>;
}

function MallangTwo() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Mallang 2</h1>;
}

export default App;
