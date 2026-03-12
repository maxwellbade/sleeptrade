import fs from 'fs';
import path from 'path';

// Dummy content generator - replace with actual logic
function generateArticleContent(coinName: string) {
  return [
    `## ${coinName} Price Prediction 2025`,
    `AI analysis predicting a price increase for ${coinName}.`,
    `## Where to Buy ${coinName}`,
    `Affiliate links to buy ${coinName} with low fees.`,
  ];
}

// Function to create content for a given coin
function createCoinContent(coinName: string) {
  const content = generateArticleContent(coinName);

  const articleData = {
    slug: coinName.toLowerCase(),
    title: `${coinName} Price Prediction 2025`,
    description: `AI analysis and price prediction for ${coinName} in 2025.`,
    keywords: [`${coinName} price prediction`, `${coinName} analysis`, `buy ${coinName}`],
    content: content,
  };

  const filePath = path.join(process.cwd(), 'content', `${coinName.toLowerCase()}.json`);
  fs.writeFileSync(filePath, JSON.stringify(articleData, null, 2));

  console.log(`Content created for ${coinName} at ${filePath}`);
}

// Main function
function main() {
  // Create content directory if it doesn't exist
  const contentDir = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir);
  }

  // Example usage: create content for Bitcoin and Ethereum
  createCoinContent('Bitcoin');
  createCoinContent('Ethereum');

  console.log('Content generation complete!');
}

main();
