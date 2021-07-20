import { axios } from "./instance"
import Vue from 'vue'
import { mimeType } from './mimeType.js'

export function getAction (url, params) {
  return axios({
    url: url,
    method: "get",
    params: params
  })
}

export function postAction (url, params) {
  return axios({
    url: url,
    method: "post",

    data: params
  })
}

export function putAction (url, params) {
  return axios({
    url: url,
    method: "put",

    data: params
  })
}

export function deleteAction (url, params) {
  return axios({
    url: url,
    method: 'delete',
    params: params
  })
}

export function uploadAction (url, parameter) {
  return axios({
    url: url,
    data: parameter,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',  // 文件上传
    },
  })
}
export function uploadFile (url, param) {
  return axios.post(url, param, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}
export function downFile (url, parameter) {
  return axios({
    url: url,
    params: parameter,
    method: 'get',
    responseType: 'blob'
  })
}
export function downloadFile (url, fileName, parameter = {}, fileSuffix = null) {
  return downFile(url, parameter).then((data) => {
    if (!data || data.size === 0) {
      Vue.prototype['$message'].warning('文件下载失败')
      return
    }
    let type = null
    if(!fileSuffix) {
      let suffix = url.split('.')
      type = mimeType['.' + suffix[suffix.length - 1]]
    } else {
      type = mimeType['.' + fileSuffix]
    }
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      window.navigator.msSaveBlob(new Blob([data], { type: type }), fileName)
    } else {
      let url = window.URL.createObjectURL(new Blob([data], { type: type }))
      let link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.setAttribute('download', fileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link) //下载完成移除元素
      window.URL.revokeObjectURL(url) //释放掉blob对象
    }
  })
}
export const ajaxGetDictItems = (code, params) => getAction(`/api/dictionary/${code}/items`, params);

export function getFileAccessHttpUrl (avatar, subStr) {
  if (!subStr) subStr = 'http'
  if (avatar && avatar.startsWith(subStr)) {
    return avatar;
  } else {
    if (avatar && avatar.length > 0 && avatar.indexOf('[') === -1) {
      return "/internet/api/file/" + avatar;
    }
  }
}

export const getPermissionList = () => getAction(`/api/public/user/permissions`, {customResolve: true})
