import { Box, Divider, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { APP_GRID_COLUMN, APP_GRID_TEMPLATE_COLUMN } from '~/constants/layouts'
import { ProfileDescription } from '~/features/profile/components/ProfileDescription'
import { ProfileTabs } from '~/features/profile/components/ProfileTabs'
import { NextPageWithLayout } from '~/lib/types'
import { AppGrid } from '../AppGrid'
import { AdminLayout } from './AdminLayout'
import { nestLayout } from './nestLayout'

const _ProfileLayout: NextPageWithLayout['getLayout'] = (page) => {
  const { query } = useRouter()
  const username = String(query.username)

  return (
    <Flex w="100%" flexDir="column">
      <AppGrid
        templateColumns={APP_GRID_TEMPLATE_COLUMN}
        bg="base.canvas.brand-subtle"
      >
        <Box gridColumn={APP_GRID_COLUMN}>
          <ProfileDescription username={username} />
        </Box>
      </AppGrid>
      <AppGrid
        flex={1}
        templateColumns={APP_GRID_TEMPLATE_COLUMN}
        templateRows="min-content 1px auto"
        bg="white"
      >
        <Box gridColumn={APP_GRID_COLUMN}>
          <ProfileTabs username={username} />
        </Box>
        <Divider gridColumn="1/13" h="1px" />
        <Box gridColumn={APP_GRID_COLUMN}>{page}</Box>
      </AppGrid>
    </Flex>
  )
}

export const ProfileLayout = nestLayout(AdminLayout, _ProfileLayout)