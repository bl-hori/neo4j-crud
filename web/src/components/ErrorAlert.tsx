import { AxiosApiError } from '@neo4j-crud/shared';

type ErrorAlertProps = {
    error: AxiosApiError;
};

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
    return (
        <div className="alert danger">
            <div>{error.message}</div>
            <div>{error.response?.data.error}</div>
        </div>
    );
};