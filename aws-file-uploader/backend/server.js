require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize S3 client
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

// Endpoint to generate presigned URL
app.post('/generate-presigned-url', async (req, res) => {
    try {
        const { fileName, fileType } = req.body;
        console.log("Generating presigned URL for:", fileName, "Type:", fileType);

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,  
            Key: fileName,
            ContentType: fileType
        });

        const url = await getSignedUrl(s3, command, { expiresIn: 300 });
        res.json({ url, key: fileName });
    } catch (err) {
        console.error("AWS ERROR:", JSON.stringify(err, null, 2));
        res.status(500).json({ error: err.message, details: err });
    }
});

// Use a safe default port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
