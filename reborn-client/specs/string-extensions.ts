export { }; // Ensure this file is treated as an external module

declare global {
  interface String {
    snakeCase: string;
    dashCase: string;
    titleCase: string;
    titleCaseFromCamel: string;
    camelCase: string;
    className: string;
    lowerFirst: string;
  }
}

Object.defineProperty(String.prototype, "snakeCase", {
  get: function () {
    return this.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
  },
  enumerable: false,
});

Object.defineProperty(String.prototype, "dashCase", {
  get: function () {
    return this.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  },
  enumerable: false,
});

Object.defineProperty(String.prototype, "titleCaseFromCamel", {
  get: function () {
    return this.replace(/([a-z])([A-Z])/g, "$1 $2").replace(
      /\b\w/g,
      (char: any) => char.toUpperCase()
    );
  },
  enumerable: false,
});

Object.defineProperty(String.prototype, "camelCase", {
  get: function () {
    return this.toLowerCase().replace(/[_-\s]+(.)?/g, (_: any, char: any) =>
      char ? char.toUpperCase() : ""
    );
  },
  enumerable: false,
});

Object.defineProperty(String.prototype, "titleCase", {
  get: function () {
    return this.replace(/([a-z])([A-Z])/g, "$1 $2").replace(
      /\w\S*/g,
      (word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  },
  enumerable: false,
});

Object.defineProperty(String.prototype, "className", {
  get: function () {
    return this.replace(/[-_]./g, (c: string) => c.charAt(1).toUpperCase())
      .replace(/^./, (c: string) => c.toUpperCase());
  },
  enumerable: false,
});
Object.defineProperty(String.prototype, "lowerFirst", {
  get: function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
  },
  enumerable: false,
});
