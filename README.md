# Currency Converter

Simply App using Node.js, to convert currencies getting input from the terminal. By default JavaScript doesn't offer an easy way to take input from the terminal, I've used the a library *sync-input* developed by **Hyperskill team**.

To install the library to your project. Run the command in your terminal:

```sh
npm install https://github.com/hyperskill/sync-input/archive/v1.tar.gz
```

## 📂 Files

Inside of the Currency Converter project, you'll see the following folders and files:

```text
/
├── app/
│   └── sync-input/
│   │   └── index.js
│   │   └── LICENSE
│   │   └── package.json
│   │   └── README.md
│   └── main.js
│   └── README.md
```

## 👨🏻‍💻‍ User Inputs

The currency calculator will prompt the user for the following information:

| Command                               | Action                                                     |
|:--------------------------------------|:-----------------------------------------------------------|
| `1-Convert currencies 2-Exit program` | Receive a *Number* 1(to continue) or 2 (to exit)           |
| `From:`                               | Receive a *String* with the currency origin (i.e USD)      |
| `To:`                                 | Receive a *String* with the currency destination (i.e JPY) |
| `Amount:`                             | Receive a *String* with value to convert                   |
