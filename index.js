import React from 'react';
import ReactDOM from 'react-dom/client';


const heading=document.createElement('h1');
heading.innerHTML="nAMASTE jAVASCRIPT";
const root=document.getElementById('root');
root.appendChild(heading);


const head=React.createElement('h1',{},"Namaste React");
    const head1=React.createElement('h1',{},"Namaste React");
    const head2=React.createElement('h2',{},"Namaste React");
    const head3=React.createElement('h3',{},"Namaste React");
    const content=React.createElement('div',{id:"container",
    
    style:{backgroundcolor:"yellow",color:"blue"}},[head,head1,head2,head3])

    const root1=ReactDOM.createRoot(document.getElementById('root'));
    root1.render(content)