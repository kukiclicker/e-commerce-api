# E-commerce-api

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#used-technologies">Used technologies</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#node">Node.js</a></li>
        <li><a href="#nest">Nest.js</a></li>
        <li><a href="#mongo">MongoDB</a></li>
      </ul>
    </li>
    <li><a href="#apis">APis</a>
      <ul>
        <li><a href="#categories-api">Categories API</a></li>
        <li><a href="#products-api">Products API</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

<p id="about-the-project">
This project is a contemporary, scalable, and efficient e-commerce system that 
offers robust <b>REST APIs</b> for the management of product categories and products. 
These APIs are constructed using a <b>microservices architecture</b>, enabling 
functionalities such as the creation, retrieval, updating, and deletion of 
categories and products.<br>
The project presents a modern e-commerce solution designed to meet the diverse
needs of businesses, with a strong focus on flexibility and scalability for 
seamless product management.
</p>


### Used technologies
<p id="used-technologies">
The NestJS framework forms the foundation of the system, offering a strong basis for the development of microservices and REST APIs. MongoDB Atlas, a cloud-based NoSQL database service, is seamlessly integrated with, providing businesses with a scalable and resilient database solution. Vercel platform is used for application deployment.

[![Nest][Nest.js]][Nest-url] [![Node][Node.js]][Node-url]
[![MongoDB Atlas][MongoDB-Atlas]][MongoDB-url] 
[![TypeScript][TypeScript.js]][TypeScript-url]
[![Vercel][Vercel-img]][Vercel-url]
</p>

## Getting Started

In order to develop this project following dependencies were installed:
<ul>
    <li>Node.js</li>
    <li>NestCLI</li>
    <li>Mongoose</li>
    
</ul>

### Node.js
<p id="node">
The package manager of choice in this project was npm. This package manager comes
with node.js.<br>

* To check version of npm use command:
  ```sh
  npm --version
  ```
</p>

### Nest.js
<p id="nest">

#### Instalation

Next step is to install Nest.js framework for API development.   <br>

* Installation command:
  ```sh
  npm i -g @nestjs/cli
  ```
#### New project
* Creating new Nest.js project:
  ```sh
  nest new project-name
  ```
This command create new project and populate the directory with initial Nest 
files, building a core structure of the project.

</p>

#### Creating new app 
Microservices are added as separate applications within the project converting it to monorepo. Creating 
new apps is possible via terminal using command below:<br>
* Installation command:
  ```sh
  nest generate application <application-name>
  ```
#### Running the application 
* Starting application in dev mode:
  ```sh
  npm run start:dev <application-name>
  ```
This command run main.ts file and logs the changes of the project automatically to console. 

### Mongo DB 
<p id="mongo">
This project incorporates the MongoDB Atlas cloud service as its chosen database solution. In order to manage database connectivity and execute CRUD (Create, Read, Update, Delete) operations on data, the project has installed the Mongoose package.
Mongoose is a popular ODM (Object Data Modeling) library for MongoDB in the Node.js ecosystem.
* Installing mongoose into a project:
  ```sh
  npm install @nestjs/mongoose mongoose  
  ```
</p>

## APIs
Both category and product service provides REST API with fundamental CRUD operations. 

## Categories API

The Categories API provides endpoints for managing product categories. The base URL for the Categories API is https://category-service-c7zkuehkh-uros-projects-1ce427ee.vercel.app/categories/

### Endpoints

#### Get all Categories

Endpoint: /categories<br>
    Method: GET<br>
    Description: Retrieve a list of all product categories.<br>
    Response Status Code: 200 (OK)<br>
    
* Response Example:
  ```json
  {
    "id": "65463f46fdef24a0d6ce258f",
    "name": "T-Shirts",
    "description": "Casual and comfortable short-sleeve shirts for everyday wear."
  },
  {
    "id": "65463f46fdef24a0d6ce2590",
    "name": "Jeans",
    "description": "Durable and versatile denim pants for various occasions."
  },
  {
    "id": "65463f46fdef24a0d6ce2591",
    "name": "Dresses",
    "description": "Elegant and stylish outfits suitable for formal events and parties."
  },
  {
    "id": "65463f46fdef24a0d6ce2592",
    "name": "Sweaters",
    "description": "Warm and cozy knitwear to keep you comfortable in cold weather."
  },
  {
    "id": "65463f46fdef24a0d6ce2593",
    "name": "Activewear",
    "description": "Sporty clothing designed for physical activities and workouts."
  }
  ```

#### Create Category

Endpoint: /categories<br>
    Method: POST<br>
    Description: Create a new product category.<br>
    Response Status Code: 201 (CREATED)<br>
    
* Request Body:
  ```json
    {
        "id": "65463f46fdef24a0d6ce2592",
        "name": "Sweaters",
        "description": "Warm and cozy knitwear to keep you comfortable in cold weather."
    }
  ```
* Response Body:
  ```json
    {
        "message": "Category created!"
    }
  ```

#### Get Category by ID

Endpoint: /categories/{category_id}<br>
    Method: GET<br>
    Description: Retrieve a single product category by its ID.<br>
    Response Status Code: 200 (OK)<br>
    
* Response Example for /categories/65463f46fdef24a0d6ce2592`:
  ```json
  {
    "id": "65463f46fdef24a0d6ce2592",
    "name": "Sweaters",
    "description": "Warm and cozy knitwear to keep you comfortable in cold weather."
  }
  
  ```
#### Update Category 

Endpoint: /categories/{category_id}<br>
    Method: PATCH<br>
    Description: Update an existing product category by its ID.<br>
    Response Status Code: 200 (OK)<br>
    
* Request Body:
  ```json
    {
        "description": "Warm and cozy knitwear to keep you comfortable in cold weather."
    }
  ```
* Response Body:
  ```json
    {
        "message": "Category updated!"
    }
  ```
#### Delete Category 

Endpoint: /categories/{category_id}<br>
    Method: DELETE<br>
    Description: Delete a product category by its ID.<br>
    Response Status Code: 200 (OK)<br>
    
* Response Body:
  ```sh
    {
        "message": "Category deleted!"
    }
  ```
## Products API

The Categories API provides endpoints for managing products. The base URL for the Products API is https://products-service-77u9mryf1-uros-projects-1ce427ee.vercel.app/products

### Endpoints

#### Get all Products

Endpoint: /products<br>
    Method: GET<br>
    Description: Retrieve a list of all products.<br>
    Response Status Code: 200 (OK)<br>
    
* Response Example:
  ```json
    {
      {
        "id": "6544170609288edb54ecd1e9",
        "title": "Slim-Fit White Shirt",
        "description": "A sophisticated white shirt tailored for men, suitable for formal occasions.",
        "price": 59.99,
        "size": "Medium",
        "color": "White",
        "origin": "Italy"
      },
      {
        "id": "6544172e09288edb54ecd1ec",
        "title": "High-Rise Skinny Jeans",
        "description": "Trendy high-rise skinny jeans for women, designed for a flattering fit and style.",
        "price": 49.95,
        "size": "28 waist, 32 inseam",
        "color": "Blue",
        "origin": "USA"
      }
    }
  ```

#### Create Product

Endpoint: /products<br>
    Method: POST<br>
    Description: Create a new product.<br>
    Response Status Code: 201 (CREATED)<br>
    
* Request Body:
  ```json
    {
        "id": "6544170609288edb54ecd1e9",
        "title": "Slim-Fit White Shirt",
        "description": "A sophisticated white shirt tailored for men, suitable for formal occasions.",
        "price": 59.99,
        "size": "Medium",
        "color": "White",
        "origin": "Italy"
    }
  ```
* Response Body:
  ```sh
    {
        "message": "Product created!"
    }
  ```

#### Get Product by ID

Endpoint: /products/{product_id}<br>
    Method: GET<br>
    Description: Retrieve a single product by its ID.<br>
    Response Status Code: 200 (OK)<br>
    
* Response Example for /products/6544170609288edb54ecd1e9:
  ```json
    {
      "id": "6544170609288edb54ecd1e9",
      "title": "Slim-Fit White Shirt",
      "description": "A sophisticated white shirt tailored for men, suitable for formal occasions.",
      "price": 59.99,
      "size": "Medium",
      "color": "White",
      "origin": "Italy"
  }
  ```
#### Update Products 

Endpoint: /products/{product_id}<br>
    Method: PATCH<br>
    Description: Update an existing product by its ID.<br>
    Response Status Code: 200 (OK)<br>
    
* Request Body:
  ```json
    {
       
        "title": "Slim-Fit White Shirt",
        "description": "A sophisticated white shirt tailored for men, suitable for formal occasions.",
        "price": 59.99,
        
    }
  ```
* Response Body:
  ```json
    {
        "message": "Product updated!"
    }
  ```
#### Delete Product 

Endpoint: /products/{product_id}<br>
    Method: DELETE<br>
    Description: Delete a product by its ID.<br>
    Response Status Code: 200 (OK)<br>
    
* Response Body:
  ```json
    {
        "message": "Product deleted!"
    }
  ```

## Contact

<p id="contact">
Uros Mitrovic 
<br>LinkedIn: https://www.linkedin.com/in/uros-mitrovic-016a23208/
<br>Email: umitrovic22@gmail.com
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License
<p id="licence">
Distributed under the MIT License. See `LICENSE.txt` for more information.
</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>


[MongoDB-url]:https://www.mongodb.com/atlas/database
[Nest-url]:https://nestjs.com/
[TypeScript-url]:https://www.typescriptlang.org/
[Vercel-url]:https://www.typescriptlang.org/](https://vercel.com
[Node-url]:https://nodejs.org/en
[Nest.js]:https://img.shields.io/badge/Nest.js-20232A?style=for-the-badge&logo=nestjs&logoColor=FF0000
[Node.js]:https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=Node.js&logoColor=FFFFF
[MongoDB-Atlas]:https://img.shields.io/badge/MongoDB-20232A?style=for-the-badge&logo=MongoDB
[RabbitMQ]:https://img.shields.io/badge/RabbitMQ-20232A?style=for-the-badge&logo=rabbitmq
[TypeScript.js]:https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript
[Vercel-img]:https://img.shields.io/badge/Vercel-20232A?style=for-the-badge&logo=vercel
