import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0EC7BD',
      light: '#1DE3D8',
      dark: '#099790',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff6f00',
      light: '#ffa040',
      dark: '#c43e00'
    }

  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        backgroundColor: '#0EC7BD'
      }
    },
    MuiBottomNavigationAction: {
      root: {
        '&$selected': {
          color: '#fff'
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: '30px'
      }
    },
    MuiListItem: {
      root: {
        paddingTop: '1px',
        paddingBottom: '2px'
      }
    }
  }
})
