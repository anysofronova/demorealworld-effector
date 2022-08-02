import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { API_ROOT } from '@/app/config/constants'
import { routes } from '@/app/routing/routes'

import * as types from './types'

export const API_URL = API_ROOT ?? 'https://api.realworld.io/api-docs/'

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

export const setToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Token ${token}`
}

export const request = <T = void>(
  options: types.HttpRequestOptions,
): Promise<T> => {
  return instance
    .request({
      url: options.url,
      method: options.method,
      data: options?.data,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data
    })
}
