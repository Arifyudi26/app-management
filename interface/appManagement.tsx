export type ButtonTypes = {
  name: string;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
};

export type FormRegisterProps = {
  state:
    | { success: boolean; message: string; error?: undefined }
    | {
        error: {
          name?: string[];
          email?: string[];
          password?: string[];
          ConfirmPassword?: string[];
        };
        success?: undefined;
        message?: undefined;
      }
    | null;
  formAction: (formData: FormData) => Promise<void> | void;
};
