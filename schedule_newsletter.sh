#!/bin/bash

# Script to schedule the PM newsletter generation

# Get the current directory
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Add the cron job to run the newsletter generator daily at 9 AM
# This will append the cron job to the current user's crontab
(crontab -l 2>/dev/null; echo "0 9 * * * cd $DIR && node newsletter_generator.js >> newsletter.log 2>&1") | crontab -

echo "Scheduled newsletter generation to run daily at 9 AM."
echo "The output will be logged to newsletter.log in the project directory."