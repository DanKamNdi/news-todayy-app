# News Todayy

News Todayy is a modern, responsive web application built with Next.js that provides users with up-to-date news from various categories. It features user authentication and a sleek, user-friendly interface.

## Features

- User authentication (sign up, sign in, sign out)
- Responsive design for mobile and desktop
- Latest news headlines
- Category-based news (Business, Technology, etc.)
- Personalized news feed (for logged-in users)

## Technologies Used

- Next.js 14+
- React
- Firebase Authentication
- News API
- Tailwind CSS

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:\
   `git clone https://github.com/DanKamNdi/news-todayy-app.git`
2. Navigate to the project directory:\
   `cd news-today`
3. Install the dependencies:\
   `npm install`
4. Set up your environment variables:\
   Create a `.env.local` file in the root of your project and add the following variables:\
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key\
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain\
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id\
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket\
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id\
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id\
   NEWS_API_KEY=your_news_api_key\
   \
   **Important:** You need to obtain your own API keys and Firebase configuration. Do not use the values from the example, as they are placeholders.
   
   - For Firebase, create a new project in the [Firebase Console](https://console.firebase.google.com/) and obtain the configuration values.
   - For the News API, sign up at [newsapi.org](https://newsapi.org/) to get your API key.

5. Run the development server:
   `npm run dev`
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be easily deployed on platforms like Vercel or Netlify. Make sure to set up your environment variables in your deployment platform's settings.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@dankamndi](https://x.com/dankamndi) - ndirangualvinkamau@gmail.com

Project Link: [https://github.com/DanKamNdi/news-todayy-app](https://github.com/DanKamNdi/news-todayy-app)

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [News API](https://newsapi.org/)
- [Tailwind CSS](https://tailwindcss.com/)