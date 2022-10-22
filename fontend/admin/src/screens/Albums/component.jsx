import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ColorModeContext, tokens } from "../../theme";
import Header from "../../lib/Components/Share/Header";
import { useAlbum } from './utils'
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import AlbumActions from "../../lib/Components/Album/AlbumActions";
import { Link, useNavigate } from "react-router-dom";
const Album = () => {
    const { albums, isLoading } = useAlbum()
    if (!isLoading) {
        console.log(albums)
    }
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "artist",
            headerName: "Artist",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "year",
            headerName: "Year",
            flex: 1,
        },
        {
            field: "url",
            headerName: "Url Image",
            flex: 1,
            renderCell: (params) => (
                <Avatar src={params.row.url} variant='rounded' />
            )
        },
        {
            field: "createdAt",
            headerName: "Created At",
            flex: 1,
        },
        {
            field: "actions",
            headerName: "Actions",
            renderCell: (params) => (
                <AlbumActions {...{ params }} />
            ),
            flex: 1,
        },


    ];

    const navigate = useNavigate();
    return (

        <Box m="20px" >
            <Box display='flex'>
                <Box sx={{ flex: 1 }}>
                    <Header title="Albums" subtitle="MusicFy albums" />
                </Box >
                <IconButton onClick={() => { navigate('/newAlbum') }} >
                    < ControlPointDuplicateIcon />
                    <p style={{ color: colors.grey[100] }}>Add Album</p>
                </IconButton>
            </Box>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid checkboxSelection rows={albums} columns={columns} />
            </Box>
        </Box>
    );
};

export default Album;
