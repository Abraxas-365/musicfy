import { Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { Delete, Edit } from '@mui/icons-material'
import { apiSong } from '../../../Data/api/apiCalls';
import { useNavigate } from 'react-router-dom';

const SongActions = ({ params }: any) => {
    const navigate = useNavigate();
    return (
        <Box>
            <Tooltip title="Edit this album">
                <IconButton onClick={() => {
                    navigate(`/editSong/${params.row.id}`)
                }}>
                    <Edit />
                </IconButton>
            </Tooltip>

            <Tooltip title="Delete this album">
                <IconButton onClick={async () => {
                    await apiSong.delete(`/delete/${params.row.id}`,);
                    window.location.reload();
                }}>
                    <Delete />
                </IconButton>
            </Tooltip>

        </Box>
    );
};

export default SongActions;
