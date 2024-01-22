import ViewStudent from "../../Pages/ViewStudent/ViewStudent"
import StudentAction from '../../Pages/StudentAction/StudentAction'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const routes = [
    {
        name:'Student View',
        path:'/student',
        component:<ViewStudent/>,
        icon:<AnalyticsIcon/>
    },

    {
        name:'Student Action',
        path:'/action',
        component:<StudentAction/>,
        icon:<AccessibilityNewIcon/>
    },
]

export default routes