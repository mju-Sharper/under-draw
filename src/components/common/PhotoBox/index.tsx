import styled from 'styled-components';

interface PhotoBoxProps {
  src?: string;
}

const PhotoBox = ({ src }: PhotoBoxProps) => (
  <PhotoBoxWrap>
    <img src={src} />
  </PhotoBoxWrap>
);

const PhotoBoxWrap = styled.div`
  width: 216px;
  height: 180px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;

export default PhotoBox;
