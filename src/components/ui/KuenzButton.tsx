import { cn } from "@/shadcn/lib/utils";
import { Button } from "@/shadcn/ui/button";
import { Loader2 } from "lucide-react";
import { FC, ReactNode } from "react";

type Props = {
  label: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  type: "button" | "submit";
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  loading?: boolean;
  form?: string;
  className?: string;
};

const KuenzButton: FC<Props> = ({
  label,
  icon,
  onClick,
  type,
  variant,
  disabled,
  loading,
  form,
  className,
}) => {
  return (
    <div>
      <Button
        onClick={onClick}
        type={type}
        form={form}
        variant={variant === "secondary" ? "secondary" : "default"}
        disabled={disabled}
        className={cn(
          className,
          "flex mx-auto px-[25px] py-[15px] h-[52px] border-3 rounded-none text-18 uppercase tracking-[0.9px]",
          {
            "text-white hover:text-primary hover:bg-white hover:border-primary border-primary":
              variant === "primary",
            "text-primary hover:text-white hover:bg-primary bg-white border-primary":
              variant === "secondary",
          }
        )}
      >
        {icon && <div className="mr-2">{icon}</div>}
        {loading && <Loader2 className="size-4 animate-spin mr-2" />}
        {label}
      </Button>
    </div>
  );
};

export default KuenzButton;
