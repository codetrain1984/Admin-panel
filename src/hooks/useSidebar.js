import HomeIcon from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article'
import AppsIcon from '@mui/icons-material/Apps'
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined'
import InvertColorsIcon from '@mui/icons-material/InvertColors'
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'

const useSidebar = () => {
  const sidebarData = [
    {
      title: 'Dashboard',
      icon: <HomeIcon sx={{ color: '#B0A8B9' }} />,
      link1: '',
      link2: '',
      link3: '',
      link4: '',
      subtitle1: 'Classic',
      subtitle2: 'Minimal',
      panelNum: 'panel1',
    },
    {
      title: 'Pages',
      icon: <ArticleIcon sx={{ color: '#B0A8B9' }} />,
      link1: '/login',
      link2: '/register',
      link3: '/forgot-password',
      subtitle1: 'Login',
      subtitle2: 'Register',
      subtitle3: 'Forgot Password',
      panelNum: 'panel2',
    },
    {
      title: 'Application',
      icon: <AppsIcon sx={{ color: '#B0A8B9' }} />,
      link1: '',
      link2: '',
      link3: '',
      link4: '',
      subtitle1: 'Mail Box',
      subtitle2: 'Chat',
      subtitle3: 'FAQ',
      panelNum: 'panel3',
    },
    {
      title: 'UI Component',
      icon: <PaletteOutlinedIcon sx={{ color: '#B0A8B9' }} />,
      link1: '',
      link2: '',
      link3: '',
      link4: '',
      subtitle1: 'Elements',
      subtitle2: 'Components',
      subtitle3: 'one',
      panelNum: 'panel4',
    },
    {
      title: 'Widgets',
      icon: <InvertColorsIcon sx={{ color: '#B0A8B9' }} />,
      link1: '',
      link2: '',
      link3: '',
      link4: '',
      subtitle1: 'Chart Box 1',
      subtitle2: 'Profile Box',
      panelNum: 'panel5',
    },
    {
      title: 'Forms',
      icon: <ViewListOutlinedIcon sx={{ color: '#B0A8B9' }} />,
      link1: '',
      link2: '',
      link3: '',
      link4: '',
      subtitle1: 'Elements',
      subtitle2: 'Widgets',
      panelNum: 'panel6',
    },
    {
      title: 'Charts',
      icon: <BarChartOutlinedIcon sx={{ color: '#B0A8B9' }} />,
      link1: '',
      link2: '',
      link3: '',
      link4: '',
      subtitle1: 'ChartJS',
      subtitle2: 'Apex Chart',
      subtitle3: 'Chart Sparkline',
      panelNum: 'panel7',
    },
  ]

  return { sidebarData }
}

export default useSidebar
