import { ChangeEvent, FC } from "react";
import { cn } from "../../shadcn/lib/utils";
import { Textarea } from "@/shadcn/ui/textarea";

type Props = {
  placeholder: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
};

const KuenzTextarea: FC<Props> = ({
  placeholder,
  value,
  onChange,
  name,
  disabled,
  className,
}) => {
  return (
    <div className="relative w-full">
      <Textarea
        disabled={disabled}
        name={name}
        className={cn(
          className,
          "p-2 text-16 md:text-18 border-3 rounded-none disabled:border-opacity-10 w-full disabled:bg-white disabled:text-muted-foreground placeholder:text-muted-foreground ring-offset-background focus-visible:outline-none"
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default KuenzTextarea;
