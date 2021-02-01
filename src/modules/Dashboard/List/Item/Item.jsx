import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./Item.scss";

export const Item = ( { productName, imageURLs, retailPrice } ) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={productName}
                    height="600"
                    image={imageURLs[0]}
                />
                <CardContent>
                    <Link className="card__title" href="#">{productName}</Link>
                    <Typography component="p">Price - {retailPrice}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};