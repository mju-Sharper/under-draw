import styled from 'styled-components';

import LionMarket from '../../../assets/LionMarket.svg';

interface Props {
  msg?: string;
}

const GuideBox = ({ msg }: Props) => (
  <GuideBoxWrap>
    <GuideBoxImg src={LionMarket} />
    <GuideBoxFont>{msg}</GuideBoxFont>
  </GuideBoxWrap>
);

const GuideBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15%;
  color: ${({ theme }) => theme.colors.WHITE};
  ${({ theme }) => theme.fonts.B_POINT_22};
`;

const GuideBoxImg = styled.img`
  fill: ${({ theme }) => theme.colors.WHITE};
`;

const GuideBoxFont = styled.p`
  padding: 20px;
`;

export default GuideBox;
