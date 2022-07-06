
import { AddOutlined } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView/>
            <Button>
                <IconButton 
                size="large" 
                sx={{
                    color:'white',
                    backgroundColor:'purple',
                    ':hover':{backgroundColor:'secondary.main',opacity:'0.9'},
                    position:'fixed',
                    right:50,
                    bottom:50
                }}
                >
                    <AddOutlined sx={{color:"white"}}/>
                </IconButton>

            </Button>
        </JournalLayout>
        
    )
}
