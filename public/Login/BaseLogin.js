import React, { useState } from "react";
import { Form, Link } from "@strapi/helper-plugin";
import { EyeStriked, Eye } from "@strapi/icons";
import {
  Box,
  Main,
  Flex,
  Button,
  TextInput,
  Checkbox,
  Typography,
} from "@strapi/design-system";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { Formik } from "formik";
import {
  Column,
  LayoutContent,
} from "../../../../layouts/UnauthenticatedLayout";
import Logo from "../../../../components/UnauthenticatedLogo";
import FieldActionWrapper from "../FieldActionWrapper";

const PasswordInput = styled(TextInput)`
  ::-ms-reveal {
    display: none;
  }
`;

const Login = ({ onSubmit, schema, children }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { formatMessage } = useIntl();

  return (
    <Main>
      <LayoutContent>
        <Formik
          enableReinitialize
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={onSubmit}
          validationSchema={schema}
          validateOnChange={false}
        >
          {({ values, errors, handleChange }) => (
            <Form noValidate>
              <Column>
                <Logo />
                {errors.errorMessage && (
                  <Typography
                    id="global-form-error"
                    role="alert"
                    tabIndex={-1}
                    textColor="danger600"
                  >
                    {errors.errorMessage}
                  </Typography>
                )}
              </Column>

              <Flex direction="column" alignItems="stretch" gap={6}>
                <TextInput
                  error={
                    errors.email
                      ? formatMessage({
                          id: errors.email,
                          defaultMessage: "This value is required.",
                        })
                      : ""
                  }
                  value={values.email}
                  onChange={handleChange}
                  label={formatMessage({
                    id: "Auth.form.email.label",
                    defaultMessage: "Email",
                  })}
                  placeholder={formatMessage({
                    id: "Auth.form.email.placeholder",
                    defaultMessage: "Masukkan email anda",
                  })}
                  name="email"
                  required
                />
                <PasswordInput
                  error={
                    errors.password
                      ? formatMessage({
                          id: errors.password,
                          defaultMessage: "This value is required.",
                        })
                      : ""
                  }
                  onChange={handleChange}
                  value={values.password}
                  label={formatMessage({
                    id: "global.password",
                    defaultMessage: "Password",
                  })}
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  endAction={
                    <FieldActionWrapper
                      onClick={(e) => {
                        e.stopPropagation();
                        setPasswordShown((prev) => !prev);
                      }}
                      label={formatMessage(
                        passwordShown
                          ? {
                              id: "Auth.form.password.show-password",
                              defaultMessage: "Show password",
                            }
                          : {
                              id: "Auth.form.password.hide-password",
                              defaultMessage: "Hide password",
                            }
                      )}
                    >
                      {passwordShown ? <Eye /> : <EyeStriked />}
                    </FieldActionWrapper>
                  }
                  required
                />
                <Checkbox
                  onValueChange={(checked) => {
                    handleChange({
                      target: { value: checked, name: "rememberMe" },
                    });
                  }}
                  value={values.rememberMe}
                  aria-label="rememberMe"
                  name="rememberMe"
                >
                  {formatMessage({
                    id: "Auth.form.rememberMe.label",
                    defaultMessage: "Remember me",
                  })}
                </Checkbox>
                <Button fullWidth type="submit">
                  {formatMessage({
                    id: "Auth.form.button.login",
                    defaultMessage: "Login",
                  })}
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
        {children}
      </LayoutContent>
    </Main>
  );
};

Login.defaultProps = {
  children: null,
  onSubmit() {},
};

Login.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  schema: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Login;
