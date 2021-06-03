# ឯកសារ TypeScript ជាភាសាខ្មែរ

![typescript thumbnail](/images/typescript.jpg "TypeScript Tutorial")

- **TypeScript** គឺដូចទៅចឹង **JavaScript** ដែរ ចំណុចដែលខុសគ្នានោះគឺថា ការសរសេរកូដដោយប្រើ **TypeScript** គឺប្រើប្រភេទទិន្នន័យត្រឹមត្រូវ តែបើ **JavaScript** វិញគឺចង់ប្រើប្រភេទទិន្នន័យអ្វីក៏បាន។

- **TypeScript** មិនអាចប្រតិបត្តិកូដរបស់ខ្លួនទៅលើ _Web Browser_ បាននោះទេ ដូច្នេះ **TypeScript** ត្រូវបំលែងកូដទាំងនោះទៅជាកូដរបស់ **JavaScript** ដើម្បីអាចប្រតិបត្តិនៅលើ _Web Browser_ បាន។

---

## ការរៀបចំមជ្ឈដ្ឋានសម្រាប់សរសេរកូដ TypeScript

- ត្រូវមាន **NodeJS** នៅក្នុងម៉ាស៊ីនកុំព្យូទ័រ
- វាយ _Command_ ទាំងនេះនៅក្នុង **Git Bash** ឬ **Command Prompt** ដើម្បីទាញយក **TypeScrip**t មកដាក់ក្នុងម៉ាស៊ីនកុំព្យូទ័រ: `npm install -g typescript`
- ដើម្បីបញ្ជាក់ថាអ្នកបានទាញយកបាន TypeScript មកដាក់ក្នុងម៉ាស៊ីនកុំព្យូទ័រហើយឬនៅ អ្នកអាចវាយ Command ខាងក្រោមប៉ុន្មានដើម្បីបញ្ជាក់បានដូចជា: `tsc --version` ឬ `tsc --help`
- ចំណុចបន្ទាប់អ្នកត្រូវការ Config តិចតួចទាក់ទងនឹង Project TypeScript របស់អ្នកគឺបង្កើតឯកសារថ្មីមួយនៅក្នុង Project របស់អ្នកដោយដាក់ឈ្មោះឯកសារឈ្មោះថា `tsconfig.json` បន្ទាប់មកសរសេរ `json` ដូចខាងក្រោមទៅក្នុង `tsconfig.json`:

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "ts-built",
    "rootDir": "app"
  }
}
```

- `json` ខាងលើនេះមានទិន្នន័យពីរដែលអ្នកគួរតែកត់សម្គាល់គឺ `outDir` និង `rootDir` ដែល​ `rootDir` គឺជា folder សម្រាប់ផ្ទុកឯកសារ **TypeScript** រីឯ `outDir` វិញជា folder សម្រាប់ផ្ទុក ឯកសារ **JavaScript**។
- ចំណុចបន្ទាប់អ្នកប្រើប្រាស់ Command មួយគឺ `tsc -w` ដែល Command នេះវានឹងប្រតិបត្តិរហូតនៅរាល់ពេលដែលអ្នកបានសរសេរកូដ **TypeScript** ហើយវានឹងបំលែងកូដដែលអ្នកបានសរសេរនោះ ទៅជាកូដ **JavaScript**។ ហើយដើម្បីប្រតិបត្តិកូដទាំងនោះ អ្នកត្រូវវាយ command `cd ts-built` ហើយវាយ command `node index.js` បញ្ជាប់បន្តិច index.js នៅខាងមុខនេះជាឈ្មោះឯកសារដែលអ្នកបានបង្កើតនៅកក្នុងកូដ **​TypeScript** ហើយវាបំលែងបន្តមកជាកូដ **JavaScript**។
