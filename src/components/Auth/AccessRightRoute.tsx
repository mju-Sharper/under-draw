import GuideBox from '../common/GuideBox';

interface Props {
  token: string;
  component: React.ReactElement;
}

const AccessRightRoute = ({ token, component }: Props) =>
  token ? component : <GuideBox msg="로그인 후 이용해주세요!" />;

export default AccessRightRoute;
