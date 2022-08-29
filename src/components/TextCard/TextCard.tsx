import React from 'react';
import ITextCard from './ITextCard';

export default function TextCard({
  as: Tag = 'p',
  text,
  className,
}: ITextCard) {
  return <Tag className={className}>{text}</Tag>;
}
