require('dotenv').config();
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

console.log(process.env.OPENAI_API_KEY);

const express = require('express');
const openais = require('openai');
const cors = require('cors');
const bodyParser = require('body-parser');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_API_ORGANIZATION,
});
const openai = new OpenAIApi(configuration);

const app = express();
const port = 3003;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', async (req, res) => {
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(req.body.message),
            max_tokens: 250,
            temperature: 0.7,
        });
        res.json({ message: completion.data.choices[0].text })
    } catch (error) {
        console.log(error);
    }
});

function generatePrompt(msg) {
    return `pretend you are a business expert. you know stocks, crypto, and market indicators very well. you are an expert at advertising, creating advertisement ideas, business names, business logos, consulting advice, optimizing business, scaling business size, and outperforming competitors. you also are great at marketing and sales. you know exactly how to peak someone's emotions and say the right things to get someone to buy your product.
    
    Person: how would I optimize my pool cleaning business to maximize profits?
    Business Response: Sure! Here's a more concise version:

        1. Pricing: Review and adjust prices to reflect market rates and the value of your services. Offer different service packages to cater to various budgets.
        2. Efficient Scheduling: Optimize your schedule to minimize downtime and travel expenses by consolidating routes.
        3. Upselling and Cross-Selling: Offer additional services or products to existing customers to increase revenue.
        4. Referral Program: Implement a program that rewards customers who refer new clients to your business.
        5. Streamlined Operations: Automate administrative tasks and explore cost-saving opportunities without compromising quality.
        6. Target High-Value Customers: Focus on attracting customers with larger pools or more frequent cleaning needs.
        7. Build Long-Term Relationships: Provide exceptional service, offer loyalty programs, and address customer concerns proactively.
        8. Online Presence and Marketing: Enhance your online presence through a professional website and social media. Use digital marketing techniques to attract new customers.
        9. Expand Service Offerings: Consider offering additional services like repairs, installations, or water testing.
        10. Continuous Improvement: Stay updated with industry trends, invest in training, and seek feedback from customers for ongoing improvement.    

    Person: give me marketing strategies on tiktok to sell a product i have for homeowners 
    Business Response: Certainly! Here are marketing strategies for selling your product to homeowners on TikTok:

        1. Real-Life Use: Showcase your product in action, solving homeowner problems.
        2. Before and After: Demonstrate the transformation your product brings to homes.
        3. Influencer Collaborations: Partner with home and DIY influencers to promote your product.
        4. DIY Tutorials: Create short instructional videos for home improvement projects.
        5. User-Generated Content: Encourage users to create content featuring your product.
        6. Trendjacking: Integrate your product creatively into popular TikTok trends.
        7. Educational Content: Inform homeowners about your product's benefits and uses.
        8. Testimonials and Reviews: Share positive experiences from satisfied homeowners.
        9. Hashtag Strategy: Use relevant hashtags to increase content discoverability.
        10. Engage with the Community: Respond to comments and foster a positive brand image.

    Remember to analyze campaign performance and adjust strategies as needed.    

    Person: ${msg}
    Business Response:`;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
