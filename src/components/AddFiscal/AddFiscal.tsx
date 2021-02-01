import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
} from "@material-ui/core";

import yandex from "../../img/yandex-kassa-logo.png";
import rbk from "../../img/rbk_money.png";
import sberbank from "../../img/sberbank.png";
import tinkoff from "../../img/tinkoff-logo.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    minWidth: 300,
  },
  cardActions: {
    padding: "16px 24px",
  },
});

const AddFiscal = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} alignItems="flex-start">
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <img className="" src={yandex} alt={"yandex"} height="50" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="large" variant="contained" color="primary">
              Подключить
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <img className="" src={rbk} alt={"yandex"} height="50" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="large" variant="contained" color="primary">
              Подключить
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <img className="" src={tinkoff} alt={"yandex"} height="50" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="large" variant="contained" color="primary">
              Подключить
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <img className="" src={rbk} alt={"yandex"} height="50" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="large" variant="contained" color="primary">
              Подключить
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <img className="" src={sberbank} alt={"yandex"} height="50" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="large" variant="contained" color="primary">
              Подключить
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <img className="" src={tinkoff} alt={"yandex"} height="50" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="large" variant="contained" color="primary">
              Подключить
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <img className="" src={yandex} alt={"yandex"} height="50" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="large" variant="contained" color="primary">
              Подключить
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <img className="" src={sberbank} alt={"yandex"} height="50" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="large" variant="contained" color="primary">
              Подключить
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardContent>
            <img className="" src={rbk} alt={"yandex"} height="50" />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="large" variant="contained" color="primary">
              Подключить
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddFiscal;
