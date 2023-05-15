import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from "react-router-dom";

function RouteQuiz() {
  const productIds = [1, 2, 3, 4, 5];
  return (
    <BrowserRouter>
      <h1>퀴즈</h1>

      <Link to="/"> HomePage </Link>
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}
      <Link to="/cart"> Cart </Link>
      <Link to="/users"> Users </Link>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/products/:id"
          element={<Products />}
        />
        <Route
          path="/products/:id/notice"
          element={<ProductNotice />}
        />
        <Route
          path="/cart"
          element={<Cart name="licat" />}
        />
        <Route
          path="/users/"
          element={<Users />}
        >
          <Route
            path="coupon"
            element={<div>쿠폰</div>}
          />
          <Route
            path="question"
            element={<div>퀘스쳔</div>}
          />
          <Route
            path="notice"
            element={<div>노티스</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

function Products() {
  const { id } = useParams();
  return (
    <div>
      <h1>hello Products {id}</h1>
      {/* ./ : 현재 경로 */}
      <Link to="./notice">Notice</Link>
    </div>
  );
}

function ProductNotice() {
  const { id } = useParams();
  return <h1>hello Products {id} Notice</h1>;
}

function Cart({ name }) {
  return <h1>{name} world1 여기는 /cart 입니다.</h1>;
}

function Users() {
  return (
    <div>
      <Link to="./coupon">Coupon</Link>
      <br />
      <Link to="./question">Question</Link>
      <br />
      <Link to="./notice">Notice</Link>
      <h1>여기는 Users</h1>
      <Outlet />
    </div>
  );
}

export default RouteQuiz;
