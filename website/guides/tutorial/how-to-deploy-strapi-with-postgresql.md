---
last_modified_on: "2021-09-04"
$schema: "/.meta/.schemas/guides.json"
title: How to deploy Strapi with PostgreSQL
description: This tutorial show you how to deploy Strapi with PostgreSQL in a few steps
author_github: https://github.com/evoxmusic
tags: ["type: tutorial", "framework: strapi", "database: postgresql"]
hide_pagination: true
---

import Steps from '@site/src/components/Steps';

import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';
import Jump from '@site/src/components/Jump';

> This tutorial is linked to this [Strapi tutorial](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/qovery.html)

This is a step-by-step guide for deploying a Strapi project on Qovery.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/tutorial/how-to-deploy-strapi-with-postgresql.md.erb
-->

## Deploying with the web interface

<Steps headingDepth={3}>
<ol>

<li>

### Create a Qovery Account
Visit [the Qovery dashboard][urls.start_qovery] to create an account if you don't already have one.

</li>

<li>

### Create a new project

<p align="center">
  <img src="/img/heroku/heroku-2.png" alt="Strapi" />
</p>

</li>

<li>

### Create a new environment

<p align="center">
  <img src="/img/heroku/heroku-3.png" alt="Strapi" />
</p>

</li>

<li>

### Create a new application

Select your Github or Gitlab repository where your Strapi app is located:

<p align="center">
  <img src="/img/rust/rust.png" alt="Migrate from Heroku" />
</p>

After the application is created: 

- Navigate application settings
- Select **Port**
- Add port used by our Strapi application

<p align="left">
    <img src="/img/micro/micros-1.png" alt="Microservices" />
</p>

This will expose your application and make accessible in the public internet.

</li>

<li>

### Deploy a database

Create and deploy a new database PostgreSQL database

To learn how to do it, you can [follow this guide][guides.getting-started.create-a-database]

</li>

<li>

### Add storage

To add storage, go to your Strapi application **Settings**:

<p align="center">
  <img src="/img/add-storage.png" alt="Add Storage" />
</p>

</li>

<li>

### Setup your Strapi configuration:

To use PostgreSQL provided by Qovery, you can use the built-in secrets and environment variables.
You can read more about environment variables and secrets in our [configuration section][docs.configuration.environment-variable].

</li>

## Deploy your application

All you have to do now is to navigate to your application and click **Deploy** button

<p align="center">
  <img src="/img/heroku/heroku-1.png" alt="Deploy App" />
</p>

That's it. Watch the status and wait till the app is deployed.

To open the application in your browser, click on **Action** and **Open** buttons in your application overview:

<p align="center">
  <img src="/img/deploy-env-1.png" alt="Open App" />
</p>

</ol>
</Steps>

<Jump to="/guides/tutorial/">Tutorial</Jump>


[docs.configuration.environment-variable]: /docs/using-qovery/configuration/environment-variable/
[guides.getting-started.create-a-database]: /guides/getting-started/create-a-database/
[urls.start_qovery]: https://start.qovery.com
