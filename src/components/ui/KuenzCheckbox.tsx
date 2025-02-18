import { Checkbox } from "@/shadcn/ui/checkbox";
import { FC, useState } from "react";

type Props = {
  label: string;
  name: string;
  checked: boolean;
};

const KuenzCheckbox: FC<Props> = ({ label, name, checked }) => {
  const [isChecked, setChecked] = useState<boolean>(checked);
  return (
    <div className="flex flex-row items-center gap-x-2 text-14 font-bold md:text-16">
      <Checkbox
        onClick={() => setChecked(!isChecked)}
        className="border-3 size-6 hover:cursor-pointer rounded-none data-[state=checked]:border-primary"
        name={name}
        checked={isChecked}
      />
      <span className="opacity-35 ">{label}</span>
    </div>
  );
};

export default KuenzCheckbox;
