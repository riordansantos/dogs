import React from 'react';
import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      
    </section>
  );
};

export default User;
