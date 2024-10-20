# Koa.js middleware with Unkey RBAC

This simple Koa.js application demonstrates how to implement API key verification using the Unkey service. The application has both public and protected routes, with the protected route requiring a valid API key.

## Features

- **Public Route**: Accessible without any authentication.
- **Protected Route**: Requires a valid API key to access.
- **Middleware**: Utilizes a decorator to enforce unkey verification on protected routes.

## Setup Unkey

1. Create an [unkey account](http://app.unkey.com/)
2. Create a new [API](https://app.unkey.com/apis). Copy the `API ID`.
3. Go to [permissions](https://app.unkey.com/authorization/permissions) and create a new permission named `access-unkeyed-route`
4. Now go to roles and create a new role and select the `withAuth` permission for the role.
5. Go to [apis](https://app.unkey.com/apis) again and create a new key
6. Click on the **"Keys"** tab.
7. Select the key you created.
8. Click on the **"Permissions"** tab.
9. Check the role's checkbox to assign the role and permission to the key.
10. Create a new root key from the [settings/root-key](https://app.unkey.com/settings/root-keys/) with permission to create and read keys.
11. You can follow this link to create the root key on the workspace level.
[https://app.unkey.com/settings/root-keys/new?permissions=api.*.create_key,api.*.read_key](https://app.unkey.com/settings/root-keys/new?permissions=api.*.create_key,api.*.read_key)
12. Alternatively, follow this link to create the root key on the API level. Replace the API id with your API id. 
[https://app.unkey.com/settings/root-keys/new?permissions=api.api_id.create_key,api.api_id.read_key](https://app.unkey.com/settings/root-keys/new?permissions=api.api_id.create_key,api.api_id.read_key)

## Prerequisites

- An account with Unkey and your API ID and Root Key

## Quickstart

1. Clone this repository:
   
   ```
   git clone https://github.com/harshsbhat/unkey-koa.git
   cd unkey-koa
   ```

2. Install the required dependencies

   ```
   npm install
   ```

3. Setup env variables. `cp .env.example .env`

   ```
   UNKEY_ROOT_KEY=""
   UNKEY_API_ID=""
   ```

4. Start the project
   
   ```
   npm run start
   ```

## Usage

- **Public Route:** Visit `http://localhost:3000/public` to access the public route.
- **Protected Route:** Use a tool like Postman or curl to send a GET request to `http://localhost:3000/protected` with an `Authorization` header containing your API key.

**Example public request using curl:**

```bash
curl http://127.0.0.1:3000/public
```

**Example protected request using curl ( MAKE SURE THE API KEY has the access-unkeyed-route permission)**

```bash
curl -H "Authorization: Bearer <api_key>" http://localhost:3000/protected
```

