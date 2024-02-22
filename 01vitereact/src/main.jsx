import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
   return (
    <div>
        <h1>Custom App | Nireeksha</h1>
    </div>
   )
}
// const ReactElement ={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank',
//     },
//     children:'Click me to visit google '
// }

const anotherElement = (
    <a href="http://google.com" target="_blank">Visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'http://google.com', target:'_blank'},
    'Click me to Visit google',
    anotherUser
    )


ReactDOM.createRoot(document.getElementById('root')).
render(
    // MyApp()
    //  <MyApp/>
    reactElement
    // anotherElement
    // ReactElement
    // App()

)
