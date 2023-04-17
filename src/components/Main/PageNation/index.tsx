import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import Arrow from '../../../assets/Arrow.svg';
import { pageNum } from '../../../atoms/pageNumAtom';

interface Props {
  productsLength?: number;
}

const PageNation = ({ productsLength }: Props) => {
  const totalPages = Math.ceil(productsLength! / 3);
  const numbersArray = new Array(totalPages).fill(0);
  const [currentPageArray, setCurrentPageArray] = useState([0]);
  const [clickPageNum, setClickPageNum] = useRecoilState(pageNum);

  // 페이지네이션 버튼에서 5까지만 보여주기 위한 cut 함수
  const sliceArrayFunc = (totalPages: number) => {
    const totalPageArray = numbersArray.map((_, i) => i);
    return Array(Math.ceil(totalPages / 5))
      .fill(0)
      .map(() => totalPageArray.splice(0, 5));
  };

  useEffect(() => {
    const sliceArray = sliceArrayFunc(totalPages / 3);
    setCurrentPageArray(sliceArray[0]);

    // 다음 페이지 배열로 넘어감
    if (clickPageNum % 5 === 1 || clickPageNum % 5 > 1) {
      setCurrentPageArray(sliceArray[Math.floor(clickPageNum / 5)]);
    }
  }, [totalPages]);

  if (totalPages) {
    return (
      <PageBtnWrap>
        <PrevBtnArrow
          onClick={() => setClickPageNum((prev) => prev - 1)}
          disabled={clickPageNum === 1}
        >
          <img src={Arrow} />
        </PrevBtnArrow>
        <PageNumWrap>
          {currentPageArray?.map((idx) => (
            <div key={idx}>
              <div onClick={() => setClickPageNum(idx + 1)}>
                {clickPageNum === idx + 1 ? (
                  <PageNumActive>{idx + 1}</PageNumActive>
                ) : (
                  <PageNumNonActive>{idx + 1}</PageNumNonActive>
                )}
              </div>
            </div>
          ))}
        </PageNumWrap>
        <NextBtnArrow
          onClick={() => setClickPageNum((prev) => prev + 1)}
          disabled={clickPageNum === totalPages}
        >
          <img src={Arrow} />
        </NextBtnArrow>
      </PageBtnWrap>
    );
  } else return null;
};

const PageBtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PageNumWrap = styled.div`
  display: flex;
  margin: 0 20px;
  ${({ theme }) => theme.colors.WHITE};
`;

const PageNumNonActive = styled.p`
  margin: 0 16px;
  padding: 0;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.B_POINT_20}
  cursor: pointer;
`;

const PageNumActive = styled.p`
  margin: 0 16px;
  padding: 0;
  color: ${({ theme }) => theme.colors.PURPLE};
  ${({ theme }) => theme.fonts.B_POINT_22}
  cursor: pointer;
`;

const PrevBtnArrow = styled.button``;

const NextBtnArrow = styled.button`
  transform: rotate(180deg);
  padding-top: 10px;
`;

export default PageNation;
