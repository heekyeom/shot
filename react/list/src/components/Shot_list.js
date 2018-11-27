import React from 'react'
import { List } from 'semantic-ui-react'

const Shot_list = (props) => {
  
  
  
  return(

    <List selection verticalAlign='middle'>
      <List.Item>

        <List.Content>
          <List.Header>1. 함용재</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>

        <List.Content>
          <List.Header>2. 송빈산</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>

        <List.Content>
          <List.Header>3. 김희겸</List.Header>
        </List.Content>
      </List.Item>
    </List>
  )
}

export default Shot_list