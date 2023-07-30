const createError = (statusCode: number, message: string) => {
  return {
    statusCode,
    message,
  };
};

/**
 * not found Error with the provided message
 */
export function notFoundError(message: string);
/**
 * not found Error with the queried resource info 'resource.field=value'
 */
export function notFoundError(resource: string, field: string, value: string);
export function notFoundError(messageOrResource: string, field?: string, value?: string) {
  // ...field argument is provided!, it matches the 2nd overload, with 'resource
  if (field) {
    const message = `${messageOrResource}.${field}=${value} is not found.`;
    return createError(404, message);
  }
  return createError(404, messageOrResource);
}

export const badRequestError = (message: string) => {
  return createError(400, message);
};
