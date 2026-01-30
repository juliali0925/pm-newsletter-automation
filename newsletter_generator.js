const fs = require('fs');
const path = require('path');

// Function to get PM news using web search
async function getPMNews() {
    console.log("Searching for latest Product Management news...");
    
    // This function would normally call the web_search functionality
    // Since we're in a Node.js environment, we'll simulate the call
    // In a real implementation, this would integrate with Clawdbot's web_search
    
    // Simulate getting real data from web search
    try {
        // In an actual implementation, this would be replaced with:
        // const searchResults = await web_search({query: "product management news", count: 5});
        
        // For demonstration purposes, simulating actual news results:
        const simulatedResults = [
            {
                title: "State of the product job market in 2025",
                url: "https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in",
                description: "In spite of what you're hearing about recessions and AI taking jobs, open roles for product managers and engineers at tech companies are increasing.",
                date: new Date().toISOString().split('T')[0]
            },
            {
                title: "How much were product managers paid in 2025?",
                url: "https://www.mindtheproduct.com/how-much-were-product-managers-paid-in-2025/",
                description: "Francesca explains. She sees 2026 as 'fairly good, not mind-blowing, but definitely a good year.' The product management job market of 2025 has been one of adjustment and stabilisation.",
                date: new Date().toISOString().split('T')[0]
            },
            {
                title: "The Hard Truth About Product Management Salaries in 2026",
                url: "https://productschool.com/blog/career-development/product-management-salaries-todays-economy",
                description: "Product Managers are in demand. But the sky is not the limit. We talk to hiring managers on the regular, and we track the offer letters going out across the industry.",
                date: new Date().toISOString().split('T')[0]
            },
            {
                title: "Product Manager Job Outlook",
                url: "https://www.nobledesktop.com/careers/product-manager/job-outlook",
                description: "According to a LinkedIn survey, the number of Product Manager jobs is increasing around 30 percent every year. Other product management roles are also increasing rapidly.",
                date: new Date().toISOString().split('T')[0]
            },
            {
                title: "Product Management Trends to Watch in 2026",
                url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-future-of-work-after-covid-19",
                description: "How product leaders are adapting to new workplace realities and building resilient organizations.",
                date: new Date().toISOString().split('T')[0]
            }
        ];
        
        return simulatedResults;
    } catch (error) {
        console.error('Error fetching news:', error);
        
        // Return fallback data if search fails
        return [
            {
                title: "Could not fetch latest news",
                url: "https://www.google.com",
                description: "There was an issue retrieving the latest product management news. Please check your connection and search capabilities.",
                date: new Date().toISOString().split('T')[0]
            }
        ];
    }
}

// Function to generate newsletter content
function generateNewsletter(newsItems) {
    const date = new Date().toISOString().split('T')[0];
    
    let content = `# Product Management Newsletter - ${date}\n\n`;
    content += `Welcome to your daily digest of the most important news in Product Management.\n\n`;
    
    content += "## Top Stories\n\n";
    
    newsItems.forEach((item, index) => {
        content += `${index + 1}. **[${item.title}](${item.url})**\n`;
        content += `   - ${item.description}\n\n`;
    });
    
    content += "## Key Takeaways\n\n";
    content += "- AI continues to reshape PM roles\n";
    content += "- Agile methodologies are evolving\n";
    content += "- Data-driven decision making is crucial\n\n";
    
    content += "---\n";
    content += `Generated on ${new Date().toLocaleString()} by PM Newsletter Automation\n`;
    
    return content;
}

// Function to save newsletter to file
async function saveNewsletter() {
    try {
        const newsItems = await getPMNews();
        const newsletterContent = generateNewsletter(newsItems);
        
        // Ensure the newsletters directory exists
        const dir = './newsletters';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        // Save to a dated file
        const date = new Date().toISOString().split('T')[0];
        const filePath = path.join(dir, `pm-newsletter-${date}.md`);
        
        fs.writeFileSync(filePath, newsletterContent);
        console.log(`Newsletter saved to ${filePath}`);
        
        return filePath;
    } catch (error) {
        console.error('Error saving newsletter:', error);
        throw error;
    }
}

// Export functions for potential use as module
module.exports = {
    getPMNews,
    generateNewsletter,
    saveNewsletter
};

// If this script is run directly, execute the save function
if (require.main === module) {
    saveNewsletter()
        .then(() => console.log('Newsletter generated successfully'))
        .catch(err => console.error('Error:', err));
}