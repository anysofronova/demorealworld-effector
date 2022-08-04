export type Method = 'get' | 'delete' | 'post' | 'put'
export type ResponseType = 'text' | 'json' | 'formData' | 'blob' | 'arrayBuffer'

export interface HttpRequestOptions extends Omit<RequestInit, 'body'> {
  url: string
  method: Method
  data?: any
  responseType?: ResponseType
}

export interface HttpRequestParams {
  tag: string
  author: string
  favorited: string
  limit: number
  offset: number
}

export type AnyObject = Record<string, any>
