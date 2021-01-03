import React from 'react'
import TreeItem from './treeItem'
import TreeView from './treeView'


import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Tree({ data, onClick }) {
  const classes = useStyles()

  const handleClick = (e,id) => {
    e.stopPropagation()
    console.log(id);
  }

  function renderNodes(items) {
    return items.map(item => {
      return (
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            
            </ListSubheader>
          }
          className={classes.root}
        >
          <TreeItem
            key={item.id}
            icon={item.icon}
            onClick={(e)=>handleClick(e,item.id)}
            label={item.name}
            children={item.children && renderNodes(item.children)}
          />
        </List>
      )
    })
  }

  return (
    <TreeView>
      {renderNodes(data)}
    </TreeView>
  )
}
