# e-commerce-api

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



<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Used technologies
<p id="used-technologies">
The NestJS framework forms the foundation of the system, offering a strong basis for the development of microservices and REST APIs. MongoDB Atlas, a cloud-based NoSQL database service, is seamlessly integrated with, providing businesses with a scalable and resilient database solution. RabbitMQ is utilized as the message broker for communication between microservices, ensuring efficient and reliable data exchange.

[![Nest][Nest.js]][Nest-url] [![Node][Node.js]][Node-url]
[![MongoDB Atlas][MongoDB-Atlas]][MongoDB-url] 
[![RabitMQ][RabbitMQ]][RabbitMQ-url]
[![TypeScript][TypeScript.js]][TypeScript-url]

</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

* Installing mongoose into a project:
  ```sh
  npm install @nestjs/mongoose mongoose  
  ```
</p>

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
[RabbitMQ-url]:https://www.rabbitmq.com/
[TypeScript-url]:https://www.typescriptlang.org/
[Node-url]:https://nodejs.org/en
[Nest.js]:https://img.shields.io/badge/Nest.js-20232A?style=for-the-badge&logo=nestjs&logoColor=FF0000
[Node.js]:https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=Node.js&logoColor=FFFFF
[MongoDB-Atlas]:https://img.shields.io/badge/MongoDB-20232A?style=for-the-badge&logo=MongoDB
[RabbitMQ]:https://img.shields.io/badge/RabbitMQ-20232A?style=for-the-badge&logo=rabbitmq
[TypeScript.js]:https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript

