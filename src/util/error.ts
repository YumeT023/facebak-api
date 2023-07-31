export const HttpErrorCodes = {
  404: "Not Found",
  400: "Bad Request",
  409: "Conflict",
} as const;

export interface HttpError extends Omit<Error, "name"> {
  statusCode: keyof typeof HttpErrorCodes;
  error: string;
}

const createHttpError = (statusCode: keyof typeof HttpErrorCodes, message: string): HttpError => {
  return {
    statusCode,
    message,
    error: HttpErrorCodes[statusCode],
  };
};

/**
 * not found Error with the provided message
 */
export function notFoundError(message: string): HttpError;
/**
 * not found Error with the queried resource info 'resource.field=value'
 */
export function notFoundError(resource: string, field: string, value: string): HttpError;
export function notFoundError(messageOrResource: string, field?: string, value?: string) {
  // ...field argument is provided!, it matches the 2nd overload, with 'resource
  if (field) {
    const message = `${messageOrResource}.${field}=${value} is not found.`;
    return createHttpError(404, message);
  }
  return createHttpError(404, messageOrResource);
}

export const badRequestError = (message: string) => {
  return createHttpError(400, message);
};

export const conflictError = (message: string) => {
  return createHttpError(409, message);
};
