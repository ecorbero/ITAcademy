// Delcarar Funcio Middleware
const funcioMidelware = () => {
  const middlewares = [];

  const use = fn => middlewares.push(fn);

  const runMiddlewares = index => {
    const count = middlewares.length;
    if (index < count)
      middlewares[index].call(null, () => runMiddlewares(index + 1));
  }

  const get = () => {
    // Middlewares
    runMiddlewares(0);
    console.log('get');
  }

  return {
    get,
    use
  }
}

// Crear la APP (Amb Midleware)
const app = funcioMidelware();

// Executar Midleware App 1
app.use((next) => {
  console.log('1');
  next();
});

// Executar Midleware App 2
app.use((next) => {
  setTimeout(() => {
    console.log('2');
    next();
  }, 1000);
});

// Executar Midleware App 3
app.use((next) => {
  console.log('3');
  next();
});

// Executar Midleware App 4
app.use((next) => {
  console.log('4');
  next();
});

app.get();