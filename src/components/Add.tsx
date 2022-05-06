import { Box, Fab, Modal, Tooltip, Typography, styled, Avatar, TextField, Stack, ButtonGroup, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from "react";
import {
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
}));

export default function Add() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip title="Delete" sx={{
                position: 'fixed',
                bottom: 20,
                left: {
                    xs: 'calc(50% - 25px)',
                    md: 30
                }
            }} onClick={() => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor='#fff' p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign={'center'}>
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Typography fontWeight={500} variant='body2'>John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{
                            width: '100%'
                        }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="what's on your mind?"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{
                            width: '100px'
                        }}>
                            <DateRange></DateRange>
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}