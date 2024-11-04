import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({ image, title, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <h2 className="text-md font-semibold mb-2 text-gray-600">{title}</h2>
          <p className="text-md text-gray-700 font-semibold ">{price}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
