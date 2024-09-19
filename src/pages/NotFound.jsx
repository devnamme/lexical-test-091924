import Link from 'redux-first-router-link';

const HomeLink = () => <Link to="/">Home</Link>;

export const NotFound = () => {
  return (
    <h3>
      404, <HomeLink />
    </h3>
  );
};
