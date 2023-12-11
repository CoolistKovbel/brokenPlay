// pages/api/uploadFile.js

import { writeFile } from 'fs/promises';
import crypto from 'crypto';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const { channelImage } = req.body;

      const fileBuffer = Buffer.from(channelImage, 'base64');
      const path = `${process.cwd()}/public/${crypto.randomUUID()}__${Date.now()}_${channelImage.name}`;

      await writeFile(path, fileBuffer);

      res.status(200).json({ success: true, filePath: path });
    } catch (error) {
      res.status(500).json({ success: false, error: 'File upload failed' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
