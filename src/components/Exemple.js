import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

//Components
import Classes from "./../layout/NymeStyle";
import NymePage from "./../layout/NymePage";

function Example() {
  const cards = [1, 2, 3, 4, 5, 6];

  console.log(Classes());

  return (
    <NymePage>
      <div className={Classes().heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Ganymedes Project
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            <p>
              Distance from Jupiter: Ganymede is the seventh moon and third Galilean satellite outward from Jupiter, orbiting at
              about 1.070 million kilometers.
            </p>{" "}
            <p>It takes Ganymede about seven Earth-days to orbit Jupiter.</p>
          </Typography>
          <div className={Classes().heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div>
        <Container className={Classes().cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={Classes().card}>
                  <CardMedia className={Classes().cardMedia} image="https://source.unsplash.com/random" title="Image title" />
                  <CardContent className={Classes().cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Photos
                    </Typography>
                    <Typography>This is a media card. You can use this section to describe the content.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </NymePage>
  );
}

export default Example;
