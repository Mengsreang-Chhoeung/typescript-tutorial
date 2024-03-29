# TypeScript Tutorial

<p align="center">
  <a href="https://www.typescriptlang.org" target="blank"><img style="border-radius: 10px;" src="./doc-images/typescript-logo.png" width="200" alt="TypeScript Logo" /></a>
</p>

<p align="center"><i><b>TypeScript</b> is a strongly typed programming language that builds on <b>JavaScript</b>, giving you better tooling at any scale.</i></p>

## What is TypeScript?

TypeScript is a syntactic superset of JavaScript which adds **static typing**.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add **types**.

> TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.

## Why should I use TypeScript?

JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

> TypeScript uses compile time type checking. Which means it checks if the specified types match **before** running the code, not **while** running the code.

[🔼 Back to top](#typescript-tutorial)

## How do I use TypeScript?

A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.

The next section shows how to get the compiler setup for a local project.

Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!

## How to Setup a TypeScript + Node.js Project

▶️ [Original Blog](https://khalilstemmler.com/blogs/typescript/node-starter-project)

### Prequisites

- You should have Node and npm installed
- You should be familiar with Node and the npm ecosystem
- You have a code editor installed (preferably VS Code, it's the champ for TypeScript)

### Goals

In this short guide, I'll walk you through the process of creating a basic TypeScript application and compiling it. It's actually _really_ easy!

Afterwards, we'll setup a few scripts for hot-reloading in `development`, building for `production`, and running in `production`.

### About TypeScript

TypeScript, developed and appropriated labeled by Microsoft as "JavaScript that scales", is a superset of JavaScript, meaning that everything JavaScript can do, TypeScript can do (and more better).

TypeScript was primarily meant to solve two problems:

1. Provide JavaScript developers with an _optional type system_.
2. Provide JavaScript developers with the ability to utilize **planned features from future JavaScript editions** against _current JavaScript engines_.

We use TypeScript for most of the topics on this blog because it's a lot better suited for creating long-lasting software and having the compiler help catch bugs and validate types is tremendously helpful.

[🔼 Back to top](#typescript-tutorial)

### Initial Setup

Let's create a folder for us to work in.

```shell
mkdir typescript-starter
cd typescript-starter
```

Next, we'll setup the project `package.json` and add the dependencies.

### Setup Node.js `package.json`

Using the `-y` flag when creating a `package.json` will simply approve all the defaults.

```shell
npm init -y
```

### Add TypeScript as a dev dependency

This probably doesn't come as a surprise ;)

```shell
npm install typescript --save-dev
```

After we install `typescript`, we get access to the command line TypeScript compiler through the `tsc` command. More on that below.

### Install ambient Node.js types for TypeScript

TypeScript has Implicit, Explicit, and Ambient types. Ambient types are types that get added to the global execution scope. Since we're using Node, it would be good if we could get type safety and auto-completion on the Node apis like `file`, `path`, `process`, etc. That's what installing the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) type definition for Node will do.

```shell
npm install @types/node --save-dev
```

[🔼 Back to top](#typescript-tutorial)

### Create a `tsconfig.json`

The `tsconfig.json` is where we define the TypeScript compiler options. We can create a tsconfig with several options set.

```shell
npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
```

- `rootDir`: This is where TypeScript looks for our code. We've configured it to look in the `src/` folder. That's where we'll write our TypeScript.
- `outDir`: Where TypeScript puts our compiled code. We want it to go to a `build/` folder.
- `esModuleInterop`: If you were in the JavaScript space over the past couple of years, you might have recognized that modules systems had gotten a little bit out of control (AMD, SystemJS, ES Modules, etc). For a topic that requires a much longer discussion, if we're using `commonjs` as our module system (for Node apps, you should be), then we need this to be set to `true`.
- `resolveJsonModule`: If we use JSON in this project, this option allows TypeScript to use it.
- `lib`: This option adds ambient types to our project, allowing us to rely on features from different Ecmascript versions, testing libraries, and even the browser DOM api. We'd like to utilize some `es6` language features. This all gets compiled down to `es5`.
- `module`: `commonjs` is the standard Node module system in 2019. Let's use that.
- `allowJs`: If you're converting an old JavaScript project to TypeScript, this option will allow you to include `.js` files among `.ts` ones.
- `noImplicitAny`: In TypeScript files, don't allow a type to be unexplicitly specified. Every type needs to either have a specific type or be explicitly declared `any`. No implicit `any`s.

At this point, you should have a `tsconfig.json` that looks like this:

```js
{
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "lib": [
      "es6"
    ] /* Specify library files to be included in the compilation. */,
    "allowJs": true /* Allow javascript files to be compiled. */,
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "build" /* Redirect output structure to the directory. */,
    "rootDir": "src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    "noImplicitAny": true /* Raise error on expressions and declarations with an implied 'any' type. */,
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "resolveJsonModule": true /* Include modules imported with '.json' extension */
  }
}
```

We can go ahead and clean the commented out stuff that we don't need. Our `tsconfig.json` should look like this:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es6"],
    "allowJs": true,
    "outDir": "build",
    "rootDir": "src",
    "strict": true,
    "noImplicitAny": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
```

We're set to run our first TypeScript file.

[🔼 Back to top](#typescript-tutorial)

### Create the `src` folder and create our first TypeScript file

```shell
mkdir src
touch src/index.ts
```

And let's write some code.

```ts
console.log('Hello world!');
```

### Compiling our TypeScript

To compile our code, we'll need to run the `tsc` command using `npx`, the Node package executer. `tsc` will read the `tsconfig.json` in the current directory, and apply the configuration against the TypeScript compiler to generate the compiled JavaScript code.

```shell
npx tsc
```

### Our compiled code

Check out `build/index.js`, we've compiled our first TypeScript file.

```js
'use strict';
console.log('Hello world!');
```

[🔼 Back to top](#typescript-tutorial)

### Useful configurations & scripts

#### Cold reloading

Cold reloading is nice for local development. In order to do this, we'll need to rely on a couple more packages: `ts-node` for running TypeScript code directly without having to wait for it be compiled, and `nodemon`, to watch for changes to our code and automatically restart when a file is changed.

```shell
npm install --save-dev ts-node nodemon
```

Add a `nodemon.json` config.

```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}
```

And then to run the project, all we have to do is run `nodemon`. Let's add a script for that.

```shell
"start:dev": "npx nodemon"
```

By running `npm run start:dev`, `npx nodemon` will start our app using `npx ts-node ./src/index.ts`, watching for changes to `.ts` and `.js` files from within `/src`.

[🔼 Back to top](#typescript-tutorial)

#### Creating production builds

In order to _clean_ and compile the project for production, we can add a `build` script.

Install `rimraf`, a cross-platform tool that acts like the `rm -rf` command (just obliterates whatever you tell it to).

```shell
npm install --save-dev rimraf
```

And then, add this to your `package.json`.

```shell
"build": "rimraf ./build && tsc"
```

Now, when we run `npm run build`, `rimraf` will remove our old `build` folder before the TypeScript compiler emits new code to `dist`.

#### Production startup script

In order to start the app in production, all we need to do is run the `build` command first, and then execute the compiled JavaScript at `build/index.js`.

The startup script looks like this.

```shell
"start": "npm run build && node build/index.js"
```

[🔼 Back to top](#typescript-tutorial)

## TypeScript Simple Types

TypeScript supports some simple types (primitives) you may know. There are three main primitives in JavaScript and TypeScript.

- boolean - true or false values
- number - whole numbers and floating point values
- string - text values like "TypeScript Rocks"

### Type Assignment

When creating a variable, there are two main ways TypeScript assigns a type:

- Explicit
- Implicit

In both examples below `firstName` is of type `string`

**Explicit** - writing out the type:

```ts
let firstName: string = 'Dylan';
```

**Explicit** type assignment are easier to read and more intentional.

**Implicit** - TypeScript will "guess" the type, based on the assigned value:

```ts
let firstName = 'Dylan';
```

> **Note:** Having TypeScript "guess" the type of a value is called infer.

Implicit assignment forces TypeScript to **infer** the value.

**Implicit** type assignment are shorter, faster to type, and often used when developing and testing.

### Error In Type Assignment

TypeScript will throw an error if data types do not match.

```ts
let firstName: string = 'Dylan'; // type string
firstName = 33; // attempts to re-assign the value to a different type
```

**Implicit** type assignment would have made firstName less noticeable as a string, but both will throw an error:

```ts
let firstName = 'Dylan'; // inferred to type string
firstName = 33; // attempts to re-assign the value to a different type
```

**JavaScript** will **not** throw an error for mismatched types.

### Unable to Infer

TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to `any` which disables type checking.

```ts
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse('55');
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
```

This behavior can be disabled by enabling `noImplicitAny` as an option in a TypeScript's project `tsconfig.json`. That is a JSON config file for customizing how some of TypeScript behaves.

> **Note:** you may see primitive types capitalized like Boolean. `boolean !== Boolean`
> For this tutorial just know to use the lower-cased values, the upper-case ones are for very specific circumstances.

[🔼 Back to top](#typescript-tutorial)

## TypeScript Special Types

TypeScript has special types that may not refer to any specific type of data.

### Type: any

`any` is a type that disables type checking and effectively allows all types to be used.

The example below does not use `any` and will throw an error:

```ts
/**
 * Example `without any`
 **/
let u = true;
u = 'string'; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
```

Setting `any` to the special type `any` disables type checking:

```ts
/**
 * Example `with any`
 **/
let v: any = true;
v = 'string'; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
```

> `any` can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...

### Type: unknown

`unknown` is a similar, but safer alternative to `any`.

TypeScript will prevent `unknown` types from being used, as shown in the below example:

```ts
let w: unknown = 1;
w = 'string'; // no error
w = {
  runANonExistentMethod: () => {
    console.log('I think therefore I am');
  },
} as { runANonExistentMethod: () => void };
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
```

Compare the example above to the previous example, with `any`.

> `unknown` is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it. Casting is when we use the "as" keyword to say property or variable is of the casted type.

### Type: never

`never` effectively throws an error whenever it is defined.

```ts
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
```

> `never` is rarely used, especially by itself, its primary use is in advanced generics.

### Type: undefined & null

`undefined` and `null` are types that refer to the JavaScript primitives `undefined` and `null` respectively.

```ts
let y: undefined = undefined;
let z: null = null;
```

> These types don't have much use unless `strictNullChecks` is enabled in the `tsconfig.json` file.

[🔼 Back to top](#typescript-tutorial)

## TypeScript Arrays

TypeScript has a specific syntax for typing arrays.

Read more about arrays in our [JavaScript Array chapter](https://www.w3schools.com/js/js_arrays.asp).

```ts
const names: string[] = [];
names.push('Dylan'); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Readonly

The `readonly` keyword can prevent arrays from being changed.

```ts
const names: readonly string[] = ['Dylan'];
names.push('Jack'); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
```

### Type Inference

TypeScript can infer the type of an array if it has values.

```ts
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push('2'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
```

[🔼 Back to top](#typescript-tutorial)

## TypeScript Tuples

### Typed Arrays

A **tuple** is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:

```ts
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
```

As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:

```ts
// define our tuple
let ourTuple: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple = [false, 'Coding God was mistaken', 5];
```

> Even though we have a `boolean`, `string`, and `number` the order matters in our tuple and will throw an error.

### Readonly Tuple

A good practice is to make your **tuple** `readonly`.

Tuples only have strongly defined types for the initial values:

```ts
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);
```

You see the new valueTuples only have strongly defined types for the initial values:

```ts
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  'The Real Coding God',
];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');
```

To learn more about access modifiers like `readonly` go to our section on them here: [TypeScript Classes](https://www.w3schools.com/typescript/typescript_classes.php).

> If you have ever used React before you have worked with tuples more than likely. `useState` returns a tuple of the value and a setter function. `const [firstName, setFirstName] = useState('Dylan')` is a common example. Because of the structure we know our first value in our list will be a certain value type in this case a `string` and the second value a `function`.

### Named Tuples

**Named tuples** allow us to provide context for our values at each index.

```ts
const graph: [x: number, y: number] = [55.2, 41.3];
```

> **Named tuples** provide more context for what our index values represent.

### Destructuring Tuples

Since tuples are arrays we can also destructure them.

```ts
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
```

> To review destructuring check it out [here](https://www.w3schools.com/react/react_es6_destructuring.asp).

[🔼 Back to top](#typescript-tutorial)

## TypeScript Object Types

TypeScript has a specific syntax for typing objects.

Read more about objects in our [JavaScript Objects chapter](https://www.w3schools.com/js/js_objects.asp).

```ts
const car: { type: string; model: string; year: number } = {
  type: 'Toyota',
  model: 'Corolla',
  year: 2009,
};
```

> Object types like this can also be written separately, and even be reused, look at [interfaces](https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php) for more details.

### Type Inference

TypeScript can infer the types of properties based on their values.

```ts
const car = {
  type: 'Toyota',
};
car.type = 'Ford'; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
```

### Optional Properties

Optional properties are properties that don't have to be defined in the object definition.

```ts
/**
 * Example without an optional property
 **/
const car: { type: string; mileage: number } = {
  // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: 'Toyota',
};
car.mileage = 2000;
```

```ts
/**
 * Example with an optional property
 **/
const car: { type: string; mileage?: number } = {
  // no error
  type: 'Toyota',
};
car.mileage = 2000;
```

### Index Signatures

Index signatures can be used for objects without a defined list of properties.

```ts
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = 'Fifty'; // Error: Type 'string' is not assignable to type 'number'.
```

> Index signatures like this one can also be expressed with utility types like `Record<string, number>`. Learn more about utility types like this in our [TypeScript Utility Types](https://www.w3schools.com/typescript/typescript_utility_types.php) chapter.

[🔼 Back to top](#typescript-tutorial)

## TypeScript Enums

An **enum** is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors `string` and `numeric`. Lets start with numeric.

### Numeric Enums - Default

By default, enums will initialize the first value to `0` and add `1` to each additional value:

```ts
enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
```

### Numeric Enums - Initialized

You can set the value of the first numeric enum and have it auto increment from that:

```ts
enum CardinalDirections {
  North = 1,
  East,
  South,
  West,
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);
```

### Numeric Enums - Fully Initialized

You can assign unique number values for each enum value. Then the values will not incremented automatically:

```ts
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
```

### String Enums

Enums can also contain `strings`. This is more common than numeric enums, because of their readability and intent.

```ts
enum CardinalDirections {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West',
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
```

> Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.

[🔼 Back to top](#typescript-tutorial)

## TypeScript Type Aliases and Interfaces

TypeScript allows types to be defined separately from the variables that use them.

Aliases and Interfaces allows types to be easily shared between different variables/objects.

### Type Aliases

Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like `string` or more complex types such as `objects` and `arrays`:

```ts
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = 'Toyota';
const carModel: CarModel = 'Corolla';
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};
```

### Interfaces

Interfaces are similar to type aliases, except they **only** apply to `object` types.

```ts
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};
```

### Extending Interfaces

Interfaces can extend each other's definition.

> **Extending** an interface means you are creating a new interface with the same properties as the original, plus something new.

```ts
interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: 'red',
};
```

[🔼 Back to top](#typescript-tutorial)

## TypeScript Union Types

**Union types** are used when a value can be more than a single type.

Such as when a property would be `string` or `number`.

### Union | (OR)

Using the `|` we are saying our parameter is a `string` or `number`:

```ts
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');
```

### Union Type Errors

**Note:** you need to know what your type is when union types are being used to avoid type errors:

```ts
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`); // error: Property 'toUpperCase' does not exist ontype 'string | number'.
}
```

In our example we are having an issue invoking `toUpperCase()` as its a `string` method and `number` doesn't have access to it.

[🔼 Back to top](#typescript-tutorial)

## TypeScript Functions

TypeScript has a specific syntax for typing function parameters and return values.

Read more about functions [here](https://www.w3schools.com/js/js_functions.asp).

### Return Type

The type of the value returned by the function can be explicitly defined.

```ts
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}
```

> If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

### Void Return Type

The type `void` can be used to indicate a function doesn't return any value.

```ts
function printHello(): void {
  console.log('Hello!');
}
```

### Parameters

Function parameters are typed with a similar syntax as variable declarations.

```ts
function multiply(a: number, b: number) {
  return a * b;
}
```

> If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

### Optional Parameters

By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

```ts
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
```

### Default Parameters

For parameters with default values, the default value goes after the type annotation:

```ts
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
```

TypeScript can also infer the type from the default value.

### Named Parameters

Typing named parameters follows the same pattern as typing normal parameters.

```ts
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}
```

### Rest Parameters

Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

```ts
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
```

### Type Alias

Function types can be specified separately from functions with type aliases.

These types are written similarly to arrow functions, read more about arrow functions [here](https://www.w3schools.com/js/js_arrow_function.asp).

```ts
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
```

[🔼 Back to top](#typescript-tutorial)

## TypeScript Casting

There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

Casting is the process of overriding a type.

### Casting with `as`

A straightforward way to cast a variable is using the `as` keyword, which will directly change the type of the given variable.

```ts
let x: unknown = 'hello';
console.log((x as string).length);
```

Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable `x` is still holds a number.

```ts
let x: unknown = 4;
console.log((x as string).length); // prints undefined since numbers don't have a length
```

TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:

```ts
console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
```

The Force casting section below covers how to override this.

### Casting with `<>`

Using <> works the same as casting with `as`.

```ts
let x: unknown = 'hello';
console.log((<string>x).length);
```

> This type of casting will not work with TSX, such as when working on React files.

### Force casting

To override type errors that TypeScript may throw when casting, first cast to `unknown`, then to the target type.

```ts
let x = 'hello';
console.log((x as unknown as number).length); // x is not actually a number so this will return undefined
```

[🔼 Back to top](#typescript-tutorial)

## TypeScript Classes

TypeScript adds types and visibility modifiers to JavaScript classes.

Learn more about JavaScript classes [here](https://www.w3schools.com/js/js_classes.asp).

### Members: Types

The members of a class (properties & methods) are typed using type annotations, similar to variables.

```ts
class Person {
  name: string;
}

const person = new Person();
person.name = 'Jane';
```

### Members: Visibility

Class members also be given special modifiers which affect visibility.

There are three main visibility modifiers in TypeScript.

- public - (default) allows access to the class member from anywhere
- private - only allows access to the class member from within the class
- protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

```ts
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person('Jane');
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
```

> The `this` keyword in a class usually refers to the instance of the class. Read more about `this` [here](https://www.w3schools.com/js/js_this.asp).

### Parameter Properties

TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

```ts
class Person {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person = new Person('Jane');
console.log(person.getName());
```

### Readonly

Similar to arrays, the `readonly` keyword can prevent class members from being changed.

```ts
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person('Jane');
console.log(person.getName());
```

### Inheritance: Implements

Interfaces can be used to define the type a class must follow through the `implements` keyword.

```ts
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
```

> A class can implement multiple interfaces by listing each one after `implements`, separated by a comma like so: `class Rectangle implements Shape, Colored {`

### Inheritance: Extends

Classes can extend each other through the `extends` keyword. A class can only extends one other class.

```ts
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}
```

### Override

When a class extends another class, it can replace the members of the parent class with the same name.

Newer versions of TypeScript allow explicitly marking this with the `override` keyword.

```ts
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}
```

> By default the `override` keyword is optional when overriding a method, and only helps to prevent accidentally overriding a method that does not exist. Use the setting `noImplicitOverride` to force it to be used when overriding.

### Abstract Classes

Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the `abstract` keyword. Members that are left unimplemented also use the `abstract` keyword.

```ts
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
```

> Abstract classes cannot be directly instantiated, as they do not have all their members implemented.

[🔼 Back to top](#typescript-tutorial)

## TypeScript Basic Generics

Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

Generics makes it easier to write reusable code.

### Functions

Generics with functions help make more generalized methods which more accurately represent the types used and returned.

```ts
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
```

> TypeScript can also infer the type of the generic parameter from the function parameters.

### Classes

Generics can be used to create generalized classes, like [Map](https://www.w3schools.com/js/js_maps.asp).

```ts
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
```

> TypeScript can also infer the type of the generic parameter if it's used in a constructor parameter.

### Type Aliases

Generics in type aliases allow creating types that are more reusable.

```ts
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };
```

> This also works with interfaces with the following syntax: `interface Wrapped<T> {`

### Default Value

Generics can be assigned default values which apply if no other value is specified or inferred.

```ts
class NamedValue<T = string> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue('myNumber');
value.setValue('myValue');
console.log(value.toString()); // myNumber: myValue
```

### Extends

Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

```ts
function createLoggedPair<S extends string | number, T extends string | number>(
  v1: S,
  v2: T
): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}
```

> This can be combined with a default value.

[🔼 Back to top](#typescript-tutorial)

## TypeScript Utility Types

TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

This chapter covers the most popular utility types.

### Partial

`Partial` changes all the properties in an object to be optional.

```ts
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
```

### Required

`Required` changes all the properties in an object to be required.

```ts
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000, // `Required` forces mileage to be defined
};
```

### Record

`Record` is a shortcut to defining an object type with a specific key type and value type.

```ts
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};
```

> `Record<string, number>` is equivalent to `{ [key: string]: number }`

### Omit

`Omit` removes keys from an object type.

```ts
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob',
  // `Omit` has removed age and location from the type and they can't be defined here
};
```

### Pick

`Pick` removes all but the specified keys from an object type.

```ts
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Pick<Person, 'name'> = {
  name: 'Bob',
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
```

### Exclude

`Exclude` removes types from a union.

```ts
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
```

### ReturnType

`ReturnType` extracts the return type of a function type.

```ts
type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};
```

### Parameters

`Parameters` extracts the parameter types of a function type as an array.

```ts
type PointPrinter = (p: { x: number; y: number }) => void;
const point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20,
};
```

[🔼 Back to top](#typescript-tutorial)

## TypeScript Keyof

`keyof` is a keyword in TypeScript which is used to extract the key type from an object type.

### `keyof` with explicit keys

When used on an object type with explicit keys, `keyof` creates a union type with those keys.

```ts
interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: 'Max',
  age: 27,
};
printPersonProperty(person, 'name'); // Printing person property name: "Max"
```

### `keyof` with index signatures

`keyof` can also be used with index signatures to extract the index type.

```ts
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
```

[🔼 Back to top](#typescript-tutorial)

## TypeScript Null & Undefined

TypeScript has a powerful system to deal with `null` or `undefined` values.

> By default `null` and `undefined` handling is disabled, and can be enabled by setting `strictNullChecks` to true. The rest of this page applies for when `strictNullChecks` is enabled.

### Types

`null` and `undefined` are primitive types and can be used like other types, such as `string`.

```ts
let value: string | undefined | null = null;
value = 'hello';
value = undefined;
```

> When `strictNullChecks` is enabled, TypeScript requires values to be set unless `undefined` is explicitly added to the type.

### Optional Chaining

Optional Chaining is a JavaScript feature that works well with TypeScript's null handling. It allows accessing properties on an object, that may or may not exist, with a compact syntax. It can be used with the `?.` operator when accessing properties.

```ts
interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log('No yard');
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500,
};

printYardSize(home); // Prints 'No yard'
```

### Nullish Coalescence

Nullish Coalescence is another JavaScript feature that also works well with TypeScript's null handling. It allows writing expressions that have a fallback specifically when dealing with `null` or `undefined`. This is useful when other falsy values can occur in the expression but are still valid. It can be used with the `??` operator in an expression, similar to using the `&&` operator.

```ts
function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
```

### Null Assertion

TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being `null` or `undefined`. An easy way to do this is to use casting, but TypeScript also provides the `!` operator as a convenient shortcut.

```ts
function getValue(): string | undefined {
  return 'hello';
}
let value = getValue();
console.log('value length: ' + value!.length);
```

> Just like casting, this can be unsafe and should be used with care.

### Array bounds handling

Even with `strictNullChecks` enabled, by default TypeScript will assume array access will never return undefined (unless undefined is part of the array type).

The config `noUncheckedIndexedAccess` can be used to change this behavior.

```ts
let array: number[] = [1, 2, 3];
let value = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
```

[🔼 Back to top](#typescript-tutorial)

## TypeScript Definitely Typed

NPM packages in the broad JavaScript ecosystem doesn't always have types available.

Sometimes the projects are no longer maintained, and other times they aren't interested in, agree with, or have time to use TypeScript.

### Using non-typed NPM packages in TypeScript

Using untyped NPM packages with TypeScript will not be type safe due to lack of types.

To help TypeScript developers use such packages, there is a community maintained project called [Definitely Typed](http://definitelytyped.org).

Definitely Typed is a project that provides a central repository of TypeScript definitions for NPM packages which do not have types.

```shell
npm install --save-dev @types/jquery
```

No other steps are usually needed to use the types after installing the declaration package, TypeScript will automatically pick up the types when using the package itself.

> Editors such as Visual Studio Code will often suggest installing packages like these when types are missing.

[🔼 Back to top](#typescript-tutorial)

## Leetcode Problems & Solutions

Here are the list of problems and includes solutions with TypeScript code:

- [2235. Add Two Integers](https://github.com/Mengsreang-Chhoeung/typescript-tutorial/tree/main/src/leetcode/2235-add-two-integers)

[🔼 Back to top](#typescript-tutorial)

### 📜 References

- [W3Schools](https://www.w3schools.com/typescript)

- [TypeScript Documentation](https://www.typescriptlang.org/docs)

- [Leetcode](https://leetcode.com)

### 🤝 Contributors

- Mengsreang-Chhoeung [@mengsreang_dev](https://twitter.com/mengsreang_dev)
