import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = () => {
  return (
    <div>
      <Card sx={{ margin: "25px" }}>
        <CardActions>
          <Typography variant="h4" component="h2">
            h1. Heading
          </Typography>

          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedbox={<BookmarkBorderIcon />}
            />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </CardActions>

        <CardMedia sx={{  }}
          component="img"
          height="194"
          image={require("../photo/photo1.png")}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
