const storagePrefix: string = "ANISAGE_";

export const storage = {
  getUser: () => {
    if (!window.localStorage.getItem(`${storagePrefix}user`)) return undefined;
    if (window.localStorage.getItem(`${storagePrefix}user`)) {
      let value: string = window.localStorage.getItem(`${storagePrefix}user`) ?? ''
      return JSON.parse(value);
    }
  },
  setUser: (user: any) => {
    window.localStorage.setItem(`${storagePrefix}user`, JSON.stringify(user));
  },
  getToken: () => {
    if (!window.localStorage.getItem(`${storagePrefix}token`)) {
      return null;
    }
    if (window.localStorage.getItem(`${storagePrefix}token`)) {
      let value: string = window.localStorage.getItem(`${storagePrefix}token`) ?? ''
      return JSON.parse(value);
    }
  },
  setToken: (token: any) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
    window.dispatchEvent(new Event("storage"));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}user`);
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};