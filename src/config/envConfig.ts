import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(3333),
});

export type Env = z.infer<typeof envSchema>;

const envParseResult = envSchema.safeParse(process.env);

if (!envParseResult.success) {
  console.error(
    "❌ Variáveis de ambiente inválidas:",
    envParseResult.error.flatten().fieldErrors
  );
  process.exit(1);
}

export const env = envParseResult.data;