import { atom } from 'recoil';

export const registInfo = atom({
  key: 'registInfo',
  default: {
    category: '품목을 선택해주세요',
    name: '품명을 입력해주세요',
    startingBid: 500,
    auctionTime: '',
    imageUrl: '',
  },
});
