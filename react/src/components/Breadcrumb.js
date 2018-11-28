import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbExampleLargeSize = () => (
  <Breadcrumb size='large'>
    <Breadcrumb.Section href="/">HOME</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section href="/ShotDetail">DETAIL</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbExampleLargeSize