
import './App.css';
import Modal from './modal.js/modal';
import {useState, useRef, lazy, Suspense} from 'react'
import Checkit from './Checkit';
import ErrorBoundary from './ErrorBoundary';
const LazyComp = lazy(()=>import('./lazyComp'));
function App() {
const [open, setOpen]=useState(false);
const  inputRef = useRef(null);
function handleC(){
  inputRef.current.focus();
  console.log(inputRef.current.value)
}
  return (
   <div>
     <button onClick={()=>setOpen(true)}>click</button>
     <Modal  status={open} setOpen={setOpen}>
       
     </Modal>
     <input ref={inputRef}></input>
     <button onClick={handleC}>focus mf</button>
     <ErrorBoundary><Checkit name="Sonam"/></ErrorBoundary>
     
     <Checkit name="Tenzin"/>
     <ErrorBoundary>  <Checkit name="Raju"/></ErrorBoundary>
     <Suspense fallback={<h2>This is suspense. It is long to make it more noticible..................</h2>}>
     <LazyComp/></Suspense>
   </div> 
  )
}

export default App;

/* This example requires Tailwind CSS v2.0+ */


