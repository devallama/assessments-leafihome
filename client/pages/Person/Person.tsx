import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import type CompanyType from 'Types/Company.type';
import type PeopleType from 'Types/People.type';

import Section from 'Atoms/Section';
import Grid, { Col } from 'Molecules/Grid';
import Link from 'Atoms/Link';

const Person: React.FC = () => {
    const { id } = useParams();
    const { data: person } = useSWR<PeopleType>(`/person/${id}`);
    const { data: company } = useSWR<CompanyType>(
        person ? `/companies/${person.companyId}` : undefined
    );

    return person && company ? (
        <>
            <Grid>
                <Col spans={{ m: [2, 13] }}>
                    <h1>{person.name}</h1>
                </Col>
            </Grid>
            <Grid>
                <Col spans={{ m: [2, 8] }}>
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
                    </main>
                </Col>
                <Col spans={{ m: [10, 13] }}>
                    <aside>
                        <h2>Company</h2>
                        <p>
                            <Link to={`/companies/${company._id}`}>{company.name}</Link>
                        </p>
                        <h2>Email</h2>
                        <p>{person.email}</p>
                    </aside>
                </Col>
            </Grid>
        </>
    ) : null;
};

export default Person;
