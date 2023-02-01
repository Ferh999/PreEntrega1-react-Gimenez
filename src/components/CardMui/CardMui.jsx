import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardMui = ({title, imagen, descripcion}) => {
    return (
        <div>
            <Card sx={{ maxWidth: 345, margin:"50px"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={imagen}
                        alt="green iguana"
                    
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {descripcion}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardMui