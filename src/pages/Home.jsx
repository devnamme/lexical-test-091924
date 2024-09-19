import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RichTextInput } from '../components/util/RichTextInput';
import ContentFormSchema from '../schemas/ContentFormSchema';

export const Home = () => {
  const form = useForm({
    defaultValues: {
      content: '',
    },
    resoler: zodResolver(ContentFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={() => form.handleSubmit(onSubmit)}
    >
      <RichTextInput
        form={form}
        name="content"
        label="Content"
        required
        placeholder="Enter content"
      />
    </form>
  );
};
