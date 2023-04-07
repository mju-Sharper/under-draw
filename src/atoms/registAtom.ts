import { atom } from 'recoil';

export const registInfo = atom({
  key: 'registInfo',
  default: {
    itemCategory: '품목을 선택해주세요',
    itemName: '품명을 입력해주세요',
    itemBetPrice: 500,
    date: '',
    imgSrc: '',
  },
});
