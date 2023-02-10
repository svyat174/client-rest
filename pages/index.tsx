import React from 'react';
import { ButtonCostum, Htag, P, Tag } from '../components';
import { Button } from '@mui/material';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<ButtonCostum appearance='primary' arrow='right'>Кнопка</ButtonCostum>
			<ButtonCostum appearance='ghost' arrow='down'>Кнопка</ButtonCostum>
      <P size='l'>Big</P>
      <P>Medium</P>
      <P size='s'>Small</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
		</>
	);
}