import { useContext } from 'react'

import { AuthContext } from '@/app'

export const useAuth = () => useContext(AuthContext)
