import React from 'react'
import { List } from 'semantic-ui-react'

const Shot_list = (props) => {

  return (

    <List selection verticalAlign='middle'>
      <List.Item>

        <List.Content>
          <List.Header href="/ShotDetail">1. 아이유</List.Header>
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

      <List.Item>

        <List.Content>
          <List.Header>4. 함용재</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>

        <List.Content>
          <List.Header>5. 송빈산</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>

        <List.Content>
          <List.Header>6. 김희겸</List.Header>
        </List.Content>
      </List.Item>

      <List.Item>

        <List.Content>
          <List.Header>7. 함용재</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>

        <List.Content>
          <List.Header>8. 송빈산</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>

        <List.Content>
          <List.Header>9. 김희겸</List.Header>
        </List.Content>
      </List.Item>

    </List>
  )
}

export default Shot_list