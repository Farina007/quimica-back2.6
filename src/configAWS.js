import { S3Client } from "@aws-sdk/client-s3";
import 'dotenv/config'

// Inicialize o cliente S3 com as credenciais e região corretas
const s3Client = new S3Client({
  region: 'sa-east-1',
  credentials: { 
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY 
  }
});

export default s3Client
