import React from 'react';
import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';
import UserHeader from './UserHeader';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      
    </section>
  );
};

export default User;
