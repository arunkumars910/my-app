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

function App() {
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

      <ClickCounter productname="Table"/>
      <HoverComponent />
    </div>
  );
}

export default App;
