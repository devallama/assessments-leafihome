import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import type CompanyType from 'Types/Company.type';
import type PeopleType from 'Types/People.type';

import Section from 'Atoms/Section';
import Grid, { Col } from 'Molecules/Grid';
import PersonCard from 'Molecules/PersonCard';
import Link from 'Atoms/Link';
import { People, Person, AddressLine } from './Company.styled';

const Company: React.FC = () => {
    const { id } = useParams();
    const { data: company } = useSWR<CompanyType>(`/companies/${id}`);
    const { data: people } = useSWR<PeopleType[]>(`/companies/${id}/people`);

    const twoPeople = people ? people.slice(0, 2) : [];

    return company ? (
        <>
            <Grid>
                <Col spans={{ c: [2, 13] }}>
                    <h1>{company.name}</h1>
                </Col>
            </Grid>
            <Grid>
                <Col spans={{ l: 7, c: [2, 8] }}>
                    <main>
                        <Section>
                            <h2>About</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
                                finibus velit, sed feugiat orci. Vestibulum fermentum risus id
                                tellus efficitur convallis. Donec cursus nisl vitae nibh convallis,
                                vitae tempor tellus cursus. Sed vitae mollis tortor, non lacinia
                                felis. Nam nec dolor in quam placerat luctus. Donec tempus arcu eget
                                feugiat consectetur. Sed eleifend, elit id facilisis dapibus, justo
                                lectus mattis mi, non imperdiet urna orci id nisl.
                            </p>
                        </Section>
                        <Section>
                            <h2>People</h2>
                            {twoPeople.length > 0 && (
                                <People>
                                    {twoPeople.map(person => (
                                        <Person key={person._id}>
                                            <PersonCard id={person._id} {...person} />
                                        </Person>
                                    ))}
                                </People>
                            )}
                            <Link to={`/companies/${company._id}/people`}>View all people</Link>
                        </Section>
                    </main>
                </Col>
                <Col spans={{ l: [9, 13], c: [10, 13] }}>
                    <aside>
                        <h2>Address</h2>
                        <p>
                            {company.address.split(',').map((addressLine, index) => (
                                <AddressLine key={index}>{addressLine}</AddressLine>
                            ))}
                        </p>
                        <h2>Revenue</h2>
                        <p>${company.revenue}</p>
                        <h2>Phone number</h2>
                        <p>{company.phone}</p>
                    </aside>
                </Col>
            </Grid>
        </>
    ) : null;
};

export default Company;
