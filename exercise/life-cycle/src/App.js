import ClassComp from "./components/ClassCompLifeCycle";
import LazyInitialize from "./components/LazyInitialize";
import HookRendering from "./components/HookRendering";
import UseEffectUseLayoutEffect from "./components/UseEffectUseLayoutEffect";

function App() {
  return (
    <div>
      <ClassComp />
      <LazyInitialize />
      <HookRendering />
      <UseEffectUseLayoutEffect />
    </div>
  );
}
export default App;
