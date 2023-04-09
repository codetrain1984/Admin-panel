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
      subtitle1: 'Classic',
      subtitle2: 'Minimal',
    },
    {
      title: 'Pages',
      icon: <ArticleIcon sx={{ color: '#B0A8B9' }} />,
      subtitle1: 'Login',
      subtitle2: 'Register',
      subtitle3: 'Forgot Password',
    },
    {
      title: 'Application',
      icon: <AppsIcon sx={{ color: '#B0A8B9' }} />,
      subtitle1: 'Mail Box',
      subtitle2: 'Chat',
      subtitle3: 'FAQ',
    },
    {
      title: 'UI Component',
      icon: <PaletteOutlinedIcon sx={{ color: '#B0A8B9' }} />,
      subtitle1: 'Elements',
      subtitle2: 'Components',
      subtitle3: 'one',
    },
    {
      title: 'Widgets',
      icon: <InvertColorsIcon sx={{ color: '#B0A8B9' }} />,
      subtitle1: 'Chart Box 1',
      subtitle2: 'Profile Box',
    },
    {
      title: 'Forms',
      icon: <ViewListOutlinedIcon sx={{ color: '#B0A8B9' }} />,
      subtitle1: 'Elements',
      subtitle2: 'Widgets',
    },
    {
      title: 'Charts',
      icon: <BarChartOutlinedIcon sx={{ color: '#B0A8B9' }} />,
      subtitle1: 'ChartJS',
      subtitle2: 'Apex Chart',
      subtitle3: 'Chart Sparkline',
    },
  ]

  return { sidebarData }
}

export default useSidebar
