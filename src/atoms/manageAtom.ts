import { atom } from 'recoil';

export const manageBtnAtom = atom({
  key: 'manageBtnAtom',
  default: false,
});

export const manageListAtom = atom({
  key: 'manageListAtom',
  default: [],
});
