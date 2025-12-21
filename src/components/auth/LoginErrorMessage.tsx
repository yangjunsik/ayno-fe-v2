import styled from '@emotion/styled';

interface LoginErrorMessageProps {
    error: string | null;
}

const ErrorText = styled.p`
  color: #EF4444;
  font-size: 13px;
  text-align: center;
  margin-top: 4px;
`;

const LoginErrorMessage = ({ error }: LoginErrorMessageProps) => {
    if (error) {
        return <ErrorText>{error}</ErrorText>;
    }

    return null;
};

export default LoginErrorMessage;
