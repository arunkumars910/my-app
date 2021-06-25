import logo from "./logo.svg";
import "./App.css";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import JsxExample from "./component/JsxExample";
import ItemSearch from "./component/ItemSearch";
import Subscrption from "./component/Subscription";
import Operations from "./component/Operations";
import EventBind from "./component/EventBind";
import ProductList from "./component/ProductList";
import Sample from "./component/Sample";
import CssStyleSheet from "./component/CssStyleSheet";
import "./css/myStyle.css";
import style from "./css/applyStyles.module.css";
import Form from "./component/Form";
import MountingComponentLifeCycle from "./component/MountingComponentLifeCycle";
import UpdateLifeCycleComponent from "./component/UpdateLifeCycleComponent";
import ReactFragments from "./component/ReactFragments";
import PureComp from "./component/PureComp";
import ParentComponent from "./component/ParentComponent";
import RefsDemo from "./component/RefsDemo";
import OperationFocus from "./component-2/OperationFocus";
import ComponentInput from "./component-2/ComponentInput";
import ForwardRef from "./component-2/ForwardRef";
import ParentRefComp from "./component-2/ParentRefComp";
import PortalDemo from "./component-2/PortalDemo";
import ProductInformation from "./component-2/ProductInformation";
import ErrorBoundary from "./component-2/ErrorBoundary";
import ClickCounter from "./component-2/ClickCounter";
import HoverComponent from "./component-2/HoverComponent";
import ModelCount1 from "./component/ModelCount1";
import Model2 from "./component/Model2";
import ModelCount from "./component/ModelCount";
import ClickCounter2 from "./component2/ClickCounter2";
import ClickCounter3 from "./component2/ClickCounter3";
import RenderProps from "./component2/RenderProps";
import ComponentA from "./component2/ComponentA";
import { UserProvider } from "./component2/userContext";
import ReactGetCall from "./component3/ReactGetCall";
import PostCall from "./component3/PostCall";
import SimpleCounter from "./hookscomponents/SimpleCounter";
import HooksCounter from "./HooksComponent/HooksCounter";
import FormHooks from "./HooksComponent/FormHooks";
import HooksRandom from "./HooksComponent/HooksRandom";
import ClassCounter1 from "./HooksComponent/ClassCounter1";
import EffectHook from "./HooksComponent/EffectHook";
import MounseEvent from "./HooksComponent/MounseEvent";
import EffectMouse from "./HooksComponent/EffectMouse";
import MouseContainer from "./HooksComponent/MouseContainer";
import DataFetching from "./HooksComponent/DataFetching";
import ComponentD from "./HooksComponent/ComponentD";
import React,{useReducer} from "react";
import Counter1 from "./reducerhook/Counter1";
import Counter2 from "./reducerhook/Counter2";
import Counter3 from "./reducerhook/Counter3";
import Counter4 from "./reducerhook/Counter3";
import ComponentB from "./component2/ComponentB";
import ComponentC from "./component2/ComponentC";
import ComponentZ from "./reducerhook/ComponentZ";
import ComponentY from "./reducerhook/ComponentY";
import ComponentX from "./reducerhook/ComponentX";

export const UserContext = React.createContext();
export const productDetail = React.createContext();
export const CounterContext = React.createContext();



const initialState =0;

//state -> initialState
//action -> dipatch method parameter
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function App() {

  const [count,dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Welcome to react</h1>
      {/* <h1 className={style.success}>module based css</h1> */}
      {/* <Welcome />
      <Hello />
      <JsxExample /> 
      <ItemSearch productName="Washer" price="20000"/> */}
      {/* <ItemSearch productName="Fridge" price="25000"/>
      <ItemSearch productName="Basket" price="10000"/>
      <ItemSearch productName="Cricket Bat" price="4000"/> */}

      {/* <Subscrption /> */}

      {/* <Operations /> */}
      {/* <EventBind />  */}
      {/* <ProductList productName="Fridge" price="25000" id="1" quantity="200"/> */}
      {/* <Sample/> */}
      {/* <Hello />
      <CssStyleSheet primary={true}/> */}

      {/* <Form /> */}

      {/* <MountingComponentLifeCycle /> 
      <UpdateLifeCycleComponent />
      <ReactFragments />*/}
      {/* <ParentComponent /> */}
      {/* <RefsDemo /> */}
      {/* <OperationFocus /> */}
      {/* <ComponentInput /> */}
      {/* <ForwardRef /> */}
      {/* <ParentRefComp />
      <PortalDemo /> */}
      {/* <ErrorBoundary>
        <ProductInformation productName="Football" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProductInformation productName="Fridge" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProductInformation productName="Table" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProductInformation productName="Furniture" />
      </ErrorBoundary> */}

      {/* <ClickCounter productname="Table"/>
      <HoverComponent /> */}
      {/* <Model1 />
      <Model2 /> */}

      {/* <ClickCounter2 />
      <ClickCounter3 /> */}
      {/* 
      <RenderProps
        name="Hello"
        render={(count,increment)=>(<ClickCounter2 countFromRenderProp={count} incrementMethodCall={increment}/>)}
      />

      <RenderProps
        render={(count, increment) => (
          <ClickCounter3
            countFromRenderProp={count}
            incrementMethodCall={increment}
          />
        )}
      /> */}
      {/* 
      <UserProvider value="React Session">
        <ComponentA loginuname="React" />
      </UserProvider> 
      <ReactGetCall />
      <PostCall />*/}
      {/* <SimpleCounter/> */}
      {/* <HooksRandom /> */}
      {/* <HooksCounter /> */}
      {/* <FormHooks /> */}
      {/* <ClassCounter1/> */}
      {/* <EffectHook /> */}
      {/* <MounseEvent /> */}
      {/* <EffectMouse /> */}
      {/* <MouseContainer /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Hello React"}>
        <productDetail.Provider value="washer">
          <ComponentD />
        </productDetail.Provider>
      </UserContext.Provider> */}
      {/* <Counter1/> */}
      {/* <Counter2/> */}
      {/* <Counter3/> */}
      {/* <Counter4/> */}
      <CounterContext.Provider value={{countState:count, countDispatch: dispatch}}> 
          <ComponentX />
          <ComponentY />
          <ComponentZ />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
