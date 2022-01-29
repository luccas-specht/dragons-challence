import type { NextPage } from 'next';
import Image from 'next/image';
import { useUser } from '../hooks';

const Home: NextPage = () => {
  const { user } = useUser();

  return <img src={user?.avatarUrl} alt="olaaa" />;
};

export default Home;
