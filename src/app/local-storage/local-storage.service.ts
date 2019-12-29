export class LocalStorageService {
  protected storage: Storage = window.localStorage;

  constructor() {
  }

  public set(key: string, value: any) {
    this.storage.setItem(key, value ? value.toString() : null);
  }

  public get(key: string, defaultValue: string | null = null, setDefault: boolean = false): string | null {
    const v = this.storage.getItem(key);
    if (v === null && setDefault) {
      this.set(key, defaultValue);
    }
    return v === null ? defaultValue : v;
  }

  public clear() {
    return this.storage.clear();
  }

  public remove(key) {
    this.storage.removeItem(key);
  }

  public pop(key) {
    const str = this.get(key);
    this.remove(key);
    return str;
  }

  public keys() {
    const relevant: Array<string> = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.storage.length; i++) {
      relevant.push(this.storage.key(1));
    }
    return relevant;
  }

  public values() {
    const keys = this.keys();
    return keys.map(k => {
      return this.get(k);
    });
  }

  public all() {
    const keys = this.keys();
    const values = keys.map(k => {
      return this.get(k);
    });
    const all: Array<{ key: string, value: string }> = [];
    for (let i = 0; i < keys.length; i++) {
      all.push({
        key: keys[i],
        value: values[i]
      });
    }
    return all;
  }

  public each(callbackfn: (key: string, value: string | null) => any): void {
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      callbackfn(key, this.get(key));
    }
  }

  public has(key): boolean {
    return this.storage.getItem(key) !== null;
  }

  public refresh(key, value) {
    if (this.has(key)) {
      this.remove(key);
    }
    this.set(key, value);
  }
}
