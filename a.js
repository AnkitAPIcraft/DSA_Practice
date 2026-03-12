class Database {
  constructor() {
    this.tables = {}; // tableName → Table
  }

  createTable(name, schemaArray) {
    if (this.tables[name]) {
      throw new Error(`Table ${name} already exists`);
    }

    const schema = {};
    for (const col of schemaArray) {
      if (schema[col.name]) {
        throw new Error(`Duplicate column ${col.name}`);
      }
      if (!['string', 'int'].includes(col.type)) {
        throw new Error(`Invalid type ${col.type} for ${col.name}`);
      }
      schema[col.name] = col.type;
    }

    this.tables[name] = new Table(name, schema);
    console.log(this.tables);
  }

  addColumn(tableName, colName, colType, defaultValue = null) {
    const table = this._getTable(tableName);
    if (table.schema[colName]) {
      throw new Error(`Column ${colName} already exists`);
    }
    if (!['string', 'int'].includes(colType)) {
      throw new Error(`Invalid type ${colType}`);
    }

    table.schema[colName] = colType;

    if (defaultValue !== null) {
      // Validate default
      table._validatePartial({ [colName]: defaultValue });
      for (const row of table.data) {
        row[colName] = defaultValue;
      }
    } else if (table.data.length > 0) {
      throw new Error("Default value required when adding column to non-empty table");
    }
  }

  dropColumn(tableName, colName) {
    const table = this._getTable(tableName);
    if (!table.schema[colName]) {
      throw new Error(`Column ${colName} does not exist`);
    }
    delete table.schema[colName];
    for (const row of table.data) {
      delete row[colName];
    }
  }

  deleteTable(name) {
    if (!this.tables[name]) {
      throw new Error(`Table ${name} does not exist`);
    }
    delete this.tables[name];
  }

  _getTable(name) {
    if (!this.tables[name]) {
      throw new Error(`Table ${name} does not exist`);
    }
    return this.tables[name];
  }

  insert(tableName, row) {
    this._getTable(tableName).insert(row);
  }

  update(tableName, filters, updates) {
    this._getTable(tableName).update(filters, updates);
  }

  delete(tableName, filters) {
    this._getTable(tableName).delete(filters);
  }

  select(tableName, filters = []) {
    return this._getTable(tableName).select(filters);
  }

  printAll(tableName) {
    this._getTable(tableName).printAll();
  }
}

class Table {
  constructor(name, schema) {
    this.name = name;
    this.schema = schema;       // { column: 'string'|'int' }
    this.data = [];             // array of row objects
  }

  insert(row) {
    this._validateRow(row, true);
    this.data.push({ ...row });
  }

  update(filters, updates) {
    for (const row of this.data) {
      if (this._matches(row, filters)) {
        const newRow = { ...row, ...updates };
        this._validateRow(newRow, false); // check updated values
        Object.assign(row, updates);
      }
    }
  }

  delete(filters) {
    this.data = this.data.filter(row => !this._matches(row, filters));
  }

  select(filters = []) {
    return this.data
      .filter(row => this._matches(row, filters))
      .map(row => ({ ...row }));
  }

  printAll() {
    for (const row of this.data) {
      const ordered = {};
      for (const col in this.schema) {
        ordered[col] = row[col];
      }
      console.log(ordered);
    }
  }

  _validateRow(row, fullCheck = true) {
    if (fullCheck) {
      // Check all required columns present & no extras
      for (const col in this.schema) {
        if (!(col in row)) throw new Error(`Missing column: ${col}`);
      }
      for (const key in row) {
        if (!(key in this.schema)) throw new Error(`Unknown column: ${key}`);
      }
    }

    for (const [col, value] of Object.entries(row)) {
      if (!(col in this.schema)) continue;

      if (value == null) {
        throw new Error(`Null/undefined not allowed in ${col}`);
      }

      const type = this.schema[col];
      if (type === 'string') {
        if (typeof value !== 'string') {
          throw new TypeError(`Expected string for ${col}`);
        }
        if (value.length > 20) {
          throw new Error(`String too long (>20) in ${col}`);
        }
      } else if (type === 'int') {
        if (!Number.isInteger(value)) {
          throw new TypeError(`Expected integer for ${col}`);
        }
        if (value < 10000) {
          throw new Error(`Value too small (<10000) in ${col}`);
        }
      }
    }
  }

  _validatePartial(partial) {
    this._validateRow(partial, false);
  }

  _matches(row, filters) {
    for (const { column, operator, value } of filters) {
      if (!(column in this.schema)) {
        throw new Error(`Invalid filter column: ${column}`);
      }
      const rowVal = row[column];
      if (rowVal === undefined) return false;

      if (operator === '==') {
        if (rowVal !== value) return false;
      } else if (operator === '!=') {
        if (rowVal === value) return false;
      } else {
        throw new Error(`Unsupported operator: ${operator}`);
      }
    }
    return true;
  }
}

const db = new Database();
db.createTable('users', [
  { name: 'id',   type: 'int' },
  { name: 'name', type: 'string' }
]);

db.insert('users', { id: 10000, name: 'Ankit' });
// db.printAll('users');                     // → { id: 10000, name: 'Ankit' }

// db.update('users', [{ column: 'name', operator: '==', value: 'Ankit' }], { id: 10001 });

// const results = db.select('users', [
//   { column: 'id',   operator: '!=', value: 10000 },
//   { column: 'name', operator: '==', value: 'Ankit' }
// ]);
// console.log(results);                     // → [ { id: 10001, name: 'Ankit' } ]

// db.addColumn('users', 'age', 'int', 10000);
// db.delete('users', [{ column: 'id', operator: '==', value: 10001 }]);
// db.dropColumn('users', 'age');
