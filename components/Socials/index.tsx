import React from 'react';
import Button from '../Button';
import data from '../../data';

interface Props {
  className?: string;
}

const Socials = ({ className }: Props) => {
  return (
    <div className={`${className} flex`}>
      {data.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
