import { getHeadRow } from './GenericTable';
import tables from '../../../constants/tables';

describe('GenericTable', () => {
  it('should get header from head object', () => {
    const table = tables[0];
    const result = getHeadRow(table);

    expect(result).toEqual(table.head);
  });

  it('should get header from table keys', () => {
    const expected = [
      { title: 'id' },
      { title: 'name' },
      { title: 'date' },
      { title: 'location' },
      { title: 'drink' },
      { title: 'amount' },
    ];

    const table = tables[1];
    const result = getHeadRow(table);

    expect(result).toEqual(expected);
  });

  it('should return an empty array', () => {
    const result = getHeadRow({ tableId: 'id', body: [], head: [] });
    expect(result).toEqual([]);
  });
});
