import React from 'react';
import './App.css';
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from "@mui/material"
import TopBar from './lib/Components/UI/TobBar';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './lib/Components/UI/SideBar';
import Dashboard from './screens/Dashboard';
import Album from './screens/Albums';
import Song from './screens/Songs';
import NewAlbum from './screens/NewAlbum/component';
import EditAlbum from './screens/EditAlbum/component';
import NewSong from './screens/NewSong/component';
import EditSong from './screens/EditSong';

const App = () => {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='app'>
                    <Sidebar />
                    <main className='content'>
                        <TopBar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/album" element={<Album />} />
                            <Route path="/song" element={<Song />} />
                            <Route path="/newSong" element={<NewSong />} />
                            <Route path="/newAlbum" element={<NewAlbum />} />
                            <Route path="/editAlbum/:id" element={<EditAlbum />} />
                            <Route path="/editSong/:id" element={<EditSong />} />
                        </Routes >
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App;
