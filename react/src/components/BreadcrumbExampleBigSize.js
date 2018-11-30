import React, { Component } from 'react'
import { Breadcrumb } from 'semantic-ui-react'
export default class BreadcrumbExampleBigSize extends Component {

  render() {
    return (
      <Breadcrumb size='big'>
        <Breadcrumb.Section link href="/">Home</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section link href="/ShotDetail">{this.props.page}</Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}
