import {
  UseFormProps,
  UseFormReturn,
  useForm as useRHForm,
} from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types';

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
export const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  // eslint-disable-next-line
  TContext = any,
>({
  mode = 'onBlur',
  ...params
}: UseFormProps<TFieldValues, TContext> = {}): UseFormReturn<
  TFieldValues,
  TContext
> => useRHForm({ ...params, mode });

export type { UseFormProps, UseFormReturn };
