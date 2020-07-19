import React, { useCallback, useEffect, useState } from 'react';

export type ValidateFunction = (value: string) => Promise<string | null>;

export interface IValidatedInputProps {
    validate: ValidateFunction;
}

export function ValidatedInput({ validate }: IValidatedInputProps): JSX.Element {
    const [value, setValue] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isChecking, setIsChecking] = useState(false);

    useEffect(() => {
        // `isChanged` is used to determine if this is this validation has become stale.
        // If the value (or the validate function) is changed, this useEffect instance will be
        // cleaned up, i.e. the returned function below will be called, which sets `isChanged`
        // to true. This lets us know if we should update the UI with this validation result.
        let isChanged = false;

        (async () => {
            if (value === null) {
                return;
            }
            setIsChecking(true);
            const newError = await validate(value);

            // After awaiting, we want to make sure the value we validated is not stale.
            if (!isChanged) {
                setIsChecking(false);
                setError(newError);
            }
        })();

        // The cleanup function, which runs whenever the dependencies are changed.
        return () => { isChanged = true; };

        // In this case, the dependencies are `[validate, value]` because if either of these change,
        // then the validation result will not be relevant any longer.
    }, [validate, value]);

    // useCallback will maintain the same instance of the onChange callback, preventing unnecessary re-renders.
    // Since there are no closures here (aside from setValue), we can safely omit any dependencies.
    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
        []);

    return (
        <>
            <input
                style={{ border: (!isChecking && error) ? '1px solid #f33' : '1px solid currentColor' }}
                value={value || ''}
                onChange={onChange}
            />
            {isChecking
                ? <div>{`checking value "${value}"...`}</div>
                : error
                    ? <div style={{ color: '#f33' }}>{error}</div>
                    : value !== null
                        ? <div>You're good.</div>
                        : null
            }
        </>
    );
}
