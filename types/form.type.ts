export interface IForm {
    phoneNumber: string;
    page?: string;
}

export interface IFormProps {
    FormClose: () => void;
    pathname: string;
}