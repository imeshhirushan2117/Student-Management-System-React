import StudentActivity from '../../pages/StudentActivity/StudentActivity'
import StudentView from '../../pages/StudentView/StudentView'
import TableViewIcon from '@mui/icons-material/TableView';
import BoyIcon from '@mui/icons-material/Boy';

const routes = [
    {
        name: "Student View",
        key: "studentView",
        path: "/studentView",
        component: <StudentView />,
        icon: <TableViewIcon />

    },

    {
        name: "Student Activity",
        key: "student",
        path: "/studentActivity",
        component: <StudentActivity />,
        icon: <BoyIcon />

    }
]

export default routes