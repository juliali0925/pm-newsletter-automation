# Product Management Newsletter Automation

This project automatically generates a daily newsletter with the latest news and articles related to Product Management.

## Features

- Daily aggregation of PM-related news
- Automated generation and storage
- Scheduled execution using cron
- Clean, readable newsletter format
- Responsive web interface for easy reading

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/juliali0925/pm-newsletter-automation.git
   cd pm-newsletter-automation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure you have web search capabilities configured in your environment.

## Usage

### Manual Execution

To manually generate a newsletter:

```bash
node newsletter_generator.js
```

### Automated Execution

To schedule the newsletter generation daily, add a cron job:

```bash
# Edit crontab
crontab -e

# Add this line to run the script daily at 9 AM
0 9 * * * cd /path/to/pm-newsletter-automation && node newsletter_generator.js
```

Alternatively, you can use the following command to schedule it:

```bash
# Run the following command to add the cron job
(crontab -l 2>/dev/null; echo "0 9 * * * cd $(pwd) && node newsletter_generator.js") | crontab -
```

## Web Interface

### Running Locally

To run the web interface locally:

```bash
npm run server
```

The website will be available at http://localhost:3000

### Deploying to Vercel

For public access, deploy to Vercel:

1. Create a Vercel account at [https://vercel.com/signup](https://vercel.com/signup)
2. Install Vercel CLI globally: `npm install -g vercel`
3. Navigate to your project directory
4. Login to Vercel: `vercel login`
5. Deploy to Vercel: `vercel --prod`

Alternatively, use Vercel's Git integration:
1. Go to [https://vercel.com/import/git](https://vercel.com/import/git)
2. Connect to your GitHub account
3. Select the `pm-newsletter-automation` repository
4. Vercel will automatically detect the project and deploy it

## Output

The generated newsletters are stored in the `newsletters/` directory with filenames in the format `pm-newsletter-YYYY-MM-DD.md`.

## Configuration

The `config.json` file contains settings for:
- News sources to monitor
- Keywords to search for
- Output directory
- Schedule (in cron format)
- Email subject line
- RSS feed options

## Integration

This script can be integrated with:
- Email automation services
- RSS feed generators
- Social media posting tools
- Slack/Discord bots