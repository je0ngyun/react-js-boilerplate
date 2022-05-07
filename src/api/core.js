import axios from 'axios'
import { getAccessTokenFromStorage } from '@utils/storage'

const TESTURL = 'http://127.0.0.1:4000'
const BASEURL = TESTURL

const getBasePrivateHeaders = () => ({
  Accept: `*/*`,
  'Content-Type': `application/json`,
  accesstoken: getAccessTokenFromStorage(),
})

const getBasePrivateMultipartHeaders = () => ({
  Accept: `*/*`,
  'Content-Type': `multipart/form-data`,
  accesstoken: getAccessTokenFromStorage(),
})

const basePublicHeaders = {
  Accept: `*/*`,
  'Content-Type': `application/json`,
}

const basePublicMultipartHeaders = {
  Accept: `*/*`,
  'Content-Type': `multipart/form-data`,
}

const sendRequest = async ({ url, params, method, headers, isPrivate }) => {
  const baseHeaders = isPrivate ? getBasePrivateHeaders() : basePublicHeaders
  const response = await axios[method](BASEURL + url, {
    headers: { ...baseHeaders, ...headers },
    params,
  })
  return { ...response, axiosStatus: response.status }
}

const sendRequestForData = async ({
  url,
  params,
  data,
  method,
  headers,
  isPrivate,
  type,
}) => {
  const baseHeaders = isPrivate
    ? type === 'json'
      ? getBasePrivateHeaders()
      : getBasePrivateMultipartHeaders()
    : type === 'json'
    ? basePublicHeaders
    : basePublicMultipartHeaders
  const response = await axios[method](BASEURL + url, data, {
    headers: { ...baseHeaders, ...headers },
    params,
  })
  return { ...response, axiosStatus: response.status }
}

export const privateAPI = {
  get: ({ url, params, headers }) =>
    sendRequest({ url, params, method: 'get', headers, isPrivate: true }),
  post: ({ url, data, headers, type }) =>
    sendRequestForData({
      url,
      data,
      method: 'post',
      headers,
      isPrivate: true,
      type: type ?? 'json',
    }),
  put: ({ url, data, headers, type }) =>
    sendRequestForData({
      url,
      data,
      method: 'put',
      headers,
      isPrivate: true,
      type: type ?? 'json',
    }),
  delete: ({ url, params, headers }) =>
    sendRequest({ url, params, method: 'delete', headers, isPrivate: true }),
}

export const publicAPI = {
  get: ({ url, params, headers }) =>
    sendRequest({ url, params, method: 'get', headers, isPrivate: false }),
  post: ({ url, data, params, headers, type }) =>
    sendRequestForData({
      url,
      data,
      params,
      method: 'post',
      headers,
      isPrivate: false,
      type: type ?? 'json',
    }),
  put: ({ url, data, headers, type }) =>
    sendRequestForData({
      url,
      data,
      method: 'put',
      headers,
      isPrivate: false,
      type: type ?? 'json',
    }),
  delete: ({ url, params, headers }) =>
    sendRequest({ url, params, method: 'delete', headers, isPrivate: false }),
}
