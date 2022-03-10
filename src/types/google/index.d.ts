declare namespace google.types {
  export interface CredentialResponse {
    clientId: string;
    credential: string;
    select_by: string;
  }
}

declare namespace google.accounts.id {
  export function initialize(args: {
    client_id: string;
    callback: (credentialResponse: google.types.CredentialResponse) => void;
  }): void;

  export function renderButton(
    element: HTMLElement,
    options: {
      theme: string;
      size: string;
    }
  ): void;
}
