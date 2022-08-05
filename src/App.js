import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './App.css';
import { Avatar, Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [onTop, setOnTop] = React.useState(true);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 50) {
        setOnTop(true)
      } else {
        setOnTop(false)
      }
    }
  }, [])

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Box sx={{ flexGrow: 1, height: 1500 }}>
      <AppBar position="fixed" sx={{
        ':hover': {
          '#too': {
            top: 64
          }
        }
      }}>
        <Toolbar sx={{zIndex: 10, background: '#1976d2'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            ОЛИМП КЛИНИК
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="поиск по сайту..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
          <div>
          <Button sx={{background: 'green', marginRight: '0'}}>Оформление заказа</Button>  
          </div>  
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
        <Toolbar id="too" sx={{position: 'fixed', top: onTop ? 64 : 0, width: '100%', background: 'green', transition: 'all 0.3s ease'}}>
         <Button>Направления </Button> 
         <Button>Специалисты</Button>
         <Button>Предложения</Button>
         <Button>Клиники </Button>
         <Button>Аппараты</Button>
         <Button>Пациенты</Button>
         <Button>Новости и медиа</Button>
         <Button>О клинике</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
    </Box>
  );
}

