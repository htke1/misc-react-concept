import React from 'react';
import reactDom from 'react-dom';
function Modal({status, setOpen}) {
    return reactDom.createPortal(status?(
        <div>
           <div><h2>Welcome to mi channel.</h2></div>
       <div><p>This is a sample modal.</p></div>
       <button>continue</button>
       <button onClick={()=>setOpen(false)}>cancel</button>
        </div>
    ):(<div>just without modal open.</div>),document.getElementById('modalroot')
)}

export default Modal;