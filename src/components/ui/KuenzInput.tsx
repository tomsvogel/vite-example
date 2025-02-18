import { FC, ChangeEvent, FocusEvent } from "react";
import { Input } from "../../shadcn/ui/input";
import { cn } from "../../shadcn/lib/utils";

type Props = {
  label: string;
  name?: string;
  error?: string;
  touched?: boolean;
  value?: string | number;
  placeholder?: string;
  defaultValue?: string | number;
  type?: string;
  disabled?: boolean;
  autoComplete?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

const KuenzInput: FC<Props> = ({
  label,
  name,
  error,
  touched,
  value,
  defaultValue,
  placeholder,
  type,
  disabled,
  autoComplete,
  required,
  onChange,
  onBlur,
}) => {
  return (
    <div className="w-full">
      <div className={"text-12 ml-1 mb-1 font-bold opacity-35"}>
        {label} {required && <span>(erforderlich)</span>}
      </div>

      <Input
        className={cn(
          "h-[50px] border-3 rounded-none p-2 text-18 focus:border-none focus:outline-none",
          {
            "border-warning": !!error && !!touched,
          }
        )}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        onChange={(event) => onChange?.(event)}
        onBlur={onBlur}
      />
      {!!error && !!touched && (
        <span className="flex mt-2 mb-1 ml-5 text-14 text-warning">
          {error}
        </span>
      )}
    </div>
  );
};

export default KuenzInput;
