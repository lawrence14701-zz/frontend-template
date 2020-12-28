import { FieldError } from "../generated/graphql";

export const toErrorsMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {}; // string key | string value
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  return errorMap;
};
