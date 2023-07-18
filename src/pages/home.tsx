import { Box, Flex, Stack, StackDivider } from '@chakra-ui/react'
import { SkeletonPostList } from '~/components/SkeletonPostList'
import Suspense from '~/components/Suspense'
import { APP_GRID_COLUMN, APP_GRID_TEMPLATE_COLUMN } from '~/constants/layouts'
import { NewPostBanner, PostList } from '~/features/home/components'
import { type NextPageWithLayout } from '~/lib/types'
import { AppGrid } from '~/templates/AppGrid'
import { AdminLayout } from '~/templates/layouts/AdminLayout'

const Home: NextPageWithLayout = () => {
  return (
    <Flex w="100%" flexDir="column">
      <AppGrid
        templateColumns={APP_GRID_TEMPLATE_COLUMN}
        px={{ base: '1rem', lg: 0 }}
        bg="base.canvas.brand-subtle"
        py="1rem"
      >
        <Box gridColumn={APP_GRID_COLUMN}>
          <NewPostBanner />
        </Box>
      </AppGrid>
      <AppGrid
        flex={1}
        bg="white"
        templateColumns={APP_GRID_TEMPLATE_COLUMN}
        px={{ base: '1rem', lg: 0 }}
      >
        <Stack
          spacing={0}
          divider={<StackDivider />}
          gridColumn={APP_GRID_COLUMN}
          flexDir="column"
        >
          <Suspense fallback={<SkeletonPostList />}>
            <PostList />
          </Suspense>
        </Stack>
      </AppGrid>
    </Flex>
  )
}

Home.getLayout = AdminLayout

export default Home