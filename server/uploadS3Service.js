const { S3 } = require('aws-sdk');

class S3UploadService {
  async upload(file) {
    const bucketS3 = 'topcv-clone';
    const fileName = file.originalname || file.name;
    await this.uploadS3(file.buffer, bucketS3, `${fileName}`);
  }

  async uploadS3(file, bucket, name) {
    const s3 = this.getS3();
    const params = {
      Bucket: bucket,
      Key: name,
      Body: file,
    };
    try {
      await s3.upload(params).promise();
    } catch (err) {
      Logger.error(err);
    }
  }

  getS3() {
    return new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  removeS3(fileName) {
    const s3 = this.getS3();
    const params = {
      Bucket: 'topcv-clone',
      Key: fileName,
    };

    s3.deleteObject(params, (err) => {
      if (err) throw new Error(err);
    });
  }

  async getAllS3() {
    const s3 = this.getS3();
    const params = {
      Bucket: 'topcv-clone',
    };

    return new Promise((resolve, reject) => {
      s3.listObjects(params, (err, data) => {
        if (err) reject(err);
        resolve(data.Contents);
      });
    });
  }
}

module.exports = new S3UploadService();
