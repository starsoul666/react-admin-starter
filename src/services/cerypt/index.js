import { request } from 'umi';

// 加密
export async function encryptData(payload) {
  return request('/api/encrypt', {
    methid: 'post',
    data: payload,
  });
}

// 解密
export async function decryptData(payload) {
  return request('/api/decryptData', {
    methid: 'post',
    data: payload,
  });
}
