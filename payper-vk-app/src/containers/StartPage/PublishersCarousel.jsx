import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {publishersTileData} from '../../logic/PaperRepository';
import './PublishersCarousel.css';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft: '2%',
    alignContent: 'stretch',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    paddingBottom: '2%'
  },
  title: {
    align: 'left',
    color: 'black'
  },
  titleBar: {
    height: '20%',
    align: 'justify',
    background: 'rgba(255, 255, 255, 0.57)',
    'border-radius': '0px 0px 9px 9px',
  },
  gridListTile: {
    boxShadow: '2.5px 2.5px 8px rgba(0,0,0,0.25)',
    margin: '5px',
    borderRadius : '9px',
  },
  gridListTileImage: {
    borderRadius : '9px',
  }
});


//проверить обрезание с tile

function PublishersCarousel(props) {
  const { classes } = props;

  return (
    <div className='carousel'>
      <div className='publishers'>Издания</div>
      <div className={classes.root}>

        <GridList className={classes.gridList} cols={3} rows={0.5} spacing={0} >
          {publishersTileData.map(tile => (
              <GridListTile key={tile.img} classes={{
                root: classes.gridListTile,
                tile: classes.gridListTileImage
                }}>
                <img src={tile.img} alt={tile.title}/>
                <GridListTileBar
                  title={tile.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

PublishersCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PublishersCarousel);