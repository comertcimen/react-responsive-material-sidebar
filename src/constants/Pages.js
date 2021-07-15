import HomeIcon from "@material-ui/icons/Home";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PetsIcon from "@material-ui/icons/Pets";
import ArticleIcon from "@material-ui/icons/Article";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import SettingsIcon from "@material-ui/icons/Settings";
import WorkIcon from "@material-ui/icons/Work";

const pages = [
  {
    label: "Dashboard",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: <CalendarTodayIcon />,
  },
  {
    label: "Clients",
    path: "/clients",
    icon: <WorkIcon />,
  },
  {
    label: "Animals",
    path: "/animals",
    icon: <PetsIcon />,
  },
  {
    label: "Stocks",
    path: "/stocks",
    icon: <ArticleIcon />,
  },
  {
    label: "Finance",
    path: "/finance",
    icon: <ShowChartIcon />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

export default pages;
