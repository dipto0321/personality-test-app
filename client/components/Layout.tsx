import { FC } from 'react'
import Head from 'next/head'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Layout: FC<{}> = ({ children }) => (
  <Box sx={{ flexGrow: 1}}>
    <Head>
      <title>Personality Test</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <AppBar position='static'>
      <Toolbar variant='dense'>
				<Typography variant='h6' color='inherit' component='div' mx={'auto'}>
          Personality Test
        </Typography>
      </Toolbar>
    </AppBar>
    <main>{children}</main>
    <footer style={{position: 'fixed', bottom: 0, width: '100%'}}>
      <Box sx={{ bgcolor: 'primary.main', py: 2, textAlign: 'center' }}>
        <a
          href='https://diptokarmakar.me/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Typography color='white' component='div'>
            Built by Dipto Karmakar
          </Typography>
        </a>
      </Box>
    </footer>
  </Box>
)

export default Layout
