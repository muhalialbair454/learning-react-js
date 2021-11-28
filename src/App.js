import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld/HelloWorld';
import FunctionalComponents from './Components/FunctionalComponents/FunctionalComponents';
import ClassComponents from './Components/ClassComponents/ClassComponents';
import WithJSX from './Components/WithJSX/WithJSX';
import WithoutJSX from './Components/WithoutJSX/WithoutJSX';
import Props from './Components/Props/Props';
import State from './Components/State/State';
import SetState from './Components/SetState/SetState';
import DestructuringProps from './Components/Destructuring/DestructuringProps';
import DestructuringState from './Components/Destructuring/DestructuringState';
import FunctionClick from './Components/EventHandling/FunctionClick';
import ClassClick from './Components/EventHandling/ClassClick';
import ParentComponent from './Components/MethodAsProps/ParentComponent';
import ConditionalRendering from './Components/ConditionalRendering/ConditionalRendering';
// import NameList from './Components/ListRendering/NameList';
// import NameList1 from './Components/ListAndKeys/NameList1';
import FormHandling from './Components/Formhandling/FormHandling';
import LifecycleA from './Components/ComponentMountingLifeCycleMethods/LifecycleA';
import LifecycleC from './Components/ComponentUpdatingLifecycleMethods/LifecycleC';
import { Fragment } from 'react';
import FragmentDemo from './Components/Fragments/FragmentDemo';
import Table from './Components/Fragments/Table';
import ParentComp from './Components/PureComponents/ParentComp';
import ParentCompo from './Components/MemoComponents/ParentCompo';
import RefsDemo from './Components/Refs/RefsDemo';

function App() {
  return (
    <div className="App">
      <HelloWorld />

      {/* Functional Components */}
      <FunctionalComponents />

      {/* Class Components */}
      <ClassComponents />
      
      {/* JSX */}
      <WithJSX />
      <WithoutJSX />

      {/* Props */}
      <Props firstName="Muhammad" middleName="Ali" lastName="Albair"/>

      {/* State */}
      <State />

      {/* Set State */}
      <SetState />

      {/* Destructuring */}
      <DestructuringProps fullName="Muhammad Ali Albair"/>
      <DestructuringState />

      {/* EventHandling */}
      <FunctionClick />
      <ClassClick />

      {/* Binding Event Handlers */}
      {/* Method as Props */}
      <ParentComponent />

      {/* Conditional Rendering */}
      <ConditionalRendering />
      
      {/* List Rendering (error)*/}
      {/* <NameList /> */}

      {/* List and Keys */}
      {/* Form Handling */}
      <FormHandling />

      {/* Component Mounting Lifecycle Methods */}
      <LifecycleA />   

      {/* Component Updating Lifecycle Methods */}
      <LifecycleC />  

      {/* Fragments */}
      <FragmentDemo />
      <Table />

      {/* Pure Components */}
      {/* <ParentComp /> */}

      {/* Memo Components */}
      {/* <ParentCompo /> */}

      {/* Refs */}
      <RefsDemo />

    </div>
  );
}

export default App;
