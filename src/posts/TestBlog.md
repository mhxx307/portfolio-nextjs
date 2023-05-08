---
slug: how-to-create-a-database-using-the-mongodb-atlas-ui
title: How to Create a Database Using the MongoDB Atlas UI
author: Quân La
author_title: Sinh viên trường đại học Công Nghiệp, Freelancer^
author_url: https://github.com/mhxx307
author_image_url: https://minhquan-blogapp.netlify.app/static/media/profile.f66bd9b4689d8e2950b5.png
image: https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://jacekjeznach.com/wp-content/uploads/2022/11/6597434-scaled.jpg
tags: [mongodb, nosql]
categories: [IT, database]
---

MongoDB has been at the forefront of application development for developers and enterprises over the past decade. According to [TechRepublic](https://www.techrepublic.com/article/mongodb-database-trends/), over 35,000 Fortune 500 companies and startups alike have been utilizing MongoDB for mainstream data infrastructure. One of the key drivers of the shift from virtual machines to the full use of cloud was MongoDB’s launching of Atlas, six years ago.

<!-- truncate-->

## What is MongoDB Atlas?

MongoDB Atlas is a non-relational, multi-cloud, database-as-a-service (DBaaS) that can configure and host the database with a simple process, even if the data is unstructured. According to Tony Baer, founder of [dbInsight](https://thenewstack.io/how-database-as-a-service-boosts-frontend-development/), Atlas has “really freed up developers,” making it invaluable to the industry. It’s also much easier to learn than relational databases, which require developers to manage the database alongside key-value stores and search engines.

## 1. Create Your First Cluster

Before proceeding, we also advise that you have an updated version of JavaScript installed. This tutorial will focus on connecting to MongoDB Atlas from your local Node.js or Express.js environment. To create an account and access Atlas cloud services, you’ll need to go to the [MongoDB](https://www.mongodb.com/basics/create-database) homepage and press the ‘Create a free database now’ button. This will redirect you to the cluster creation wizard and lead you to choose a plan for yourself.

## 2. Setup The Cluster

Assuming you have no clusters set up yet, you’ll need to click ‘Build a cluster’, and select a Cloud Provider and Region. After this step, you can name your cluster – take note that the name cannot be changed once it’s created. You can also configure any necessary options as you deem fit. MongoDB will take about 5-10 minutes to create your cluster, so a bit of patience is needed.

## 3. Obtain The Connection String

Now that you have a cluster, you’ll need a valid connection string to connect it to your application. To obtain this, you’ll need to first add the Database User and IP address of your current machine by going to the ‘Security’ tab to whitelist your IP address. Then head to the ‘Overview’ tab and press ‘Connect’, which will trigger a dialogue. Take note that you also have to select Node.js to save the connection string.

## 4. Mongoose Installation

To code, you’ll also need to install Mongoose, which is a JavaScript object-oriented programming library that connects MongoDB and the Node. Use the following code in db.js.:

    const mongoose = require('mongoose')
    const url = `mongodb+srv://sample_user:@my-sample-cluster-b3ugy.mongodb.net/?retryWrites=true&w=majority`;``
    const connectionParams={
        useNewUrlParser:`true`,
        useCreateIndex:`true`,
        useUnifiedTopology:`true`,
    }
    mongoose.connect(url,connectionParams).then( () => {
    	`console.log(``'Connected to database '``)`
    `}).``catch``( (err) => {`
    	console.error(`Error connecting to the database. \n${err}`);
    })

Make sure you replace ‘dbname’ with the name you’ve given your database, and ‘password’ with your user password.

## 5. Connecting Clusters and Managing Documents

The connection string you’ve previously received will mention a database named ‘test’. A MongoDB database is composed of one or more collections, and the free tier cluster on MongoDB Atlas can have a maximum of 500 collections. So if you’ve reached this far, congratulations – you’ve successfully created a basic database using the MongoDB Atlas UI! The next best step would be to learn MongoDB commands to navigate databases better.

## Conclusion

If you are adamant about integrating MongoDB Atlas into your [JavaScript](https://jacekjeznach.com/category/javascript/) projects, we have plenty of articles that can help you figure out the best way to go about it. That said, it’s an extremely beneficial platform for developers and enterprises alike, and is likely to become even more popular in the near future.
