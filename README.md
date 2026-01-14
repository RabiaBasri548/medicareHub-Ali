# MediCare Hub 🏥

MediCare Hub is a full-stack healthcare web application developed for a real medical client. The project is designed to provide a professional online presence for a doctor, showcasing medical services, doctor information, and patient-related resources.

## 👩‍💻 Developer
*Rabia Basri*  
FA23-BSE-153  

## 👨‍⚕️ Client
*Dr. Ali Waqar (MBBS)*  
RHC Hospital, Rodu Sultan

## 🌐 Live Deployment
https://medicare-ten-woad.vercel.app/

## 📌 Project Overview
MediCare Hub is built as a real-client healthcare solution. It focuses on clean UI, responsive design, and core backend concepts such as routing, media handling, and API-based architecture. The project demonstrates full-stack development fundamentals and deployment of a production-ready application.

## 🛠️ Tech Stack
### Frontend
- HTML5  
- CSS3  
- JavaScript  

### Backend
- Node.js  
- Express.js  
- REST APIs  

### Database
- MongoDB  

### Tools & Deployment
- GitHub (Version Control)  
- Vercel (Deployment)

## ✨ Features
- Responsive healthcare website UI  
- Doctor profile & medical services pages  
- Media routes for images  
- Search functionality  
- File upload routes  
- Product/service post with image upload  
- Delete product/service with optional cleanup  
- RESTful API structure  
- Real client–based project architecture  

## 📂 Project Structure
Medicare-Hub/
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
│   │   ├── mediaRoutes.js
│   ├── controllers/
│   │   ├── appointmentController.js
│   │   ├── productController.js
│   │   └── mediaController.js
│   └── uploads/
│
└── README.md
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
🧪 Testing

All API endpoints tested using Postman

CRUD operations verified

Valid HTTP status codes returned

MongoDB Atlas connection tested successfully

🔢 HTTP Response Codes
Code	Meaning
200	OK
201	Created
400	Bad Request
404	Not Found
500	Server Error
⚙️ Setup Instructions (Localhost)
Frontend
Open index.html directly in browser
OR
Use Live Server extension

Backend
cd backend
npm install
npm start


Server runs on:

http://localhost:5000

🔐 Environment Variables (.env)
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/medicarehub

📌 Notes

Backend architecture follows industry best practices

Frontend and backend are decoupled

API-first approach for scalability

Easily extendable to React or Next.js

Designed as a production-ready prototype

👨‍⚕️ Doctor Information

Name: Dr. Ali Waqar

Qualification: MBBS

Hospital: RHC Rodu Sultan

Location: Tehsil 18 Hazari, District Jhang

Email: aliwaqar.khokhar24@gmail.com

Services: General Consultation, Emergency Management
