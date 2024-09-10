
#!/bin/bash

# Create a virtual environment
echo "Creating virtual environment..."
python3 -m venv ~/.venvs/gmail_support_bot

# Activate the virtual environment
echo "Activating virtual environment..."
source ~/.venvs/gmail_support_bot/bin/activate

# Install libraries from requirements.txt 
echo "Installing libraries from requirements.txt..."
pip install -r requirements.txt

# Login to your account
echo "Login to your Composio acount"
composio login

# Add Gmail tool
echo "Add Gmail tool"
composio add gmail

# Add Slackbot tool
echo "Add Slakbot tool"
composio add slackbot

# Copy env backup to .env file
if [ -f ".env.example" ]; then
    echo "Copying .env.example to .env..."
    cp .env.example .env
else
    echo "No .env.example file found. Creating a new .env file..."
    touch .env
fi

# Prompt user to fill the .env file
echo "Please fill in the .env file with the necessary environment variables."

echo "Setup completed successfully!"
