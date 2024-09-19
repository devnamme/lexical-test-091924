import { z } from 'zod';

const ContentFormSchema = z.object({
  content: z.string(),
});

export default ContentFormSchema;
