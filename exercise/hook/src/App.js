import Counter from "./HookUseEffect/UseEffect1";
import Time from "./HookUseEffect/UseEffect2";
import UseEffectFetch from "./HookUseEffect/UseEffect3-fetch";
import UseMemo from "./HookUseMemo/UseMemo1";
import UseMemo2 from "./HookUseMemo/UseMemo2";
import Counter2 from "./HookUseRef/UseRef1";
import UseRefDOM from "./HookUseRef/UseRef2-DOM";
import Context from "./HookUseContext/Context";
import UseContext from "./HookUseContext/UseContext1";
import Hello from "./HookUseContext/Hello";

function App() {
  return (
    <>
      <Counter />
      <Time />
      <Counter2 />
      <UseRefDOM />
      <UseMemo />
      <UseMemo2 />
      <UseEffectFetch />
      <Context />
      <UseContext />
      {/* UseContext 파일 분리 */}
      <Hello />
    </>
  );
}
export default App;
