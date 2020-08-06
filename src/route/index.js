
import Home from '../component/Nav';
import index from '../routers/index';
import create from '../routers/custom/Create';
import plan from '../routers/Plan';
import Login from '../routers/login';
import addShare from '../routers/addShare';
import TodoList from '../routers/doList/todoList';
import reduxDoList from '../routers/reduxDolist/todoList';
import course from '../routers/myCourse'
import custom from '../routers/custom/List'
import info from '../routers/myCourse/info'
export const routes = [
    {
        path: '/home',
        component: Home,
        routes: [
            {
                path: '/home/index',
                component: index
            },
            {
                path: '/home/create',
                component: create
            }, {
                path: '/home/plan',
                component: plan
            },
            {
                path: '/home/addShare',
                component: addShare
            },
            {
                path: '/home/doList',
                component: TodoList
            },
            {
                path: '/home/reduxDoList',
                component: reduxDoList
            },
            {
                path: '/home/course',
                component: course
            },
            {
                path:'/home/list',
                component:custom
            },
            {
                path:'/home/info',
                component:info
            }
        ]
    }, 
    {
        path: '/login',
        component: Login,
    }
]