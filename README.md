# Todo List API 

API example with Deno, Oak and mongodb

## Getting Started

```
deno run --unstable --allow-plugin --allow-read --allow-write --allow-net index.ts
```


## Methods

### Get Todos
```
GET http://localhost:1337/todos
```

### GEt Todo
```
GET http://localhost:1337/todos/:todoId
```

### Create Todo
```
POST http://localhost:1337/todos
Content-Type: application/json

{
  "name": "Task # 1"
}
```

### Update Todo
```
PUT http://localhost:1337/todos/:todoId
Content-Type: application/json

{
  "completed": true
}
```

### Delete Todo
```
DELETE http://localhost:1337/todos/:todoId
Content-Type: application/json
```

## Authors
* **Antonio Manuel Pérez López** - *Developer* - [aperezl](https://github.com/aperezl)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details