// external imports
import createError from 'http-errors';
import multer from 'multer';
import path from 'path';

const uploader = (subfolderPath, allowedFileTypes, maxFileSize, errorMsg) => {
    // File upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolderPath}/`;

    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname);
            const fileName = `${file.originalname
                .replace(fileExt, '')
                .toLowerCase()
                .split(' ')
                .join('-')}-${Date.now()}`;

            cb(null, fileName + fileExt);
        },
    });

    // preapre the final multer upload object
    const upload = multer({
        storage,
        limits: {
            fileSize: maxFileSize,
        },
        fileFilter: (req, file, cb) => {
            if (allowedFileTypes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createError(errorMsg));
            }
        },
    });

    return upload;
};

export default uploader;
