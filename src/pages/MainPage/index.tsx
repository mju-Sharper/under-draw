import CategoryListBox from '../../components/Category';

const MainPage = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <aside style={{ position: 'fixed', margin: '64px 36px 0 44px' }}>
      <CategoryListBox />
    </aside>
  </div>
);

export default MainPage;
