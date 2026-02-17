import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useCart } from '@/globals/contexts/Cart';
import { ProductProps } from '@/globals/types';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));



const Product: React.FC<ProductProps> = ({ id, name, subtext, price, description, imgSrc }) => {
  const { dispatch } = useCart();
  const [expanded, setExpanded] = React.useState(false);

  if (!imgSrc) imgSrc = '/No_Image_Available.jpg';

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={`price ${price} €`}
      />
      <CardMedia component="img" height="194" image={imgSrc} alt="image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {subtext || "There should be a subtext here but there isn't one yet."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to cart"
          onClick={() => {
            dispatch({ type: "ADD_ITEM", payload: { id, name, price } })
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>

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
          <Typography >
            {description || "There should be a description here but there isn't one yet."}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Product;
