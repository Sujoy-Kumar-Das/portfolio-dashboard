import { Controller, useFormContext } from "react-hook-form";

type TInputField = {
  type: string;
  name: string;
  label: string;
};

export default function InputField({ type, name, label }: TInputField) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <div className=" w-full">
          <label htmlFor={name} className=" block">
            {label}
          </label>
          <input
            {...field}
            id={name}
            placeholder={label}
            type={type}
            className="input input-bordered w-full mt-2"
          />

          {errors[name] && (
            <p className="text-error">{errors[name]?.message as string}</p>
          )}
        </div>
      )}
    />
  );
}
