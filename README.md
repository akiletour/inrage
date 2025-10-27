# inRage: A React / NextJS portfolio of a French Web developer

[![Last commit](https://img.shields.io/github/last-commit/akiletour/inrage)](https://github.com/akiletour/inrage/commits/main)
![Stars](https://img.shields.io/github/stars/akiletour/inrage?label=%E2%AD%90%20Stars)
[![Follow](https://img.shields.io/github/followers/akiletour?label=Please%20follow%20%20to%20support%20my%20work&style=social)](https://github.com/Akiletour)

<p align="center">
<img alt="Portfolio inRage - Pascal GAULT" src="./public/images/inline-logo.png" />
</p>

Initially developed with WordPress, I decided to refactor the whole project with Next.js.

To retrieve all projects (portfolio) and blog posts, I've used the WordPress API with [GraphQL](https://fr.wordpress.org/plugins/wp-graphql/).

Since the project part has ACF custom fields. I use a second [GraphQL extension](https://www.wpgraphql.com/acf/) to manage them

![inRage](./public/images/screenshot.png)

## 📦 Stack

### Core Technologies

- `TypeScript`: v5.9+
- `Next.js`: v16.0 (App Router)
- `React`: v19.2
- `Node.js`: v24+ (Volta)
- `pnpm`: v10.3 (Package manager)

### Styling & Animations

- `Tailwind CSS`: v4.1+ with Typography plugin
- `Framer Motion`: v12+ for page transitions and animations
- `GSAP`: v3+ for advanced animations

### Backend & Data

- `WordPress`: v6.7+ (Headless CMS)
- `GraphQL`: WPGraphQL for WordPress API communication
- `WPGraphQL ACF`: For Advanced Custom Fields support
- `SWR`: Client-side data fetching

### Content & Forms

- `MDX`: Blog posts with frontmatter support
- `React Hook Form`: Form management
- `Akismet`: Spam protection for contact form
- `Mailjet`: Email service integration

### DevOps & Monitoring

- `Sentry`: Error tracking and performance monitoring
- `Turbopack`: Build tool (dev & production)
- `Jest`: Testing framework
- `ESLint`: Next.js core + TypeScript + Prettier

## ⚡️ Installation

Make sure to use a recent version of Node.js (>= v24).

```bash
pnpm install
pnpm dev
```

You can now access to the project with: http://localhost:3000

### Available Commands

- `pnpm dev` - Start development server with Turbopack (http://localhost:3000)
- `pnpm build` - Build production application with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality
- `pnpm type-check` - TypeScript type checking
- `pnpm test` - Run Jest tests in watch mode

## 🔧 Configuration

To correctly run this project, you must create an environment variable named `.env.local`.

- `AKISMET_API_KEY`: Your Akismet API Key to check spam
- `MJ_APIKEY_PUBLIC`: Your API Mailjet username
- `MJ_APIKEY_PRIVATE`: Your API Mailjet password
- `WORDPRESS_API_URL`: https://YOUR-WEBSITE/graphql
- `WORDPRESS_AUTH_REFRESH_TOKEN`: If you need to access to your private and unpublished content
- `WORDPRESS_PREVIEW_SECRET`: The token used by `/api/preview?secret=XXX`
- `SLACK_WEBHOOK_URL`: If set, on each contact message, a Slack Webhook will be sent.

## 🏗️ Architecture

### Project Structure

```
app/
├── (pages)/          # Route groups for main pages
├── components/       # Reusable React components
├── types/            # TypeScript type definitions (including GraphQL types)
├── libs/             # Utility libraries and API functions
├── utils/            # Helper utilities
├── hooks/            # Custom React hooks
├── layouts/          # Layout components
└── graphql/          # GraphQL queries and mutations
```

### Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `@/*` → `app/*`
- `@component/*` → `app/components/*`
- `@layout/*` → `app/layouts/*`
- `@hook/*` → `app/hooks/*`
- `@type/*` → `app/types/*`
- `@lib/*` → `app/libs/*`
- `@util/*` → `app/utils/*`
- `@image/*` → `public/images/*`
- `@graphql-query/*` → `app/graphql/*`

### Key Features

- **App Router**: Using Next.js 16 App Router architecture
- **TypeScript Strict Mode**: Comprehensive type safety
- **MDX Support**: Blog posts written in MDX with frontmatter
- **Image Optimization**: Remote WordPress images served via i0.wp.com
- **Preview Mode**: Draft content preview functionality
- **Tailwind Custom Theme**: 8px increment spacing system with custom color palette
- **Authentication**: JWT-based for accessing private WordPress content

# 🔒️ WordPress Configuration

in this part, we will configure the WordPress part to ensure the communication with Next.js

## WPGraphQL plugin

Once the site is ready, you'll need to install the [WPGraphQL plugin](https://github.com/wp-graphql/wp-graphql). It will add GraphQL API to your WordPress site, which we'll use to query the posts. Follow these steps to install it:

Download the WPGraphQL repo as a ZIP archive.

## Access private content

First thing first, we'll create a JWT constant in our `wp-config.php`.

```php
define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'XXXXXXX');
```

It's recommended that you use something like the WordPress Salt generator ([https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/)) to generate a Secret.

You can install and activate the plugin like any WordPress plugin. Download the .zip from GitHub Release page of WPGraphql [JWT Authentication](https://github.com/wp-graphql/wp-graphql-jwt-authentication/releases) and add to your plugins directory, then activate.

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
