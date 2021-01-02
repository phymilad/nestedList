import React from 'react'
import TreeItem from './treeItem'
import TreeView from './treeView'


export default function Tree({ data, onClick }) {
  
  function renderNodes(items){
    return items.map(item => {
      return(
      <TreeItem
        onClick={()=>onClick(item.id)}
        key={item.id} 
        label={item.name} 
        nodeId={item.id} 
        children={item.children && renderNodes(item.children)}
      />
      )
    })
  }

  return (
    <TreeView>
      {renderNodes(data)}
    </TreeView>
  )
}
