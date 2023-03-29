# inRage: A React / NextJS portfolio of a French Web developer

[![Last commit](https://img.shields.io/github/last-commit/akiletour/inrage)](https://github.com/akiletour/inrage/commits/main)
![Stars](https://img.shields.io/github/stars/akiletour/inrage?label=%E2%AD%90%20Stars)
[![Follow](https://img.shields.io/github/followers/akiletour?label=Please%20follow%20%20to%20support%20my%20work&style=social)](https://github.com/Akiletour)

<p align="center">
<img alt="Portfolio inRage - Pascal GAULT" src="./public/images/inline-logo.png" />
</p>


Initially developed with WordPress, I decided to refactor the whole project with Next JS.

To retrieve all projects (portfolio) and blog posts, I've used the WordPress API with [GraphQL](https://fr.wordpress.org/plugins/wp-graphql/).

Since the project part has ACF custom fields. I use a second [GraphQL extension](https://www.wpgraphql.com/acf/) to manage them

![inRage](./public/images/screenshot.png)

## 📦 Stack
- `TypeScript`: v4.5
- `NextJS`: v12.x
- `Node`: v16+
- `WordPress`: v5.8+
- `Framer Motion`: for animations between page transitions
- `Akismet`: to check spam in the contact form
- `GraphQL`: communication with the WordPress API

## ⚡️ Installation

Make sure to use newest version of Node JS (v16).

```bash
yarn
yarn dev
```

You can now access to the project with : http://localhost:3000

## 🔧 Configuration 

In order to correctly run this project, you must create an environment variables named `.env.local`.

- `AKISMET_API_KEY`: Your Akismet API Key to check spam
- `MJ_APIKEY_PUBLIC`: Your API Mailjet username 
- `MJ_APIKEY_PRIVATE`: Your API Mailjet password
- `WORDPRESS_API_URL`: https://YOUR-WEBSITE/graphql 
- `WORDPRESS_AUTH_REFRESH_TOKEN`: If you need to access to your private and unpublished content
- `WORDPRESS_PREVIEW_SECRET`: The token used by `/api/preview?secret=XXX`
- `SLACK_WEBHOOK_URL`: If set, on each contact message, a slack webhook will be sent.

# 🔒️ WordPress Configuration

in this part, we will configure the WordPress part to ensure the communication with Next JS

## WPGraphQL plugin

Once the site is ready, you'll need to install the [WPGraphQL plugin](https://github.com/wp-graphql/wp-graphql). It will add GraphQL API to your WordPress site, which we'll use to query the posts. Follow these steps to install it:

Download the WPGraphQL repo as a ZIP archive.

## Access private content

First thing first, we'll create a JWT constant in our `wp-config.php`.

```php
define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'XXXXXXX');
```

It's recommended that you use something like the WordPress Salt generator ([https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/)) to generate a Secret.

You can install and activate the plugin like any WordPress plugin. Download the .zip from Github Release page of WPGraphql [JWT Authentication](https://github.com/wp-graphql/wp-graphql-jwt-authentication/releases) and add to your plugins directory, then activate.

Once installed, in the GraphQL IDE, run the following mutation : 

```graphql
mutation Login {
  login(
    input: {
      clientMutationId: "uniqueId"
      password: "your_password"
      username: "your_username"
    }
  ) {
    refreshToken
  }
}
```


Copy the `refreshToken` returned by the mutation, then open `.env.local`, and make the following changes:

- `WORDPRESS_AUTH_REFRESH_TOKEN` : set it to be the `refreshToken` you just received.
