import { useState } from 'react';

import styled from 'styled-components';

import Arrow from '../../../assets/Arrow.svg';

interface Props {
  products: productCategoryProps[];
}

const PageNation = ({ products }: Props) => {
  const totalPages = Math.ceil(products?.length / 3);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [1, 2, 3, 4, 5];

  if (totalPages) {
    return (
      <PageBtnWrap>
        <PrevBtnArrow
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          <img src={Arrow} />
        </PrevBtnArrow>
        <PageNumWrap>
          {pageNumbers.map((idx) => (
            <div key={idx}>
              <div onClick={() => setCurrentPage(idx + 1)}>
                {currentPage === idx + 1 ? (
                  <PageNumActive>{idx}</PageNumActive>
                ) : (
                  <PageNumNonActive>{idx}</PageNumNonActive>
                )}
              </div>
            </div>
          ))}
        </PageNumWrap>
        <NextBtnArrow onClick={() => setCurrentPage((prev) => prev + 1)}>
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
