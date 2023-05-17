import { Box } from '@chakra-ui/react'
import { SidebarContainer, SidebarItem } from '@opengovsg/design-system-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { BiFace, BiHomeSmile } from 'react-icons/bi'
import { useUser } from '~/features/profile/api'
import { HOME, PROFILE } from '~/lib/routes'

export const DashSidebar = () => {
  const { user } = useUser()
  const { pathname, query } = useRouter()

  const isProfileActive = useMemo(() => {
    if (pathname === '/settings/profile') return true
    if (
      pathname === `${PROFILE}/[username]` &&
      query.username === user?.username
    )
      return true
  }, [pathname, query.username, user?.username])

  return (
    <Box minW="13.5rem">
      <SidebarContainer>
        <SidebarItem
          icon={BiHomeSmile}
          as={Link}
          href={HOME}
          isActive={pathname === HOME}
        >
          Home
        </SidebarItem>
        <SidebarItem
          icon={BiFace}
          as={Link}
          href={`${PROFILE}/${user?.username}`}
          isActive={isProfileActive}
        >
          Profile
        </SidebarItem>
      </SidebarContainer>
    </Box>
  )
}
