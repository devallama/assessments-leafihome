import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import type CompanyType from 'Types/Company.type';
import type PeopleType from 'Types/People.type';

import Section from 'Atoms/Section';
import Grid, { Col } from 'Molecules/Grid';
import PersonCard from 'Molecules/PersonCard';
import Link from 'Atoms/Link';
import { Main, List } from './People.styled';

const People: React.FC = () => {
    const { id } = useParams();
    const { data: company } = useSWR<CompanyType>(`/companies/${id}`);
    const { data: people } = useSWR<PeopleType[]>(`/companies/${id}/people`);

    return company && people ? (
        <>
            <Grid>
                <Col>
                    <h1>People at {company.name}</h1>
                    <Link to={`/people/create/${company._id}`}>Create a new person</Link>
                </Col>
            </Grid>
            <Main>
                <Section>
                    <Grid>
                        <Col>
                            {people.length > 0 && (
                                <List>
                                    {people.map(person => (
                                        <li key={person._id}>
                                            <PersonCard id={person._id} {...person} />
                                        </li>
                                    ))}
                                </List>
                            )}
                        </Col>
                    </Grid>
                </Section>
            </Main>
        </>
    ) : null;
};

export default People;
