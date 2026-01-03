import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

const anotherUser = 'chai aur react'

//react ka andar apan jo html mai pass karta hai voh asa he jata hai

const reactElement = React.createElement(
  'a',
  { href: "https://google.com",
     target: "_blank",},
  'click me o visit google',
  anotherUser
)


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


//creat root kya karta hai virtual dom bana ta hai or campare karta hai original dom sa
createRoot(document.getElementById('root')).render(
   reactElement
)
