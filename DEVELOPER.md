## Issues & WorkArounds

#### Material UI issue with React.StrictMode (Warning in development mode)

![Hello World](https://user-images.githubusercontent.com/17594101/80005032-af519700-8488-11ea-87dd-ebf0489f6c6b.png)

Refer https://github.com/mui-org/material-ui/issues/13394 for discussion

Read about the [StrictMode](https://reactjs.org/docs/strict-mode.html)

> Temporary Workaround

Disabling the strictmode in development to avoid the errors is the sane thing to do.

```src/index.tsx```

```bash
17. ReactDOM.render(
18.  -   <React.StrictMode>
19.  -      <App />
20.  -   </React.StrictMode>,
  17.  +   <App />,
    document.getElementById("root")
);
```