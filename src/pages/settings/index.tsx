import { useTitle } from 'react-use'

import { SettingsForm } from '@/pages/settings/ui/settings-form'

export const SettingsPage = () => {
  useTitle('Settings — Conduit')

  return (
    <div>
      <SettingsForm />
    </div>
  )
}
