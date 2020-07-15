import React, { useState, useEffect, useCallback } from 'react';

export type ValidateFunction = (value: string) => Promise<string | null>;

export interface IValidatedInputProps {
    validate: ValidateFunction;
}

export function ValidatedInput({ validate }: IValidatedInputProps): JSX.Element {
    const [value, setValue] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isChecking, setIsChecking] = useState(false);

    useEffect(() => {
        let isChanged = false;
        (async () => {
            if (value === null) {
                return;
            }
            setIsChecking(true);
            const error = await validate(value);
            if (!isChanged) {
                setIsChecking(false);
                setError(error);
            }
        })();
        return () => { isChanged = true; };
    }, [validate, value]);

    const onChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, [validate, value]);

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