import React from 'react';
import Button from '../Button';

interface Props {
  handleWorkScroll: any;
  handleAboutScroll: any;
}

const Header = ({ handleWorkScroll, handleAboutScroll }: Props) => {
  return (
    <div className='mt-6 flex items-center justify-between sticky top-0 z-10 bg-white'>
      <h1 className='font-medium mob:p-2 laptop:p-0'>( :</h1>
      <div>
        <Button onClick={handleWorkScroll}>Projetos</Button>
        <Button onClick={handleAboutScroll}>Sobre mim</Button>
        <Button onClick={() => window.open('mailto:hello@chetanverma.com')}>
          Contatos
        </Button>
      </div>
    </div>
  );
};

export default Header;
