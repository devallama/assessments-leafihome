import React from 'react';

import { SectionStyled } from './Section.styled';

const Section: React.FC<React.PropsWithChildren> = props => <SectionStyled {...props} />;

export default Section;
