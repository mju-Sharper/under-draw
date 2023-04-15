import styled from 'styled-components';

interface PhotoBoxProps {
  src?: string;
}

const PhotoBox = ({ src }: PhotoBoxProps) => (
  <PhotoBoxWrap>
    <Photo src={src} />
  </PhotoBoxWrap>
);

const PhotoBoxWrap = styled.div`
  width: 216px;
  height: 180px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  size: cover;
`;

export default PhotoBox;
