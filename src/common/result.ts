type Success<TValue> = TValue extends void
  ? { isFailure: false }
  : {
      isFailure: false;
      value: TValue;
    };

type Failure<TError> = {
  error: TError;
  isFailure: true;
};

export type Result<TValue, TError> = Failure<TError> | Success<TValue>;

export function ok(): Success<void>;
export function ok<TValue>(value: TValue): Success<TValue>;
export function ok<TValue>(value?: TValue): Success<TValue> | Success<void> {
  return value === undefined
    ? { isFailure: false }
    : ({ isFailure: false, value } as Success<TValue>);
}

export function fail<TError>(error: TError): Failure<TError> {
  return { error, isFailure: true };
}
