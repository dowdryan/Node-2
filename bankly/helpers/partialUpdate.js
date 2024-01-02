/** Generate a selective update query based on a request body:
 * - table: where to make the query
 * - items: the list of columns you want to update
 * - key: the column that we query by (e.g. username, handle, id)
 * - id: current record ID
 *
 * Returns object containing a DB query as a string, and array of
 * string values to be updated
 *
 */

function sqlForPartialUpdate(table, items, key, id) {
  let idx = 1; // keep track of item indexes
  let columns = []; // store all the columns we want to update and associate with vals
  // Create a new object to store filtered items
  const filteredItems = {};
  for (let column in items) {
    if (!column.startsWith("_")) {
      filteredItems[column] = items[column];
    }
  }
  for (let column in filteredItems) {
    columns.push(`${column}=$${idx}`);
    idx += 1;
  }
  // build query
  let cols = columns.join(", ");
  let query = `UPDATE ${table} SET ${cols} WHERE ${key}=$${idx} RETURNING *`;
  let values = Object.values(filteredItems);
  values.push(id);
  idx -= 1; // decrement idx before pushing id
  return {query, values};
}


module.exports = sqlForPartialUpdate;
