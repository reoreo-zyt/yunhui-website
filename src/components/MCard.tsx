import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "@src/scss/MCard.scss";
import SimpleImageSlider from "react-simple-image-slider";

MCard.propTypes = () => ({
  maxWidth: {
    type: "number",
    defaultValue: 1200,
  },
  imgUrl: {
    type: "string",
    defaultValue: "",
  },
  imgTitle: {
    type: "string",
    defaultValue: "",
  },
  title: {
    type: "string",
    defaultValue: "",
  },
  body: {
    type: "Array",
    defaultValue: [],
  },
  isShowButton: {
    type: "boolean",
    defaultValue: true,
  },
  isCardMedia: {
    type: "boolean",
    defaultValue: false,
  },
});

type MCardBodyType = {
  text: string;
};

export default function MCard({
  maxWidth = 1200 as number,
  imgUrl = "" as string,
  imgTitle = "" as string,
  title = "" as string,
  body = [] as Array<MCardBodyType>,
  isShowButton = true as boolean,
  isCardMedia = false as boolean,
}) {
  const navigate = useNavigate();
  const useStyles = makeStyles({
    root: {
      maxWidth,
    },
  });
  const classes = useStyles();
  const handleNavigateTo = () => {
    navigate("/about");
    // 通知 tab 组件切换
  };
  const images = [
    {
      url: "/images/Card1-1.jpg",
    },
    {
      url: "/images/Card1-2.jpg",
    },
    {
      url: "/images/Card1-3.jpg",
    },
  ];
  const isMobile = window.innerWidth <= 768;
  return (
    <Card className={classes.root}>
      <CardActionArea
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isCardMedia ? (
          <CardMedia
            component="img"
            alt="超净间"
            height="140"
            image={imgUrl}
            title={title}
          />
        ) : (
          <SimpleImageSlider
            style={{
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            width={isMobile ? 400 : 896}
            height={isMobile ? 270 : 504}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            slideDuration={3}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {body.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.text}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isShowButton ? (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleNavigateTo}
          >
            更多
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}
