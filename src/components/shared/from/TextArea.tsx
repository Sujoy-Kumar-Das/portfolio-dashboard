import { Controller, useFormContext } from "react-hook-form";

type TInputField = {
  name: string;
  label: string;
};

export default function TextArea({ name, label }: TInputField) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      <div className="mt-2">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className=" w-full">
              <label htmlFor={label} className=" block">
                {label}
              </label>
              <textarea
                {...field}
                className="textarea textarea-bordered w-full"
                placeholder={label}
              ></textarea>
            </div>
          )}
        />
      </div>
      {errors[name] ? (
        <p className="text-red-600 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      ) : null}
    </div>
  );
}
