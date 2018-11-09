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
    background: 'gray',
    height: '20%',
    align: 'justify',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  gridListTile: {
    boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
    margin: '5px',
    borderRadius : '5px',
  },
  gridListTileImageH: {
    height: '95%',
    width: '100%'
  }
});


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
                imgFullHeight: classes.gridListTileImageH
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