# Khair – Community Event Management Platform

### Goodness Begins When We Come Together.

Khair is a community event management platform focused on the blessed month of Ramadan. It helps people discover, create, and participate in initiatives that make a positive difference in their communities.

The platform brings organizers and volunteers together through meaningful activities such as food distribution, clothing distribution, community support, and other charitable initiatives.

## Live Website

[Visit Khair](https://khair-client.vercel.app/)

## Screenshots

<!-- Add your homepage screenshot to the repository and update the path below. -->

![Khair Homepage](./public/banner.jpg)

## Key Features

- **Explore Upcoming Events:** Browse community events and discover opportunities to participate.
- **Event Details:** View detailed event information, including date, location, organizer, description, and images.
- **Create Events:** Authenticated users can organize and publish community events.
- **Manage Events:** Organizers can view, edit, and delete the events they have created.
- **Join Events:** Authenticated users can join events and view their joined events.
- **User Profile:** Users can update their profile name and picture.
- **Community Champions:** A dynamic leaderboard highlights the top contributors based on their event contributions.
- **Authentication:** Secure email/password authentication and Google sign-in powered by Better Auth.
- **Responsive Design:** Optimized layouts for different screen sizes.
- **Light and Dark Themes:** Users can switch between light and dark appearance modes.

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- HeroUI
- Better Auth Client
- next-themes

### Backend & Database
- Node.js
- Express.js
- MongoDB
- Better Auth

## Getting Started

Follow these instructions to run the client application locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone (https://github.com/mahfuz-subed/khair-client)
```

### 2. Navigate to the Project Directory

```bash
cd khair-client
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add the required environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
BETTER_AUTH_URL=http://localhost:3000
```

Add any other authentication or backend environment variables required by your project.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to access Khair.

**Note:** The backend server and MongoDB connection must also be configured and running for the complete application to work.


---

Built with Next.js, Express.js, MongoDB, and Better Auth.
