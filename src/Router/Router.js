import { createBrowserRouter } from "react-router-dom";
import Main from '../body/main'
import Content from '../body/content'
import Watch from '../watch/Watch'
import Todolist from "../todolist/todolist";
import Check from "../check/check";


export const appRouter = createBrowserRouter ([
    {
        'path':'/',
        'element':<Main/>,
        'children':[{
            'path':"/",
            'element':<Content/>,         
        },
        {
            "path":"/watch",
            'element':<Watch/>,
        },{
            "path" : "/todo",
            "element" : <Todolist/>
        },{
            "path":"/check",
            "element": <Check/>
        }
        ]

    }
])