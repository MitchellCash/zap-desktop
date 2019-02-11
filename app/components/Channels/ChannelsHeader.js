import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { ChannelsInfo, ChannelsActions } from 'components/Channels'

const ChannelsHeader = ({
  channels,
  channelBalance,
  changeFilter,
  filter,
  filters,
  updateChannelSearchQuery,
  searchQuery,
  ...rest
}) => (
  <Box as="header" mb={3} {...rest}>
    <ChannelsInfo channels={channels} channelBalance={channelBalance} mb={3} />
    <ChannelsActions
      filter={filter}
      filters={filters}
      changeFilter={changeFilter}
      updateChannelSearchQuery={updateChannelSearchQuery}
      searchQuery={searchQuery}
    />
  </Box>
)

ChannelsHeader.propTypes = {
  channels: PropTypes.array,
  channelBalance: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
  searchQuery: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
  updateChannelSearchQuery: PropTypes.func.isRequired
}

ChannelsHeader.defaultProps = {
  channels: []
}

export default ChannelsHeader
