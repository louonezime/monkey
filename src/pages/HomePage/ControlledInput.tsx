import { useRef, useState, useEffect, ChangeEvent } from 'react';

export const ControlledInput = (props: {
    type: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
    const { value, onChange, ...rest } = props;
    const [cursor, setCursor] = useState<number | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const input = ref.current;
        if (input && cursor !== null) input.setSelectionRange(cursor, cursor);
    }, [cursor, value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCursor(e.target.selectionStart);
        onChange && onChange(e);
    };

    return <input ref={ref} value={value} onChange={handleChange} {...rest} />;
};
