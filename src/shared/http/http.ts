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

const token = Cookies.get('accessToken')

const config = {
  headers: { Authorization: `Bearer ${token}` },
}

export const request = <T = void>(
  options: types.HttpRequestOptions,
): Promise<T> => {
  return instance
    .request({
      url: options.url,
      method: options.method,
      headers: { ...config.headers },
      data: options?.data,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data
    })
}
