# ⚡️GmailGenius: Supercharge your Gmail
*Turbocharge your Gmail! GmailGenius scans new emails, instantly zapping important emails to the right team - all while you sip your coffee*

## Why GmailGenius?

I work at a startup, and our email inbox was starting to look like a hoarder’s paradise—bugs, collaboration requests, and the occasional cat meme cluttering it up. Managing it was like trying to find a needle in a haystack, except the haystack was on fire and the needle was a sarcastic comment from our intern.
So, I decided to channel my inner tech wizard and built an AI agent. This little genius scans new emails, categorizes them, and forwards them to the right team and Slack channel. Think of it as the email bouncer—only letting in the VIPs (Very Important Projects) and kicking out the spammy party crashers.
I used CrewAI for building the agent, which is like having a Swiss Army knife for AI development—just without the risk of cutting yourself. The real magic, though, comes from [Composio](https://app.composio.dev)’s powerful [Gmail](https://app.composio.dev/app/gmail) and [Slackbot](https://app.composio.dev/app/slackbot) tools. Integrating them was so easy, it felt like I was just plugging in a toaster. One minute I was drowning in emails, and the next, I was sipping coffee while my AI buddy did the heavy lifting. 

## Demo
### Check it out on Replit
[![Open in Replit](https://img.shields.io/badge/Open%20in-Replit-blue?logo=replit&style=for-the-badge)](https://replit.com/@abishkpatil/gmail-support-bot)

### Live Demo ([Live Link](https://gmailsupportbot.try.composio.dev/))
[![gmailgenius-demo](https://github.com/user-attachments/assets/100546dd-5ee2-422c-896b-fb35db544f6b)](https://drive.google.com/file/d/1ktEc7Rmw7Hzg_1tHGW3OpKDio6gjBN3A/preview)

## Description
GmailGenius simplifies the process of finding relevant emails, downloading attachments, and extracting key data. Here's how it works:

1. **Connect Services:**  
   Link your **Gmail** and **Slack** accounts to GmailGenius for seamless integration and automated email management.

2. **Configure Keywords:**  
   Add **keywords** along with corresponding email addresses and Slack channel names to customize your email routing and notification preferences.

3. **Automatic Processing:**  
   When a new email arrives in your inbox, GmailGenius **automatically processes** it using your predefined rules and settings.

4. **Intelligent Routing:**  
   Based on the configured keywords, GmailGenius **forwards the email** to the right email address ensuring efficient distribution of information.

5. **Slack Notification:**  
   GmailGenius also sends a notification to the corresponding **Slack channel** keeping your team informed in real-time.

### Under the hood, the AI agent divides the task into multiple steps and executes them:

<img width="1664" alt="Screenshot 2024-09-02 at 12 53 53 AM" src="https://github.com/user-attachments/assets/5da4bb62-5935-4ee2-bb9a-ac7e54350e62">

1. **Retrieves emails from Gmail** that match the keyword criteria.
2. **Automatically replies** to the sender
3. **Forwards email** to the configured email id and sends a message to Slack channel

## Tech Stack
- Frontend: ReactJS, Vite, TailwindCSS
- Backend: Python, FastAPI
- AI Agent: CrewAI, Composio, OpenAI
- Composio tools: [Gmail](https://app.composio.dev/app/gmail), [Slackbot](https://app.composio.dev/app/slackbot)

## Run Locally
### Setup tutorial
[![gmailgenius-demo](https://github.com/user-attachments/assets/abb24495-d242-42f3-8cff-599182f735f4)](https://drive.google.com/file/d/1kC9oVSUatqQ6Tcs3u6CTsVsmczzG-F6k/preview)

Clone the project

```bash
  git clone https://github.com/abhishekpatil4/gmail-support-bot.git
```

### Backend

Go to backend dir & run setup script, this will create a virtual environment & download necessary libraries (Note: if you're unable to execute then grant permisson -> chmod +x setup.sh)
You'll then be prompted to login to **Composio**, link **Gmail** & **Slack workspace**. 
Add API keys in **.env file**

```bash
  cd backend && ./setup.sh
```

Start the server

```bash
  python main.py
```

Start the agent

```bash
  python agent.py
```

### Frontend

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

### Composio Login
If you're prompted to login & enter API key, run the below command to login

```bash
  composio login
```

You'll be redirected to composio website, login, get the API key and paste it
