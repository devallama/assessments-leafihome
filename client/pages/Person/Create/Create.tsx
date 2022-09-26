import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import useFormSubmit from 'Hooks/useFormSubmit';

import type CompanyType from 'Types/Company.type';

import Section from 'Atoms/Section';
import Grid, { Col } from 'Molecules/Grid';
import Link from 'Atoms/Link';
import Label from 'Atoms/Label';
import Input from 'Atoms/Input';
import Button from 'Atoms/Button';

const Create: React.FC = () => {
    const { id } = useParams();
    const { data: company } = useSWR<CompanyType>(`/companies/${id}`);
    const { handleSubmit, submitted, error, success } = useFormSubmit(
        'http://localhost:3001/person'
    );

    return company ? (
        <>
            <Grid>
                <Col spans={{ c: [2, 13] }}>
                    <h1>Create a person for {company.name}</h1>
                </Col>
            </Grid>
            <Grid>
                <Col spans={{ m: 6, l: 5, c: [2, 6] }}>
                    <main>
                        <Section>
                            {!submitted && (
                                <form onSubmit={handleSubmit}>
                                    <p>Create a person for {company.name}.</p>
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" type="text" required name="name" />
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" required name="email" />
                                    <input type="hidden" name="companyId" value={id} />
                                    <Button type="submit">Create</Button>
                                </form>
                            )}
                            {success && (
                                <p>
                                    Person successfully created!{' '}
                                    <Link to={`/companies/${id}/people`}>Back to people</Link>
                                </p>
                            )}
                            {error && <p>Something went wrong :(</p>}
                        </Section>
                    </main>
                </Col>
            </Grid>
        </>
    ) : null;
};

export default Create;
