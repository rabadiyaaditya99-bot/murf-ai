# X-Aditya - AI-Powered Audio & Video Tools 🚀

Transform text to speech, translate content, extract PDF text, and dub videos with AI technology.

## ✨ Features

- **Text to Speech**: Convert text into realistic audio using Murf AI voices
- **PDF Text Extraction**: Extract text from PDF files for processing
- **AI Text Summarization**: Summarize lengthy content using Google Gemini AI
- **Language Translation**: Translate text into multiple languages
- **Video Dubbing**: Dub videos in different languages using Murf AI
- **Dark/Light Theme**: Clean black and white design with theme switching

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- API keys for the services (see setup below)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd murf-ai-main
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Add your API keys to `.env.local`:
```env
# Google Gemini AI (for summarization)
GOOGLE_API_KEY=your_google_gemini_api_key_here

# Murf AI (for text-to-speech and video dubbing)
MURF_API_KEY=your_murf_api_key_here
MURF_API_URL=https://api.murf.ai/v1

# Optional: Other service keys
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 API Keys Setup

### Google Gemini AI (Required for Summarization)

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env.local` file as `GOOGLE_API_KEY`

### Murf AI (Required for Text-to-Speech & Video Dubbing)

1. Sign up at [Murf AI](https://murf.ai/)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file as `MURF_API_KEY`

## 🛠️ Environment Variables

Create a `.env.local` file in the root directory with these variables:

```env
# Required
GOOGLE_API_KEY=your_google_gemini_api_key
MURF_API_KEY=your_murf_api_key

# Optional
MURF_API_URL=https://api.murf.ai/v1
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📁 Project Structure

```
├── app/
│   ├── api/           # API routes
│   ├── convert/       # Text-to-speech page
│   ├── extract/       # PDF extraction page
│   ├── summarize/     # AI summarization page
│   ├── translate/     # Translation page
│   ├── dub/          # Video dubbing page
│   └── navigation/    # Main navigation page
├── components/        # Reusable components
├── context/          # React context providers
└── public/           # Static assets
```

## 🎨 Design System

The application uses a clean black and white design system:

- **Light Mode**: White backgrounds with black text
- **Dark Mode**: Black backgrounds with white text
- **Consistent Typography**: Using Geist Sans and Poppins fonts
- **Accessible**: High contrast ratios and proper focus states

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Made by Aditya

Built with ❤️ using Next.js, Tailwind CSS, Murf AI, and Google Gemini AI.
