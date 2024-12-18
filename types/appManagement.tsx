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


export type FormLoginProps = {
  state:
    | {
        success: boolean; 
        message: string;
        error?: undefined; 
      }
    | {
        success?: boolean; 
        message?: string; 
        error: {
          email?: string[];
          password?: string[];
        };
      }
    | null 
    | undefined; 
  formAction: (formData: FormData) => Promise<void> | void;
};


// export type User = {
//   user: {
//     name: string;
//     email: string;
//     image: string | null;
//     id: string;
//     role: string;
//   };
//   expires: string;
// };


