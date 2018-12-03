import React from 'react'
import { Statistic } from 'semantic-ui-react'

const Count = () => (
  <div class="Count">
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>17</Statistic.Value>
        <Statistic.Label>Today</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>312</Statistic.Value>
        <Statistic.Label>Month</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>8319</Statistic.Value>
        <Statistic.Label>Year</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </div>
)

export default Count

