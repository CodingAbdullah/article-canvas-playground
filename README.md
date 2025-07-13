# ArticleCanvas 🎨

A beautiful, minimalist writing platform that transforms your thoughts into polished articles with multi-format export capabilities.

## ✨ Overview

ArticleCanvas is a modern, elegant writing environment designed for creators who want to focus on their content without distractions. Built with Next.js 15, TypeScript, and Tailwind CSS, it provides a clean interface for writing, editing, and publishing articles.

## 🚀 Features

### 📝 Multi-Format Writing Support
- **Markdown Support**: Write in Markdown with real-time preview
- **Plain Text**: Simple, distraction-free writing mode
- **Medium-Style**: Rich text editing with beautiful typography
- **Format Conversion**: Seamlessly switch between formats

### 🎵 AI-Powered Audio Generation
- **Text-to-Speech**: Transform written content into high-quality audio
- **Natural Voice Synthesis**: Multiple voice options available
- **Accessibility Support**: Make your content accessible to all audiences
- **High-Quality Output**: Professional-grade audio generation

### 💾 Smart Auto-Save & Cloud Storage
- **Automatic Cloud Backup**: Never lose your work with Supabase integration
- **Unique Shareable URLs**: Generate instant shareable links for your articles
- **Server-Side Rendering**: Optimal performance and SEO
- **S3 Cloud Storage**: Reliable AWS S3 integration for file storage

### 📤 Multi-Format Export
- **Multiple Export Formats**: PDF, TXT, Markdown, and Audio files
- **High-Quality Formatting**: Professional-grade document generation
- **Cross-Platform Compatibility**: Access your content anywhere
- **Offline Access**: Download and work offline

### 🎨 Beautiful UI/UX
- **Minimalist Design**: Clean, distraction-free interface
- **Responsive Layout**: Works perfectly on all devices
- **Dark Theme**: Easy on the eyes for extended writing sessions
- **Modern Components**: Built with Radix UI and Tailwind CSS

## 🎯 Use Cases

- **Bloggers**: Create engaging content with Medium-style formatting
- **Technical Writers**: Document technical content with Markdown support
- **Content Creators**: Generate audio content from written articles
- **Publishers**: Distribute content in multiple formats across platforms

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Database**: Supabase (PostgreSQL)
- **Cloud Storage**: AWS S3
- **AI Integration**: OpenAI API
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- AWS S3 bucket
- OpenAI API key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd article-canvas-playground
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # OpenAI Configuration
   OPENAI_API_KEY=your_openai_api_key

   # AWS S3 Configuration
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   AWS_S3_BUCKET_NAME=your_s3_bucket_name
   ```

4. **Database Setup**
   
   Set up your Supabase database with the following tables:
   - `articles` table for storing article data
   - Configure appropriate RLS (Row Level Security) policies

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint


**Happy Writing! ✍️**