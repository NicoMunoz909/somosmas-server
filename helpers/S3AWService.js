require('dotenv').config()
const S3 = require("aws-sdk/clients/s3")


//accesos desde el ENV
const bucket = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey

})

//funciones para subir archivos al S3 de Amazon Web Services


//exportar funciones