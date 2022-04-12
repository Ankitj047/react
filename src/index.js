import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Firstprops,Name1} from './Firstprops';
import Classcomponent from './Classcomponent';
import Practiceprops from './Practiceprops';
import StateClassComponent from './StateClassComponent'
import Funtionstate from './Funtionhooks';
import lifecyle from './Lifecyle';
import Style from './Style';
import About from './About';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom'
import Contact from './Contact';
import Myfile from './Myfile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ABootstrap from './ABootstrap';
import Bbootstrap from './Bbootstrap';
import Areduce from './Areduce';
import Refhooks from './Refhooks'
import Fcom from './propspass/Fcom';
import Fcom2 from './propspass/Fcom2';
import Ccomp from './propspass/Ccomp'
var mydata = <h>this is first app</h>

let mydata1 = {
  name3:"Ajay",
  age:28
}
let {name3,age} = mydata1;

ReactDOM.render(
  <> 
  {/* mydata */}
  {/* <Refhooks></Refhooks> */}
{/* <Areduce></Areduce> */}
{/* <ABootstrap></ABootstrap>
<Bbootstrap></Bbootstrap> */}
{/* <BrowserRouter>
<Myfile></Myfile>
</BrowserRouter>  */}
  {/* <Style></Style> */}
{/* <StateClassComponent> </StateClassComponent> 
<Firstprops kname={name3} kage={age} ></Firstprops>
<Name1></Name1>
<Practiceprops about="practice" ></Practiceprops>
<Funtionstate></Funtionstate>
<lifecyle></lifecyle> */}
{/* <Classcomponent name="classcomponet"></Classcomponent> */}
<Fcom  Name1="Ankit"></Fcom>
<Fcom2></Fcom2>
<Ccomp></Ccomp>  
</>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
