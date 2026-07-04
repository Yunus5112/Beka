export default {
  name: 'unavailable',
  title: 'Unavailable',
  type: 'document',
  fields: [
    { name: 'date', title: 'Date', type: 'date', options: { dateFormat: 'yyyy-MM-dd' } },
    { name: 'times', title: 'Times', type: 'array', of: [{ type: 'string' }] }
  ]
};
