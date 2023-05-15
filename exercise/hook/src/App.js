import Counter from "./HookUseEffect/UseEffect1";
import Time from "./HookUseEffect/UseEffect2";
import UseMemo from "./HookUseMemo/UseMemo1";
import Counter2 from "./HookUseRef/UseRef1";
import UseRefDOM from "./HookUseRef/UseRef2-DOM";

function App() {
  return (
    <>
      <Counter />
      <Time />
      <Counter2 />
      <UseRefDOM />
      <UseMemo />
    </>
  );
}
export default App;
