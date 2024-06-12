// Import necessary libraries for cryptography and file system operations
const crypto = require('crypto');
const fs = require('fs');

// Function to load cryptographic hashes of known phishing sites
function loadPhishingSiteHashes() {
    try {
        const data = fs.readFileSync('phishing_detector-master\\Engineering Module\\hashes.txt', 'utf8');
        return data.split('\n').map(hash => hash.trim());
    } catch (err) {
        console.error('Error loading phishing site hashes:', err);
        return [];
    }
}

// Function to calculate the cryptographic hash of a given URL
function calculateURLHash(url) {
    return crypto.createHash('sha256').update(url).digest('hex');
}

// Function to apply similarity-based approaches using cryptographic techniques
function applySimilarityBasedApproaches(url) {
    const urlHash = calculateURLHash(url);
    const phishingSiteHashes = loadPhishingSiteHashes();
    const similarityScore = phishingSiteHashes.includes(urlHash) ? 1 : -1;
    
    // Return the similarity score
    return similarityScore;
}

function loadBlacklist() {
    try {
        const data = fs.readFileSync('blacklist.txt', 'utf8');
        return data.split('\n').map(url => url.trim());
    } catch (err) {
        console.error('Error loading blacklist:', err);
        return [];
    }
}

// Function to check if the URL is blacklisted
function isBlacklisted(url) {
    const blacklist = loadBlacklist();
    return blacklist.includes(url) ? 1 : -1;
}

const url = "https://secure.example.com/login.php?user=attacker&pass=malicious123";
const similarityScore = applySimilarityBasedApproaches(url);
console.log("Similarity Score:", similarityScore);

const url2 = "https://chennai.vit.ac.in";
const similarityScore2 = applySimilarityBasedApproaches(url2);
console.log("Similarity Score:", similarityScore2);

