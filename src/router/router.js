import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import { About, Home } from "../components";


export const router  = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    }
])