import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { AnyZodObject, z } from "zod";

type TFrom = {
  children: ReactNode;
  handler: SubmitHandler<FieldValues>;
  schema: AnyZodObject;
};

export default function From({ children, handler, schema }: TFrom) {
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handler)}>{children}</form>
    </FormProvider>
  );
}
