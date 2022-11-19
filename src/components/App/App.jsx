import SharedLayout from 'components/SharedLayout';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#141F47',
      }}
    >
      <SharedLayout></SharedLayout>
      Site resume
    </div>
  );
};
