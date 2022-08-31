import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import { routes } from '@/app/routing/routes'

import * as types from './types'

export const API_URL = 'https://api.realworld.io'

export const getContentType = () => ({
  'Content-Type': 'application/json;charset=UTF-8',
})

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
})

export const instance = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
})

instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken')

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const navigate = useNavigate()
    if (error.response?.status === 401) {
      navigate(routes.LOGIN)
    }

    return Promise.reject(error)
  },
)

export const request = <T = void>(
  options: types.HttpRequestOptions,
  params?: types.AnyObject,
): Promise<T> => {
  return instance
    .request({
      url: options.url,
      method: options.method,
      data: options?.data,
      params,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data
    })
}
