---
id: table-header
title: Table Header
---

```typescript
export class TableHeader {
  text: string;
  size: number;
  align: string;

  constructor(text: string, size: number, align: string) {
    this.text = text;
    this.size = size;
    this.align = align;
  }
}
```