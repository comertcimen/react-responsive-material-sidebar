
# React Responsive Material Sidebar

This is a reponsive sidebar example built with React, MaterialUI, Redux and React Router.



## Demo

Insert gif or link to demo

[Demo Netlify](https://react-responsive-material-sidebar.netlify.app/)
## Installation

Install with npm

```bash
git clone https://github.com/comertcimen/react-responsive-material-sidebar.git
cd react-responsive-material-sidebar
npm i
npm start
```
    
## Adding New Navlinks


``src/constants/Pages.js``

```javascript
...
import AddIcon from '@material-ui/icons/Add';

const pages = [
...,
{
    label: "Add",
    path: "/add",
    icon: <AddIcon />,
  },
]
```

``src/containers/App.js``

```javascript
...
import NewPage from "../views/NewPage";

const pages = [
...
<Route exact path='/add'>
    <NewPage />
</Route>
...
```

  