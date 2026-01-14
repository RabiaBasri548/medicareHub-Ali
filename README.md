MediCare Hub 🏥

Full-Stack Healthcare Web Application

MediCare Hub is a full-stack healthcare web application developed for a real medical client. The project provides a professional online presence for a doctor, showcasing medical services, doctor information, and patient-related resources.
It demonstrates practical full-stack development using modern web technologies with a scalable backend architecture.


---

👩‍💻 Developer

Rabia Basri
FA23-BSE-153


---

👨‍⚕️ Client

Dr. Ali Waqar (MBBS)
RHC Hospital, Rodu Sultan


---

🌐 Live Deployment

Frontend deployed on Vercel:
👉 https://medicare-ten-woad.vercel.app/


---

📌 Project Overview

MediCare Hub is designed as a real-client healthcare solution with a focus on:

Clean and responsive UI

RESTful backend architecture

Media handling and file uploads

API-based communication between frontend and backend


The project reflects production-ready development practices and fulfills academic full-stack requirements.


---

🛠️ Tech Stack

Frontend

HTML5

CSS3

JavaScript


Backend

Node.js

Express.js

RESTful APIs


Database

MongoDB (MongoDB Atlas)


Tools & Deployment

Git & GitHub (Version Control)

Vercel (Frontend Deployment)



---

✨ Features

Responsive healthcare website UI

Doctor profile and medical services pages

Appointment management system

Product/service management with image upload

Media upload and retrieval routes

Search functionality

RESTful API architecture

Real client–based project structure

Scalable backend design



---

📂 Project Structure

MediCare-Hub/
│
├── frontend/
│   ├── index.html
│   ├── assets/
│   │   └── doctor.jpg
│   └── css/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── models/
│   │   ├── Appointment.js
│   │   ├── Product.js
│   │   └── Media.js
│   ├── routes/
│   │   ├── appointmentRoutes.js
│   │   ├── productRoutes.js
│   │   └── mediaRoutes.js
│   ├── controllers/
│   │   ├── appointmentController.js
│   │   ├── productController.js
│   │   └── mediaController.js
│   └── uploads/
│
└── README.md


---

📡 API Endpoints

Appointment Routes

Method	Endpoint	Description

POST	/api/appointments	Create new appointment
GET	/api/appointments	Get all appointments
GET	/api/appointments/:id	Get appointment by ID
PUT	/api/appointments/:id	Update appointment
DELETE	/api/appointments/:id	Delete appointment


Product Routes

Method	Endpoint	Description

POST	/api/products	Create product (with image)
GET	/api/products	Fetch all products
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product


Media Routes

Method	Endpoint	Description

POST	/api/media/upload	Upload media file
GET	/api/media	Fetch uploaded media



---

🧪 Testing

All APIs tested using Postman

CRUD operations verified

Valid HTTP status codes returned

MongoDB Atlas connection tested successfully



---

🔢 HTTP Response Codes

Code	Meaning

200	OK
201	Created
400	Bad Request
404	Not Found
500	Server Error



---

⚙️ Setup Instructions (Localhost)

Frontend

Open index.html directly in browser
OR

Use Live Server extension


Backend

cd backend
npm install
npm start

Server runs at:

http://localhost:5000


---

🔐 Environment Variables (.env)

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/medicarehub


---

📌 Notes

Backend architecture follows industry best practices

Frontend and backend are decoupled

API-first approach ensures scalability

Easily extendable to React or Next.js

Designed as a production-ready prototype

Suitable for academic evaluation and real-world use



---

👨‍⚕️ Doctor Information

Name: Dr. Ali Waqar

Qualification: MBBS

Hospital: RHC Rodu Sultan

Location: Tehsil 18 Hazari, District Jhang

Email: aliwaqar.khokhar24@gmail.com

Services:

General Consultation

Emergency Management


