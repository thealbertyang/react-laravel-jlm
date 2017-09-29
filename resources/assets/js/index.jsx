import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import AppRouter from "./components/AppRouter"

import store from "./store"

const app = document.getElementById('root')

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, app);