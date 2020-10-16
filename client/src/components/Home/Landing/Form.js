/* jshint esversion: 6 */

import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

const Schema = Yup.object({
    url: Yup.string().url('Invalid URL').required('Required')
});

export default (props) => {
  return (
      <Formik
        validationSchema={Schema}
        onSubmit={props.submit}
        initialValues={{
            url: ''
        }} >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="dirtyURL">
                            <InputGroup className="url-input mb-3" size="lg">
                                <Form.Control
                                    type="url"
                                    name="url"
                                    value={values.url}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-describedby="urlInputAppend"
                                    isValid={!!errors.url}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.url}
                                </Form.Control.Feedback>
                                <InputGroup.Append>
                                    <Button
                                        type="submit"
                                        id="urlInputAppend"
                                        variant="secondary"
                                        disabled={!isValid ? 'disabled' : ''}>
                                        <span className="hide-sm">PRETIFFY&nbsp;</span>
                                        <i className="fa fa-sign-in"/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>

                        </Form.Group>
                    </Form.Row>
                </Form>
            )}
        </Formik>
  )
}
