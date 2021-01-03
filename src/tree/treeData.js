import SearchIcon from '@material-ui/icons/Search';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import ReportIcon from '@material-ui/icons/Report';
import KeyboardOutlinedIcon from '@material-ui/icons/KeyboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CropSquareIcon from '@material-ui/icons/CropSquare';

const treeData = [
    {
        id:'1',
        name:'Search',
        icon: <SearchIcon />,
        children:[
            {
                id:'2',
                name:'File',
                icon: <FolderOpenIcon/>
            },
            {
                id:'3',
                name:'Records',
                icon: <AlbumOutlinedIcon/>
            }
        ]
    },
    {
        id:'4',
        name:'Cartable',
        icon: <TableChartOutlinedIcon/>
    },
    {
        id:'5',
        name:'Reports',
        icon: <ReportIcon/>
    },
    {
        id:'6',
        name:'Keywords',
        icon: <KeyboardOutlinedIcon/>
    },
    {
        id:'7',
        name:'Setting',
        icon: <SettingsOutlinedIcon/>
        
    },
    {
        id:'8',
        name:'Management',
        icon: <CropSquareIcon/>
        
    },
]

export default treeData;