# @r6nted/db

To get started with this package install it using yarn or npm. Package name is `r6nted.db`

Then, use one of these examples in your code.

```js
const Database = require("r6nted.db");
const db = new Database("database.json");
```
```ts
import * as Database from "r6nted.db";
const db = new Database("database.json");
```

### All available methods

```js
db.set("value", "key"); // sets key's value
db.get("key"); // returns value
db.delete("key"); // deletes key
db.sync(); // syncs database
db.has("key"); // returns true or false
db.JSON(); // returns entire database
```

⭐ Enjoy this package? Star it!
