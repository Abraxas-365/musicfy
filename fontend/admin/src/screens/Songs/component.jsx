import { Box, IconButton, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../lib/Components/Share/Header";
import { useSongs } from "./utils";
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import { Link, useNavigate } from "react-router-dom";
import SongActions from "../../lib/Components/Song/SongActions";

const Song = () => {
  const { songs, isLoading } = useSongs()
  if (!isLoading) {
    console.log(songs)
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
      field: "album_id",
      headerName: "album Id",
      headerAlign: "left",
      align: "left",
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
        <SongActions {...{ params }} />
      ),
      flex: 1,
    },
  ];
  const navigate = useNavigate();
  return (

    <Box m="20px">
      <Box display='flex'>
        <Box sx={{ flex: 1 }}>
          <Header title="Songs" subtitle="MusicFy songs" />
        </Box >
        <IconButton onClick={() => { navigate('/newSong') }} >
          < ControlPointDuplicateIcon />
          <p style={{ color: colors.grey[100] }}>Add Song</p>
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
        <DataGrid checkboxSelection rows={songs} columns={columns} />
      </Box>
    </Box>
  );
};

export default Song;
