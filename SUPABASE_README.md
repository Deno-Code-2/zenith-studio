
# Zenith Studio - Supabase Backend Documentation

This document outlines the Supabase implementation for Zenith Studio's website. Supabase provides the backend infrastructure for authentication, database, storage, and serverless functions.

## Project Configuration

- **Project ID**: xkkuuckikhoavbkiaogd
- **Base URL**: https://xkkuuckikhoavbkiaogd.supabase.co

## Edge Functions

### 1. `subscribe-newsletter`

**Purpose**: Handles newsletter subscription requests from the website footer.

**Implementation**:
- Accepts email addresses through a simple form in the footer
- Validates email format
- Stores subscriber information in the database
- Integrates with email delivery service (Resend) to send confirmation emails

**Code Structure**:
```typescript
// Main handler function for newsletter subscription requests
// Validates input, stores in database, and returns success/error response
```

### 2. `send-contact-email`

**Purpose**: Processes contact form submissions.

**Implementation**:
- Receives form data from the Contact page
- Validates required fields
- Stores contact information in the database
- Sends notification emails to admin and confirmation to the user

**Code Structure**:
```typescript
// Handles form submission
// Uses Resend API to deliver emails
// Returns appropriate response to the frontend
```

### 3. `ai-chatbot`

**Purpose**: Powers the AI assistant feature.

**Implementation**:
- Connects to OpenAI API for natural language processing
- Provides domain-specific responses about web development and digital solutions
- Maintains context in conversation

**Code Structure**:
```typescript
// Processes user messages
// Routes requests to OpenAI
// Formats and returns responses
```

### 4. `send-newsletter`

**Purpose**: Sends bulk newsletters to subscribers.

**Implementation**:
- Admin-triggered function to send newsletters to all subscribers
- Supports HTML content
- Includes tracking and analytics

**Code Structure**:
```typescript
// Fetches subscriber list
// Formats email content
// Sends in batches through email delivery service
```

## Database Tables

### 1. `subscribers`

Stores newsletter subscriber information:
- `id` (UUID, primary key)
- `email` (text, unique, not null)
- `created_at` (timestamp with timezone, default now())
- `status` (text, default 'active')

### 2. `contacts`

Stores information from contact form submissions:
- `id` (UUID, primary key)
- `name` (text, not null)
- `email` (text, not null)
- `message` (text, not null)
- `created_at` (timestamp with timezone, default now())
- `status` (text, default 'new')

### 3. `chat_sessions`

Stores AI chatbot conversation history:
- `id` (UUID, primary key)
- `session_id` (text, not null)
- `messages` (jsonb, default '[]')
- `created_at` (timestamp with timezone, default now())
- `updated_at` (timestamp with timezone, default now())

## Row Level Security (RLS) Policies

All tables are protected with appropriate RLS policies to ensure data security:

- Public users can submit new contact forms and subscribe to the newsletter
- Only authenticated admin users can view and manage submissions
- Chatbot sessions are ephemeral and not tied to user accounts

## Environment Variables and Secrets

The following secrets are configured for the Supabase project:

- `SUPABASE_URL`: Base URL for the Supabase project
- `SUPABASE_ANON_KEY`: Anonymous key for public access
- `SUPABASE_SERVICE_ROLE_KEY`: Admin key for privileged operations
- `SUPABASE_DB_URL`: Database connection string
- `RESEND_API_KEY`: API key for the Resend email service
- `OPENAI_API_KEY`: API key for OpenAI's services

## Authentication Flow

While the main website is public, admin features use Supabase Authentication:

1. Admin logs in through a secure portal
2. JWT token is issued and stored
3. Token is included in requests to protected endpoints
4. Backend validates token before allowing access to sensitive operations

## Future Enhancements

Planned backend improvements:

1. User accounts for clients to track project progress
2. File storage for project assets and deliverables
3. Payment integration for service packages
4. Analytics dashboard for website performance

## Testing and Debugging

Edge function logs can be accessed in the Supabase dashboard for troubleshooting. Each function includes comprehensive logging to facilitate debugging and performance monitoring.
