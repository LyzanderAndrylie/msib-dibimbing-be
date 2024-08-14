import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://localhost:${process.env.PORT}/graphql`,
  generates: {
    'src/graphql/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
