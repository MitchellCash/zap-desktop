import React from 'react'
import { Flex } from 'rebass'

/**
 * @render react
 * @name Page
 * @example
 * <Page>Some content</Page>
 */
const Page = props => (
  <Flex
    as="article"
    bg="primaryColor"
    color="primaryText"
    css={`
      position: relative;
      height: 100%;
      overflow: hidden;
      min-width: 900px;
      min-height: 425px;
      box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
    `}
    {...props}
  />
)

export default Page
