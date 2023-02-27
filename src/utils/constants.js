
import { mainRoutes } from "../routes/mainRoutes";
import solverRoutes from "../routes/solverRoutes";




export const APPS = [
    {
        subdomain: 'www',
        app: mainRoutes,
        main:true
    },
    {
        subdomain: 'solver',
        app: solverRoutes,
        main:false
    }
]