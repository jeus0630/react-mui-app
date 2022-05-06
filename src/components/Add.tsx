import { Fab, Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function Add() {
    return (
        <>
            <Tooltip title="Delete" sx={{
                position: 'fixed',
                bottom: 20,
                left: {
                    xs: 'calc(50% - 25px)',
                    md: 30
                }
            }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon /> 
                </Fab>
            </Tooltip>
        </>
    )
}