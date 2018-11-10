import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {categoryTileData} from '../../logic/PaperRepository';
import './CategoryCarousel.css';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft: '2%',
    alignContent: 'stretch',
    height: '3em'
  },
  title: {
    align: 'left',
    color: 'black'
  },
  titleBar: {
    background: 'gray',
    height: '100%',
    align: 'justify',
    borderRadius: '20px',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    paddingBottom: '2%',
    width: '100%'
  },
  gridListTile: {
    margin: '5px'
  },
});


function CategoryCarousel(props) {
  const { classes } = props;

  return (
    <div className='carousel'>
      <div className='categories'>Поиск по категориям</div>
      <div className={classes.root}>

        <GridList className={classes.gridList} cols={3} spacing={0} cellHeight='auto' >
          {categoryTileData.map(tile => (
              <GridListTile classes={{
                root: classes.gridListTile
                }}>
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

CategoryCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryCarousel);