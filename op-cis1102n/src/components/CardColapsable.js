import {
    Box,
    Card,
    CardActions,
    CardContent,
    Typography, 

    styled,
    IconButton,
    Collapse,

} from '@mui/material';
import { Outlet } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const CardColapsable = (props) => {
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <Box sx={{
                p: 1,
                m: 1,
                textAlign: 'left',
            }}>
                <Card style={{ borderRadius: '20px', }}>
                    <CardContent sx={{ fontSize: 20, backgroundColor: '#d9d9d9' }}>
                        <Typography variant='h6'>
                            {props.title}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ backgroundColor: '#f2f2f2' }}>
                        <CardContent>
                        </CardContent>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography>
                                <ul>{props.desc}</ul>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Box>
            <Outlet />
        </>
    )
}

export default CardColapsable