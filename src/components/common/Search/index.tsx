import styled from 'styled-components';

import SearchIcon from '../../../assets/SearchIcon.svg';

const SearchInput = () => (
  <div style={{ position: 'relative' }}>
    <SearchWrap placeholder="제품을 검색해보세요!" />
    <SearchIconContainer>
      <img src={SearchIcon} />
    </SearchIconContainer>
  </div>
);

const SearchWrap = styled.input`
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding-left: 24px;
  padding-right: 50px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.R_BASIC_17};
`;

const SearchIconContainer = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  bottom: 10px;
`;

export default SearchInput;
