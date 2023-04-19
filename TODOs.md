## Create a "search by tags" feature

To be used in the current `projectsByTag` resolver.

## validate nginx config during docker build

Use `nginx -t` to validate that the config is valid when building the image.

## Automate certificate renewal

The current TLS certificate was done on the host nginx, not the container, and no automatic renewal is set to happen.

## Setup TypeScript for frontend

So we can profit from the GraphQL schema types in the frontend code.

## `Navbar` indentation change

When changing between the `/why-us` and `/get-inspired`, it seems that an extra
padding is added to the header (probably `Navbar`), and causes the header to
shift right.
