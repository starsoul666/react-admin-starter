import { request } from 'umi';

// 加密
export async function encryptData(payload) {
  return request('/test/encrypt', {
    methid: 'post',
    data: payload,
  });
}

// 解密
export async function decryptData(payload) {
  return request('/test/decryptData', {
    methid: 'post',
    data: payload,
  });
}
