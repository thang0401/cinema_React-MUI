import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import  Rating  from '@mui/material/Rating';
import { Link } from 'react-router-dom';
function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" color="primary" >
              {post.title}
            </Typography>
            <Typography variant="subtitle1">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" >
              {post.description}
            </Typography>
            <Typography variant="subtitle1">
              {post.time}
            </Typography>
            <Typography variant="subtitle1" >
              {post.release}
            </Typography>
            <Link to={'/Checkout'}>
            <Button variant="contained" style={{ minWidth: '100px', margin: '10px 10px 10px 10px'}}>Đặt vé</Button>
            </Link>
            <Rating name="read-only" value={post.rating} readOnly />
            <Typography variant="caption" style={{margin : '0px 0px 10px 10px' }}> {post.rating}</Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 'auto', height: 250 , display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
          
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;