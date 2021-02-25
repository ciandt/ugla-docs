---
id: table-row
title: Table Row
---

```typescript
import { TableColumn } from './table-column';

export class TableRow {
  columns: TableColumn[];

  constructor(columns: TableColumn[]) {
    this.columns = columns;
  }
}
```