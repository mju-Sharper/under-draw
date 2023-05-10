// 소켓 라이브러리 설정
// 네비게이션 바 컴포넌트에서도 활용할 수 있도록 이곳에 설정해봤습니다.
import { io } from 'socket.io-client';

import { API, getCookie } from './constant';

export const socket = (roomId: string) => {
  const token = getCookie();

  return io(`${API}${roomId}`, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
};
