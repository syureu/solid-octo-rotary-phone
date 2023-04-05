/*
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

export

The export declaration is used to export values from a JavaScript module.
Exported values can then be imported into other programs with the "import" declaration or dynamic import.
The value of an imported binding is subject to change in the module that exports it
— when a module updates the value of a binding that it exports, the update will be visible in its imported value.

In order to use the export declaration in a source file, the file must be interpreted by the runtime as a module.
In HTML, this is done by adding type="module" to the <script> tag, or by being imported by another module.
Modules are automatically interpreted in strict mode.

Syntax
*/
// Exporting declarations
export let name1, name2/*, … */; // also var
export const name1 = 1, name2 = 2/*, … */; // also var, let
export function functionName() { /* … */ }
export class ClassName { /* … */ }
export function* generatorFunctionName() { /* … */ }
export const { name1, name2: bar } = o;
export const [ name1, name2 ] = array;

// Export list
export { name1, /* …, */ nameN };
export { variable1 as name1, variable2 as name2, /* …, */ nameN };
export { variable1 as "string name" };
export { name1 as default /*, … */ };

// Default exports
export default expression;
export default function functionName() { /* … */ }
export default class ClassName { /* … */ }
export default function* generatorFunctionName() { /* … */ }
export default function () { /* … */ }
export default class { /* … */ }
export default function* () { /* … */ }

// Aggregating modules
export * from "module-name";
export * as name1 from "module-name";
export { name1, /* …, */ nameN } from "module-name";
export { import1 as name1, import2 as name2, /* …, */ nameN } from "module-name";
export { default, /* …, */ } from "module-name";
export { default as name1 } from "module-name";
/*
Identifier to be exported (so that it can be imported via "import" in another script).
If you use an alias with "as",the actual exported name can be specified as a string literal, which may not be a valid identifier.

Description

Every module can have two different types of export, named export and default export.
You can have multiple named exports per module but only one default export.
Each type corresponds to one of the above syntax.

Named exports:
*/
// export features declared elsewhere
export { myFunction2, myVariable2 };

// export individual features (can export var, let, const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() {
  // …
}
/*
After the "export" keyword, you can use "let", "const", and "var" declarations, as well as "function" or "class" declarations.
You can also use the ```export { name1, name2 }``` syntax to export a list of names declared elsewhere.
Note that export {} does not export an empty object — it's a no-op declaration that exports nothing (an empty name list).
> empty object를 내보내고 싶다면 export {new Obejct()} 같은식으로 해야될 듯

Export declarations are not subject to temporal dead zone rules.
You can declare that the module exports X before the name X itself is declared.
*/
export { x };
const x = 1;
// This works, because `export` is only a declaration, but doesn't utilize the value of `x`.
/*
> TDZ (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)
대충 읽어보니 변수 선언전에 존재하지 않는 코드구간대 말하는 것 같음 (js는 호이스팅 개념이 있으니까)
그러면 Export는 TDZ의 대상이 아니라고 하니 예시를 든것처럼 x를 내보낼수는 있는데 x의 값을 활용하지 못한다는게 정확히 무슨 의미인지 모르겠네
x = 1; 대입전에 내보내졌으니까 x가 1을 가지고 있지 않을때의것이 export 된다는걸로 우선 이해

Default exports:
*/
// export feature declared elsewhere as default
export { myFunction as default };
// This is equivalent to:
export default myFunction;

// export individual features as default
export default function () { /* … */ }
export default class { /* … */ }
/*
Note: Names for export declarations must be distinct from each other.
Having exports with duplicate names or using more than one "default" export will result in a SyntaxError and prevent the module from being evaluated.

The export default syntax allows any expression.
*/
export default 1 + 1;
/*
As a special case,
functions and classes are exported as declarations,
not expressions,
and these declarations can be anonymous.
This means functions will be hoisted.
*/
// Works because `foo` is a function declaration,
// not a function expression
foo();

export default function foo() {
  console.log("Hi");
}

// It's still technically a declaration, but it's allowed
// to be anonymous
export default function () {
  console.log("Hi");
}
/*
Named exports are useful when you need to export several values.
When importing this module, named exports must be referred to by the exact same name (optionally renaming it with as),
but the default export can be imported with any name. For example:
*/
// file test.js
const k = 12;
export default k;
// some other file
import m from "./test"; // note that we have the freedom to use import m instead of import k, because k was default export
console.log(m); // 12
/*
You can also rename named exports to avoid naming conflicts:
*/
export { myFunction as function1, myVariable as variable };
/*
You can rename a name to something that's not a valid identifier by using a string literal. For example:
*/
export { myFunction as "my-function" };
/*
Re-exporting / Aggregating

