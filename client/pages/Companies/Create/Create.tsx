import React from 'react';
import useFormSubmit from 'Hooks/useFormSubmit';

import Section from 'Atoms/Section';
import Grid, { Col } from 'Molecules/Grid';
import Link from 'Atoms/Link';
import Label from 'Atoms/Label';
import Input from 'Atoms/Input';
import Button from 'Atoms/Button';

const Create: React.FC = () => {
    const { handleSubmit, submitted, error, success } = useFormSubmit(
        'http://localhost:3001/companies'
    );

    return (
        <>
            <Grid>
                <Col spans={{ c: [2, 13] }}>
                    <h1>Create a company</h1>
                </Col>
            </Grid>
            <Grid>
                <Col spans={{ m: 6, l: 5, c: [2, 6] }}>
                    <main>
                        <Section>
                            {!submitted && (
                                <form onSubmit={handleSubmit}>
                                    <p>Create a company to add to the Company List.</p>
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" type="text" required name="name" />
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" type="text" required name="address" />
                                    <Label htmlFor="revenue">Revenue</Label>
                                    <Input id="revenue" type="text" required name="revenue" />
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input id="phone" type="tel" required name="phone" />
                                    <Button type="submit">Create</Button>
                                </form>
                            )}
                            {success && (
                                <p>
                                    Company successfully created!{' '}
                                    <Link to={`/companies`}>Back to companies</Link>
                                </p>
                            )}
                            {error && <p>Something went wrong :(</p>}
                        </Section>
                    </main>
                </Col>
            </Grid>
        </>
    );
};

export default Create;
