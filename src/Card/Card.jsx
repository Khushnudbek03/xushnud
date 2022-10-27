import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';    
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


class MediaCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            card:[
                {
                    id: 1,
                    name: 'Xushnud',
                    surname: 'Maripjonov',
                    spec: 'Fron-end',
                    number: '+998 91 288 85 89'
                },
                {
                    id: 2,
                    name: 'Begzodbek',
                    surname: 'Turgunov',
                    spec: 'Full-stack',
                    number: '+998 93 893 44 99'
                }
            ],
            num: 0 
        }
    }

    render() {
        return (
            <>

                <Card sx={{ minWidth: 255 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterCenter>
                        {this.state.card[this.state.num].spec}
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 1 }} component="div">
                            {this.state.card[this.state.num].name} {this.state.card[this.state.num].surname}
                        </Typography>
                        <Typography sx={{ mb: 0.1 }} color="text.secondary">
                            {this.state.card[this.state.num].number}
                        </Typography>




                        <List>
                            {this.state.card.map(e=>{
                                return(
                                    <ListItem alignItems="flex-start" onClick={()=>this.setState({...this.state,num: e.id-1 })}>
                                    <ListItemAvatar>
                                        <Avatar/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={e.name + ' '+ e.surname}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary">
                                                    {e.spec}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                )
                            })}
                        </List>
                    </CardContent>
                </Card>

            </>
        )
    }

}


export default MediaCard;