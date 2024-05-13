import { useFormContext } from "react-hook-form";

export default function InputFile({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full mt-2">
      <label htmlFor={name} className=" block mb-1">
        {label}
      </label>
      <input
        type="file"
        {...register(name)}
        className="border border-gray-300 rounded-md p-3 bg-transparent text-white w-full"
      />
      {errors[name] && (
        <p className="text-red-600">{errors[name]?.message as string}</p>
      )}
    </div>
  );
}
