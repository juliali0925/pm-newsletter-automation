# Deploying PM Newsletter to Vercel

Follow these steps to deploy your PM Newsletter website to Vercel:

## Prerequisites

1. Create a Vercel account at [https://vercel.com/signup](https://vercel.com/signup)
2. Install Vercel CLI globally: `npm install -g vercel`

## Deployment Steps

### Option 1: Using Vercel CLI (Recommended)

1. Navigate to your project directory:
   ```bash
   cd /home/ubuntu/pm-newsletter-automation
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```
   
3. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

### Option 2: Using Git Integration (Easiest)

1. Push your code to GitHub (already done in this project)
2. Go to [https://vercel.com/import/git](https://vercel.com/import/git)
3. Connect to your GitHub account
4. Select the `pm-newsletter-automation` repository
5. Vercel will automatically detect the project and deploy it

## Post-Deployment

Once deployed, Vercel will provide you with a URL for your live site, typically in the format: `https://pm-newsletter-automation.vercel.app`

## Updating Your Newsletter

To update your newsletter content after deployment:

1. The daily cron job will continue to generate new newsletters in the `newsletters/` directory
2. To make these new newsletters available on the deployed site, you'll need to:
   - Either redeploy the site using `vercel --prod`
   - Or set up a webhook that triggers redeployment when new newsletters are generated

## Notes

- The site includes a responsive design that works on mobile and desktop
- The date selector allows you to view newsletters from different dates
- Links to the original articles are included for further reading

Your Product Management Newsletter will be accessible to anyone with the public URL once deployed.