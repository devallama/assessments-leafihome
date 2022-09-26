import React from 'react';
import useSWR from 'swr';

import type CompanyType from 'Types/Company.type';

import Section from 'Atoms/Section';
import Grid, { Col } from 'Molecules/Grid';
import CompanyCard from 'Molecules/CompanyCard';
import Link from 'Atoms/Link';
import { Main, List } from './Companies.styled';

const Companies: React.FC = () => {
    const { data: companies } = useSWR<CompanyType[]>(`/companies`);

    return companies ? (
        <>
            <Grid>
                <Col>
                    <h1>Companies</h1>
                    <Link to={`/companies/create`}>Create a new company</Link>
                </Col>
            </Grid>
            <Main>
                <Section>
                    <Grid>
                        <Col>
                            <List>
                                {companies.map(company => (
                                    <li key={company._id}>
                                        <CompanyCard
                                            id={company._id}
                                            {...company}
                                            color="#4877D6"
                                        />
                                    </li>
                                ))}
                            </List>
                        </Col>
                    </Grid>
                </Section>
            </Main>
        </>
    ) : null;
};

export default Companies;
