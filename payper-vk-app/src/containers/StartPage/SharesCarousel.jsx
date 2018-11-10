import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {sharesTileData} from '../../logic/PaperRepository';
import './SharesCarousel.css';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft: '2%',
    alignContent: 'stretch'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    paddingBottom: '2%',
  },
  gridListTile: {
    margin: '5px',
    boxShadow: '2.5px 2.5px 8px rgba(0,0,0,0.25)',
    borderRadius: '20px'
  },
  gridListTileImage: {
    borderRadius: '20px',
  }
});


function SharesCarousel(props) {
  const { classes } = props;

  return (
    <div className='carousel'>
      <div className='shares'>Популярные рассылки</div>
      <div className={classes.root}>

        <GridList className={classes.gridList} cols={3} spacing={0} >
          {sharesTileData.map(tile => (
              <GridListTile rows={0.8} classes={{
                root: classes.gridListTile,
                tile: classes.gridListTileImage
                }}>
                <img src={tile.img}/>
              </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

SharesCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SharesCarousel);