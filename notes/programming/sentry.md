---
title: Sentry
emoji: 📝
tags:
  - error-handling
  - web
link:
created: 2021-06-22T15:06:09.000Z
modified: 2021-06-22T15:06:09.000Z
---

## [Handling GraphQL Errors Using Sentry](https://blog.sentry.io/2020/07/22/handling-graphql-errors-using-sentry)

### Reporting Errors to Sentry with Apollo Server

```js
didEncounterErrors(ctx) {
  // If we couldn't parse the operation, don't
  // do anything here
  if (!ctx.operation) {
    return;
  }
  for (const err of ctx.errors) {
    // Only report internal server errors,
    // all errors extending ApolloError should be user-facing
    if (err instanceof ApolloError) {
      continue;
    }
    // Add scoped report details and send to Sentry
    Sentry.withScope(scope => {
      // Annotate whether failing operation was query/mutation/subscription
      scope.setTag("kind", ctx.operation.operation);
      // Log query and variables as extras
      // (make sure to strip out sensitive data!)
      scope.setExtra("query", ctx.request.query);
      scope.setExtra("variables", ctx.request.variables);
      if (err.path) {
        // We can also add the path as breadcrumb
        scope.addBreadcrumb({
          category: "query-path",
          message: err.path.join(" > "),
          level: Sentry.Severity.Debug
        });
      }
      Sentry.captureException(err);
    });
  }
}
```

### Tracing Errors, End-To-End

```js
// Retrieve the transaction ID from our request headers
const transactionId = ctx.request.http.headers.get("x-transaction-id");
if (transactionId) {
  scope.setTransaction(transactionId);
}
// ...
Sentry.captureException(err);
```

### Add searchable details as tags, otherwise use extras
