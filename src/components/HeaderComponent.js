import React, { useState } from 'react';
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Toolbar,
	Typography,
} from '@mui/material';

import {
	CoPresentOutlined,
	HomeOutlined,
	HowToRegOutlined,
	LogoutOutlined,
	Menu,
	SchoolOutlined,
	StickyNote2Outlined,
} from '@mui/icons-material';

const HeaderComponent = ({ history, user, hasMenu }) => {
	const anchor = 'right';
	const [state, setState] = useState({
		right: false,
	});
	const signout = () => {
		localStorage.removeItem('user');
		history.push('/login');
	};
	const toggleDrawer = (anchor, open) => event => {
		setState({ ...state, [anchor]: open });
	};

	const menuItems = [
		{
			page: 'Frequência',
		},
		{
			page: 'Diário de Classe',
		},
		{
			page: 'Notas',
		},
		{
			page: 'Sair',
			onClick: () => signout(),
		},
	];
	const sideBarItems = [
		{
			page: 'Início',
			icon: HomeOutlined,
		},
		{
			page: 'Turmas',
			icon: CoPresentOutlined,
		},
		{
			page: 'Frequência',
			icon: HowToRegOutlined,
		},
		{
			page: 'Diário de Classe',
			icon: StickyNote2Outlined,
		},
		{
			page: 'Notas',
			icon: SchoolOutlined,
		},
		{
			page: 'Sair',
			icon: LogoutOutlined,
			onClick: () => signout(),
		},
	];
	return (
		<AppBar
			position='static'
			color='white'
			elevation={0}
			sx={{ height: '64px' }}
		>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					{/* Texto do Header (== sm) */}
					<Typography
						href='/'
						variant='h5'
						noWrap
						component='a'
						sx={{
							flexGrow: 1,
							textDecoration: 'none',
							display: { xs: 'flex', md: 'none' },
						}}
					>
						Canal do{' '}
						<Box component='span' fontWeight='fontWeightBold' sx={{ ml: 1 }}>
							Professor
						</Box>
					</Typography>
					{/* Texto do Header (> md) */}
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='/'
						color='primary'
						sx={{
							mr: 2,
							textDecoration: 'none',
							display: { xs: 'none', md: 'flex' },
						}}
					>
						Canal do{' '}
						<Box component='span' fontWeight='fontWeightBold' sx={{ ml: 1 }}>
							Professor
						</Box>
					</Typography>

					{/* Menu (== sm)*/}
					{hasMenu !== false ? (
						<Box sx={{ flexGrow: 0 }}>
							<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
								<IconButton
									size='large'
									aria-label='account of current user'
									aria-controls='menu-appbar'
									aria-haspopup='true'
									onClick={toggleDrawer(anchor, true)}
									color='inherit'
								>
									<Menu />
								</IconButton>
								<SwipeableDrawer
									anchor={'right'}
									open={state[anchor]}
									onClose={toggleDrawer('right', false)}
									onOpen={toggleDrawer('right', true)}
								>
									<List>
										{sideBarItems.map(item => (
											<ListItem>
												<ListItemButton onClick={item.onClick}>
													<ListItemIcon>
														<item.icon />
													</ListItemIcon>
													<ListItemText key={item.page} primary={item.page}>
														{item.page}
													</ListItemText>
												</ListItemButton>
											</ListItem>
										))}
									</List>
								</SwipeableDrawer>
							</Box>
						</Box>
					) : (
						''
					)}

					{/* Menu (> md)*/}
					{hasMenu !== false ? (
						<Box
							sx={{
								ml: 'auto',
								display: { xs: 'none', md: 'flex' },
							}}
						>
							{menuItems.map(item => (
								<Button
									key={item.page}
									variant='text'
									color='primary'
									sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}
									onClick={item.onClick}
								>
									{item.page}
								</Button>
							))}
						</Box>
					) : (
						''
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default HeaderComponent;

// {
// 	 <Menu
// 								id='menu-appbar'
// 								anchorEl={anchorElNav}
// 								anchorOrigin={{
// 									vertical: 'bottom',
// 									horizontal: 'left',
// 								}}
// 								keepMounted
// 								transformOrigin={{
// 									vertical: 'top',
// 									horizontal: 'left',
// 								}}
// 								open={Boolean(anchorElNav)}
// 								onClose={handleCloseNavMenu}
// 								sx={{
// 									display: { xs: 'block', md: 'none' },
// 								}}
// 							>
// }
// {
// 	 {pages.map(page => (
// 								<MenuItem key={page} onClick={handleCloseNavMenu}>
// 									<Typography textAlign='center'>{page}</Typography>
// 								</MenuItem>
// 							))}
// }
// {
// 	 </Menu>
// }
// {
// 	 <h3>{user.nomeCompleto}</h3>
// 							<h5>{user.formacao}</h5>
// 							Turmas
// 							Atividades
// 							Calendário
// 							Sair
// }
