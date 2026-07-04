// Sanity client
// Run: npm install @sanity/client
import sanityClient from '@sanity/client';

export const sanity = sanityClient({
  projectId: 'nerr9xkw', // approved
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
});
