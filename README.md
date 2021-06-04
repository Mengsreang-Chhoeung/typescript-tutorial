# ឯកសារ TypeScript ជាភាសាខ្មែរ

![typescript thumbnail](/images/typescript.jpg "TypeScript Tutorial")

- **TypeScript** គឺដូចទៅចឹង **JavaScript** ដែរ ចំណុចដែលខុសគ្នានោះគឺថា ការសរសេរកូដដោយប្រើ **TypeScript** គឺប្រើប្រភេទទិន្នន័យត្រឹមត្រូវ តែបើ **JavaScript** វិញគឺចង់ប្រើប្រភេទទិន្នន័យអ្វីក៏បាន។

- **TypeScript** មិនអាចប្រតិបត្តិកូដរបស់ខ្លួនទៅលើ _Web Browser_ បាននោះទេ ដូច្នេះ **TypeScript** ត្រូវបំលែងកូដទាំងនោះទៅជាកូដរបស់ **JavaScript** ដើម្បីអាចប្រតិបត្តិនៅលើ _Web Browser_ បាន។

---

## ការរៀបចំមជ្ឈដ្ឋានសម្រាប់សរសេរកូដ TypeScript

- ត្រូវមាន **NodeJS** នៅក្នុងម៉ាស៊ីនកុំព្យូទ័រ
- វាយ _Command_ ទាំងនេះនៅក្នុង **Git Bash** ឬ **Command Prompt** ដើម្បីទាញយក **TypeScript** មកដាក់ក្នុងម៉ាស៊ីនកុំព្យូទ័រ: `npm install -g typescript`
- ដើម្បីបញ្ជាក់ថាអ្នកបានទាញយកបាន TypeScript មកដាក់ក្នុងម៉ាស៊ីនកុំព្យូទ័រហើយឬនៅ អ្នកអាចវាយ command ខាងក្រោមប៉ុន្មានដើម្បីបញ្ជាក់បានដូចជា: `tsc --version` ឬ `tsc --help`
- ចំណុចបន្ទាប់អ្នកត្រូវការ config តិចតួចទាក់ទងនឹង Project TypeScript របស់អ្នកគឺបង្កើតឯកសារថ្មីមួយនៅក្នុង Project របស់អ្នកដោយដាក់ឈ្មោះឯកសារឈ្មោះថា `tsconfig.json` បន្ទាប់មកសរសេរ `json` ដូចខាងក្រោមទៅក្នុង `tsconfig.json`:

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "ts-built",
    "rootDir": "app"
  }
}
```

- `json` ខាងលើនេះមានទិន្នន័យពីរដែលអ្នកគួរតែកត់សម្គាល់គឺ `outDir` និង `rootDir` ដែល​ `rootDir` គឺជា folder សម្រាប់ផ្ទុកឯកសារ **TypeScript** រីឯ `outDir` វិញជា folder សម្រាប់ផ្ទុក ឯកសារ **JavaScript**។
- ចំណុចបន្ទាប់អ្នកប្រើប្រាស់ command មួយគឺ `tsc -w` ដែល command នេះវានឹងប្រតិបត្តិរហូតនៅរាល់ពេលដែលអ្នកបានសរសេរកូដ **TypeScript** ហើយវានឹងបំលែងកូដដែលអ្នកបានសរសេរនោះ ទៅជាកូដ **JavaScript**។ ហើយដើម្បីប្រតិបត្តិកូដទាំងនោះ អ្នកត្រូវវាយ command `cd ts-built` ហើយវាយ command `node index.js` បញ្ជាប់បន្តិច index.js នៅខាងមុខនេះជាឈ្មោះឯកសារដែលអ្នកបានបង្កើតនៅកក្នុងកូដ **​TypeScript** ហើយវាបំលែងបន្តមកជាកូដ **JavaScript**។

---

## តោះសរសេរកូដ TypeScript

> index.ts

```
let message: string = "Hello World";
console.log(message);
```

> index.js

```
let message = "Hello World";
console.log(message);
```

> Compile time

```
$ node index.js
Hello World
```

---

## អំពី Data Type ក្នុង TypeScript

ខាងក្រោមនេះគឺជាប្រភេទទិន្នន័យនៅក្នុង **TypeScript**:
| Data type | Keyword | Description |
| ------------- |:-------------:| :-----|
| Number | number | ជាប្រភេទទិន្នន័យបែបជាចំនួនលេខទាំងចំនួនគត់និងចំនួនទសភាគ |
| String | string | ជាប្រភេទទិន្នន័យបែបជាតួអក្សរនីមួយៗនិងអក្សរច្រើន |
| Boolean | boolean |​ ជាប្រភេទទិន្នន័យបែបជាប្រៀបធៀបដែលតម្លៃមានតែពីរគត់គឺ true និង false |
| Void | void | ជាប្រភេទទិន្នន័យបែបផ្តល់តម្លៃទៅឲ្យអនុគមន៍ |
| Null | null | ជាប្រភេទទិន្នន័យបែបផ្តល់តម្លៃទទេទៅឲ្យតួអក្សរ |
| Undefined | undefined | ជាប្រភេទទិន្នន័យបែបមិនផ្តល់តម្លៃទៅឲ្យអញ្ញាត |
