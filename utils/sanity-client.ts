import { ClientConfig, createClient } from 'next-sanity';

export const clientConfig: ClientConfig = {
  projectId: 'lcvfs389',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-08-06',
};

export const client = createClient(clientConfig);