import type { Metadata } from 'next';

// This function is used to generate static metadata for the site
// TODO - Update the metadata function
export function generateStaticMetadata(options: Metadata): Metadata {
  return {
    ...options,
  } as Metadata;
}
