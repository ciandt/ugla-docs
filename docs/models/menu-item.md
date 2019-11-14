# Class Menu Item

```typescript
export class MenuItem {
  public description: string;
  public url: string;
  public active: boolean;
  public visible: boolean;
  public hideMobile: boolean;

  /**
   * @param description - menu text
   * @param url - redirect URL
   * @param visible - if false, the menu item will not be shown
   * @param hideMobile - default: false. If true, should hide on mobile devices
   */
  constructor(description: string, url: string, visible?: boolean, hideMobile?: boolean) {
    this.description = description;
    this.url = url;
    this.visible = (visible !== undefined) ? visible : true;
    this.hideMobile = (hideMobile !== undefined) ? hideMobile : false;
  }
}
```