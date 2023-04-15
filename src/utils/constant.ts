import axios from 'axios';
import { Cookies } from 'react-cookie';

// 토큰 가져오기
const cookie = new Cookies();
export const getCookie = () => cookie.get('userToken');

// api 주소 저장
export const API = process.env.REACT_APP_API_URL;

// instance api
export const instanceAPI = axios.create({
  baseURL: `${API}`,
  headers: {
    Authorization: `Bearer ${getCookie()}`,
  },
});

// 아이디, 이메일, 번호, 패스워드 정규식
export const ID_REGEXP = /^[a-zA-Z0-9_-]{5,20}$/;
export const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_REGEXP =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
export const PHONE_REGEXP = /\d{3}\d{4}\d{4}/;
