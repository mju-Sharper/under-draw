import { atom } from 'recoil';

export const registInfo = atom({
  key: 'registInfo',
  default: {
    one: '품목을 선택해주세요',
    two: '품명을 입력해주세요',
    third: 500,
    date: {
      year: 2023,
      month: 3,
      day: 27,
    },
    imgSrc: '',
  },
});
