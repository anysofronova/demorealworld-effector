import { useCallback, useState } from 'react'

import { useAuth } from '@/shared/hooks/useAuth'
import { UserSettings } from '@/shared/ui'
import { CommonNavigation } from '@/shared/ui/header/ui'
import { HomeLogo } from '@/shared/ui/header/ui/home-logo/home-logo'
import { MobileHeader } from '@/shared/ui/header/ui/mobile-header/mobile-header'
import { OpenMenu } from '@/shared/ui/header/ui/open-menu/open-menu'

export const Header = () => {
  const [mode, setMode] = useState<boolean>(false)
  const { user } = useAuth()
  const isLoggedIn = Boolean(localStorage.getItem('user'))

  const disableMode = useCallback(() => {
    setMode(false)
  }, [])

  const enableMode = useCallback(() => {
    setMode(true)
  }, [])

  return (
    <div className="relative bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-between md:space-x-10">
          <HomeLogo />
          <OpenMenu enableMode={enableMode} />
          {isLoggedIn ? (
            <div className="hidden md:block w-full">
              <UserSettings user={user} disableMode={disableMode} />
            </div>
          ) : (
            <CommonNavigation />
          )}
        </div>
      </div>

      <MobileHeader
        mode={mode}
        user={user}
        isLoggedIn={isLoggedIn}
        disableMode={disableMode}
      />
    </div>
  )
}
